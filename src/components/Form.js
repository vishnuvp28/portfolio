import "./Form.css";
import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
  const notify = () => toast("Message Sent!");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l5kko6x",
        "template_3fp5dxn",
        form.current,
        "Zz2kNLQKN0JoE2MPx",
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name"></input>
        <label>Email</label>
        <input type="email" name="user_email"></input>
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          name="message"
        />
        <button className="btn" onClick={notify}>
          Submit
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default Form;
