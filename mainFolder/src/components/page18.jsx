import React, { useEffect } from "react";
import "../styles/d18.css";

const CodeConfirmation = () => {
  useEffect(() => {
    const codes = document.querySelectorAll(".code");

    codes[0].focus();

    codes.forEach((code, idx) => {
      code.addEventListener("keydown", (e) => {
        if (e.key >= 0 && e.key <= 9) {
          codes[idx].value = "";
          setTimeout(() => codes[idx + 1].focus(), 10);
        } else if (e.key === "Backspace") {
          setTimeout(() => codes[idx - 1].focus(), 10);
        }
      });
    });
  });
  return (
    <div className="d20Wrapper">
      <h2>Verify Your Account</h2>
      <p>
        We emailed you the six digit code to blablabla@gmail.com <br /> Enter
        the code below to confirm your email address.
      </p>
      <div class="code-container">
        <input
          type="number"
          class="code"
          placeholder="0"
          min="0"
          max="9"
          required
        />
        <input
          type="number"
          class="code"
          placeholder="0"
          min="0"
          max="9"
          required
        />
        <input
          type="number"
          class="code"
          placeholder="0"
          min="0"
          max="9"
          required
        />
        <input
          type="number"
          class="code"
          placeholder="0"
          min="0"
          max="9"
          required
        />
        <input
          type="number"
          class="code"
          placeholder="0"
          min="0"
          max="9"
          required
        />
        <input
          type="number"
          class="code"
          placeholder="0"
          min="0"
          max="9"
          required
        />
      </div>
      <small class="info">
        This is design only. We didn't actually send you an email as we don't
        have your email, right?
      </small>
    </div>
  );
};

export default CodeConfirmation;
