import classes from "./AuthInputs.module.css";
import { useState } from "react";
import { styled } from "styled-components";

// Examples of using styling with styled components
const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  // Example of dynamic computing of classes
  let emailInputClasses = classes["controls-input"];
  let passwordInputClasses = classes["controls-input"];

  if (emailNotValid) {
    emailInputClasses += " " + classes["input-invalid"];
  }

  if (passwordNotValid) {
    passwordInputClasses += " " + classes["input-invalid"];
  }

  return (
    <div className={classes["auth-inputs"]} id="auth-inputs">
      <ControlContainer>
        <p>
          <Label $invalid={emailNotValid}>Email</Label>
          <input
            type="email"
            // example of a dynamic inline styling
            style={{
              backgroundColor: emailNotValid ? "#fed2d2" : "#d1d5db",
            }}
            // example of setting styles dynamically with a class
            className={emailInputClasses}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <Label $invalid={passwordNotValid}>Password</Label>
          <input
            type="password"
            // example of a dynamic inline styling
            style={{
              backgroundColor: passwordNotValid ? "#fed2d2" : "#d1d5db",
            }}
            // example of setting styles dynamically with a class
            className={passwordInputClasses}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </ControlContainer>
      <div className={classes.actions}>
        <button type="button" className={classes.textButton}>
          Create a new account
        </button>
        <button className={classes.button} onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
}
