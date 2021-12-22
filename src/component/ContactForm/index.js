import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../actions";
import FormGroup from "../FormGroup";
import "./ContactForm.css";

const ContactForm = () => {

  const dispatch = useDispatch();
  const users = useSelector(state => state.user);
  
  const [modal, setModal] = useState(false);
  const [fname, setfname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [nameError, setnameError] = useState(null);
  const [emailError, setemailError] = useState(null);
  const [phoneError, setphoneError] = useState(null);

  const validateName = (value) => {
    if (value === "") setnameError("This field is Requied!");
    else if (/[^a-zA-Z\s]/.test(value))
      setnameError("This field should includes Alphabets");
    else {
      setnameError(null);
      setfname(value.replace(/\s+/g, ' ').trim());
    }
  };

  const validateEmail = (value) => {
    if (value === "") setemailError("This field is Required!");
    else if (!/\S+@\S+\.\S+/.test(value))
      setemailError("This field should includes @ and .");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      setemailError("This should not includes two @ symbol");
    else {
      setemailError(null);
      setemail(value.replace(/\s+/g, '').trim());
    }
  };

  const validatePhone = (value) => {
    if (value === "") setphoneError("This field is required!");
    else if (/[\D]/.test(value))
      setphoneError("This field should includes Only digits");
    else if (value.length < 10) setphoneError("It should 10 digit Number");
    else {
      setphoneError(null);
      console.log(value);
      setphone(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if ( fname === "" || email === "" || phone === "" ) {
      if (fname === "") setnameError("This field is required");
      if (email === "") setemailError("This field is required");
      if (phone === "") setphoneError("This field is required");
    } else if (nameError || emailError || phoneError) return;
    else {
      setModal(true);
      dispatch(addUser({fname,email,phone}));
      e.target.reset();
    }
  };

  const closeModal = () => {
    setModal(false);
    console.log(users);
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
            maxlength={"10"}
          />
          <div className="form-control">
            <button>Submit</button>
          </div>
        </form>
        {modal ? (
          <div className="modal" onClick={closeModal}>
            <div className="successfull" onClick={(e) => e.stopPropagation()}>
              <h3>Form Submitted Successfull!</h3>
              <h4>We'll Contact you Soon</h4>
              <button onClick={closeModal}>Ok</button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ContactForm;