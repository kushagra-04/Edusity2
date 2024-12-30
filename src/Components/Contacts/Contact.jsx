import React from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "740c2fec-f869-4730-bf86-9965f9a07e4c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officiis dignissimos 
                consequuntur quas, vero ea molestiae ipsum facere eveniet
                 consequatur, vel debitis eaque temporibus
                  laudantium dolorum
                 explicabo? Praesentium, quo ratione!</p>
            <ul>
                <li> <img src={mail_icon} alt="" />Contact@KushagraSharma.dev</li>
                <li><img src={phone_icon} alt="" />+91-9588332252</li>
                <li><img src={location_icon} alt="" />27 Meera colony, Jaipur <br /> Rajasthan India</li>

            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit} >
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Phone number</label>
                <input type="tel" name='phone' placeholder='Enher Your moblie number' required/>
                <label >Write Your messages here</label>
                <textarea name="message" id="" rows="6" placeholder='Enter Your Text' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact