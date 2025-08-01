import { useState } from "react";
import "../styles/form.css";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault();

    if (username.length > 8) {
      setErrorUserName("");
      setUserColor("green");
    } else {
      setErrorUserName("Username must be at least 8 characters long");
      setUserColor("red");
    }

    if (email.includes("@gmail.com")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("Email should have @gmail.com");
      setEmailColor("red");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password must be at least 8 letters long");
      setPasswordColor("red");
    }

    if (password !== "" && password === confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Password and Confirm Password must be equal");
      setConfirmPasswordColor("red");
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-image"></div>

        <form>
          <input
            type="text"
            placeholder="Name"
            style={{ borderColor: userColor }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <p className="error">{errorUserName}</p>

          <input
            type="text"
            placeholder="Email"
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p className="error">{errorEmail}</p>

          <input
            type="text"
            placeholder="Password"
            style={{ borderColor: passwordColor }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="error">{errorPassword}</p>

          <input
            type="text"
            placeholder="Confirm Password"
            style={{ borderColor: confirmPasswordColor }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <p className="error">{errorConfirmPassword}</p>

          <button className="submit-btn" onClick={validate}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Form;
