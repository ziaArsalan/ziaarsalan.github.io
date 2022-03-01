import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6cwo1zi",
        "template_efzazcj",
        formRef.current,
        "upnojb-FBkQkbnTXg"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h3 className="c-title">Let's discuss your project</h3>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="phone" className="c-icon" />
              +92 347 521 4748
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="email" />
              ziaarsalan94@yahoo.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="address" />
              Gulshan Iqbal, Karachi Pakistan
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={darkMode ? {backgroundColor: "#333", color: "#FFF"} : {}} type="text" placeholder="Name" name="from_name" />
            <input style={darkMode ? {backgroundColor: "#333", color: "#FFF"} : {}} type="text" placeholder="Subject" name="subject" />
            <input style={darkMode ? {backgroundColor: "#333", color: "#FFF"} : {}} type="text" placeholder="Email" name="from_email" />
            <textarea style={darkMode ? {backgroundColor: "#333", color: "#FFF"} : {}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && <div>Thank you...</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
