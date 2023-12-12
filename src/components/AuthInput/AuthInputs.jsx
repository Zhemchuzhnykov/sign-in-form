import classes from "./AuthInputs.module.css";
import { useState } from "react";

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

  return (
    <div className={classes.authInputs} id="auth-inputs">
      <div className={classes.controls}>
        <p>
          <label className={emailNotValid ? classes.invalid : ""}>Email</label>
          <input
            type="email"
            // example of a dynamic inline styling
            style={{
              backgroundColor: emailNotValid ? "#fed2d2" : "#d1d5db",
            }}
            // example of setting styles dynamically with a class
            className={emailNotValid ? classes.invalid : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <label className={emailNotValid ? classes.invalid : ""}>
            Password
          </label>
          <input
            type="password"
            // example of a dynamic inline styling
            style={{
              backgroundColor: emailNotValid ? "#fed2d2" : "#d1d5db",
            }}
            // example of setting styles dynamically with a class
            className={passwordNotValid ? classes.invalid : undefined}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </div>
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
