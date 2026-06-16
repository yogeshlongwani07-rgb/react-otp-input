import { useState, useRef, useEffect } from "react";
import "./App.css";

function OtpInput({ n }) {
  const [inp, setInp] = useState(() => Array(n).fill(""));
  let [message, setMessage] = useState("");
  let [timer, setTimer] = useState(10);
  let [timerDone, setTimerDone] = useState(false);
  let [shake, setShake] = useState(false);

  let refs = useRef([]);

  function generateOTP(length) {
    let otp = "";

    for (let i = 0; i < length; i++) {
      otp += Math.floor(Math.random() * 10);
    }

    return otp;
  }

  const otpRef = useRef(generateOTP(n));

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

  function handlePaste(e) {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, n);

    if (!pasted) return;

    const newInp = Array(n).fill("");

    pasted.split("").forEach((digit, index) => {
      newInp[index] = digit;
    });

    setInp(newInp);

    const nextIndex = Math.min(pasted.length, n) - 1;
    refs.current[nextIndex]?.focus();
  }

  function functionInput(e, index) {
    if (
      e.key !== "Backspace" &&
      e.key !== "ArrowRight" &&
      e.key !== "ArrowLeft"
    )
      return;
    if (e.key == "Backspace") {
      const newInp = [...inp];
      if (newInp[index] !== "") {
        ((newInp[index] = ""), setInp(newInp));
      } else if (index > 0) {
        newInp[index - 1] = "";
        setInp(newInp);
        refs.current[index - 1]?.focus();
      }
    }
    if (e.key == "ArrowRight") {
      refs.current[index + 1]?.focus();
    }
    if (e.key == "ArrowLeft") {
      refs.current[index - 1]?.focus();
    }
  }

  function sendOTP() {
    alert(`Your OTP is ${otpRef.current}`);
  }

  function handleSendAgain() {
    otpRef.current = Math.floor(Math.random() * 100000) + 1;
    alert(`Your OTP is ${otpRef.current}`);

    setInp(["", "", "", "", ""]);
    setMessage("");
    setTimer(10);
    setTimerDone(false);
    refs.current[0]?.focus();
  }

  useEffect(() => {
    if (timer === 0) {
      setTimerDone(true);
      return;
    }
    const interval = setInterval(() => {
      setTimer((pre) => pre - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);
  useEffect(() => {
    sendOTP();
  }, []);

  useEffect(() => {
    console.log(refs);
    refs.current[0]?.focus();
  }, []);

  useEffect(() => {
    const valid = inp.every((val) => val !== "");
    if (valid) {
      refs.current[inp.length - 1]?.blur();
      let num = inp.join("");
      if (num == otpRef.current) {
        setMessage({ msg: "Verified", done: true });
      } else {
        setMessage({ msg: "OTP is incorrect", done: false });
        setShake(true);
      }
    }
  }, [inp]);
  return (
    <>
      <div>
        <h1>OTP Input</h1>
        <h1> {timer}</h1>
      </div>

      {inp.map((el, index) => {
        return (
          <input
            className={shake ? "shake" : ""}
            type="text"
            key={index}
            value={el}
            ref={(el) => {
              refs.current[index] = el;
            }}
            onChange={(e) => {
              handleChange(e, index);
            }}
            onKeyDown={(e) => functionInput(e, index)}
            onPaste={(e) => handlePaste(e)}
          ></input>
        );
      })}
      {message ? (
        <p style={{ color: message.done ? "green" : "red" }}>{message.msg}</p>
      ) : null}
      <div>
        <br />
        <button
          className={timerDone ? "btn btn-success" : "btn btn-success disabled"}
          onClick={handleSendAgain}
        >
          Send OTP Again
        </button>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <OtpInput n={5} />
      <br />
      <br />
    </>
  );
}

export default App;
