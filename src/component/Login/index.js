import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions";
import times from "../../assets/images/times-solid.svg";
import {
  FigureClose,
  Form,
  FormControl,
  FormGroup,
  FormWrapper,
} from "./login.style";

const Login = ({close}) => {

  const [userName, setUserName] = useState("");
  const [errorusername, seterroruser] = useState(null);
  const [password, setpassword] = useState("");
  const [errorpassword, seterrorpassword] = useState(null);
  const dispatch = useDispatch();

  const validateUser = (e) => {
    e.preventDefault();
    if (userName === "" || password === "") {
      if (userName === "") seterroruser("This field is Required!");
      else seterroruser(null);
      if (password === "") seterrorpassword("This feild is Required!");
      else seterrorpassword(null);
      return;
    }
    JSON.parse(sessionStorage.getItem("users")).forEach((element) => {
      if (element.username === userName) {
        if (element.password === password) {
          dispatch(login(element));
          seterroruser(null);
          seterrorpassword(null);
          close();
        }
        seterrorpassword("Incorrect Password");
        seterroruser(null)
      }
      else {
        seterroruser("Username not found");
        seterrorpassword(null);
      }
    });
    
  };

  return (
    <FormWrapper>
      <FigureClose onClick={close}>
        <img src={times} alt="close" />
      </FigureClose>
      <Form>
        <FormGroup>
          <label htmlFor="username">Username : </label>
          {errorusername ? <span>{errorusername}</span> : null}
          <input
            type="text"
            id="username"
            onBlur={(e) => setUserName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password : </label>
          {errorpassword ? <span>{errorpassword}</span> : null}
          <input
            type="password"
            id="password"
            onBlur={(e) => setpassword(e.target.value)}
          />
        </FormGroup>
        <FormControl>
          <button onClick={validateUser}>Login</button>
        </FormControl>
      </Form>
    </FormWrapper>
  );
};

export default Login;
