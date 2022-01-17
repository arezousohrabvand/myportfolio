import {useState} from "react";
import "./contact.scss";
import {db} from "../../firebase"

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const [loader, setLoader] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);
  
      db.collection("contacts")
        .add({
          name: name,
          email: email,
          message: message,
        })
        .then(() => {
          setLoader(false);
          alert("Your message has been submitted👍");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
  
      setName("");
      setEmail("");
      setMessage("");
    };
  
    
    return (
        <div  className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.png" alt=""/>
            </div>
            <div className="right">
                <h2>Contact Me</h2>
                <form  className="form" onSubmit={handleSubmit} >
                    <label  class="label">Name</label>
                    <input   placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)} />
                    <label className="label" >Email</label>
                    <input  placeholder="Email" type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
                    <label  class="label">Your Message:</label>
                    <textarea   placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)} ></textarea>
                    <button type="submit" style={{ background: loader ? "#ccc" : "  #5f2c3e " }}>Send</button>
                
                </form>
            </div>
          
        </div>
    )
}

export default Contact
