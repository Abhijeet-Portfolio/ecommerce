import { useState } from "react";
import FormGroup from "./FormGroup";
import "../assets/css/ContactForm.css";

const ContactForm = () => {
  
  const [modal, setModal] = useState(false);
  const [nameError, setnameError] = useState(null);
  const [emailError, setemailError] = useState(null);
  const [phoneError, setphoneError] = useState(null);

  const validateName = value => {
      if(value === '') setnameError('This field is Requied!');
      else if((/[^a-zA-Z\s]/).test(value)) setnameError('This field should includes Alphabets');
      else if(!(/^[^\s]+(\s+[^\s]+)*$/).test(value)) setnameError('Full name should not start and end with space');
      else if((/[^\s]([ ]{2,})[^\s]/).test(value)) setnameError('No 2 space between Words');
      else setnameError(null);
  };

  const validateEmail = value => {
      if(value === '') setemailError('This field is Required!');
      else if(!(/\S+@\S+\.\S+/).test(value)) setemailError('This field should includes @ and .');
      else if((/[\s]/).test(value)) setemailError('This field should not includes Space');
      else if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(value)) setemailError('This should not includes two @ symbol');
      else setemailError(null);
  }

  const validatePhone = value => {
    if(value === '') setphoneError('This field is required!');
    else if((/[^0-9]/).test(value)) setphoneError('This field should includes Only digits');
    else if(value.length < 10) setphoneError('It should 10 digit Number');
    else setphoneError(null);
  }

  const onSubmit = e => {
      e.preventDefault();
      if(e.target[0].value === '' || e.target[1].value === '' || e.target[2].value === '') {
        if(e.target[0].value === '') setnameError('This field is required');
        if(e.target[1].value === '') setemailError('This field is required');
        if(e.target[2].value === '') setphoneError('This field is required');
      }
      else if(nameError || emailError || phoneError) return
      else {
        setModal(true);
        e.target.reset();
      }
  }

  return (
    <section className="contact-form">
      <div className="wrapper">
        <h2>Contact Form</h2>
        <form onSubmit={onSubmit}>
          <FormGroup
            name={"Full Name"}
            error={nameError}
            value={(e) => validateName(e.target.value)}
            maxlength={30}
          />
          <FormGroup
            name={"Email"}
            error={emailError}
            value={(e) => validateEmail(e.target.value)}
            maxlength={30}
          />
          <FormGroup
            name={"Contact Number"}
            error={phoneError}
            value={(e) => validatePhone(e.target.value)}
            maxlength={'10'}
          />
          <div className="form-control">
            <button>Submit</button>
          </div>
        </form>
        {modal ? <div className="modal" onClick={() => setModal(false)}>
          <div className="successfull" onClick={e => e.stopPropagation()}>
            <h3>Form Submitted Successfull!</h3>
            <h4>We'll Contact you Soon</h4>
            <button onClick={() => setModal(false)}>Ok</button>
          </div>
        </div> : null}
        
      </div>
    </section>
  );
};

export default ContactForm;
