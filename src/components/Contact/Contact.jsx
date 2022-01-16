import { useRef, useState, useContext } from 'react'
import emailjs from "emailjs-com";
import   './Contact.css'
import Phone from '../../images/phone.png'
import Email from '../../images/email.png'
import Address from '../../images/address.png'
import { ThemeContext } from "../../Context";

const Contact = () => {
    const formRef = useRef()
    const[done,setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_tjj7lgm', 'template_46dl2u9', formRef.current, 'user_0DyEznRFQXRMXwbHSl9OJ')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
        <div className="c"> 
            <div className="c-bg"></div>  
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src= {Phone} alt="" className="c-icon" />
                            +54 38165455548
                        </div>
                        <div className="c-info-item">
                            <img src= {Email} alt="" className="c-icon" />
                            julianfbsanchez9@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src= {Address} alt="" className="c-icon" />
                            Tucuman
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref = {formRef} onSubmit={handleSubmit}>
                        <input style = {{backgroundColor: darkMode && "#333"}} type = "text" placeholder = "Name" name = "user_name" />
                        <input style = {{backgroundColor: darkMode && "#333"}} type = "text" placeholder = "Subject" name = "user_subject" />
                        <input style = {{backgroundColor: darkMode && "#333"}} type = "text" placeholder = "Email" name = "user_email" />
                        <textarea style = {{backgroundColor: darkMode && "#333"}} rows = "5" placeholder = "Message" name = "message"></textarea>
                        <button>Submit</button>
                        {done && "Thank you"}
                    </form>
                </div>
            </div>
        </div>
    )
}

 export default Contact
