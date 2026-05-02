import { useState, useRef, useEffect } from "react";
import "./App.css";

function OtpInput({ n }) {
  let [inp, setInp] = useState(["", "", "", "", ""]);
  let [message, setMessage] = useState("");

  let refs = useRef([]);
  let otpRef = useRef(Math.floor(Math.random() * 100000) + 1);
  function handleChange(e, index) {
    let value = e.target.value.slice(-1);
    if (isNaN(value)) return;
    let newInput = inp.map((el, i) => {
      return i == index ? (el = value) : el;
    });
    setInp(newInput);
    if (value) {
      refs.current[index + 1]?.focus();
    }
  }

  useEffect(() => {
    alert(`Your OTP is ${otpRef.current}`);
  }, []);

  useEffect(() => {
    console.log(refs);
    refs.current[0]?.focus();
  }, []);

  useEffect(() => {
    const valid = inp.every((val) => val !== "");
    if (valid) {
      let num = inp.join("");
      num == otpRef.current
        ? setMessage({ msg: "Verified", done: true })
        : setMessage({ msg: "OTP is incorrect", done: false });
    }
  }, [inp]);
  return (
    <>
      <h1>OTP Input</h1>
      {inp.map((el, index) => {
        return (
          <input
            type="text"
            key={index}
            value={el}
            ref={(el) => {
              refs.current[index] = el;
            }}
            onChange={(e) => {
              handleChange(e, index);
            }}
          ></input>
        );
      })}
      {message ? (
        <p style={{ color: message.done ? "green" : "red" }}>{message.msg}</p>
      ) : null}
    </>
  );
}

function App() {
  return (
    <>
      <OtpInput n={5} />
    </>
  );
}

export default App;
