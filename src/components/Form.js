import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(
    //   process.env.NEXT_PUBLIC_SERVICE_ID,
    //   process.env.NEXT_PUBLIC_TEMPLATE_ID,
    //   process.env.NEXT_PUBLIC_PUBLIC_ID
    // );

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error);
        }
      );

    e.target.reset();
  };

  return (
    <form
      className="form__inputs container"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <h2>Send me An Email</h2>
      <input
        className=" border border-dark dark:border-light text-light dark:text-dark"
        type="text"
        name="user_name"
        placeholder="Full Name"
        required
      />
      <input
        className=" border border-dark dark:border-light text-light dark:text-dark"
        type="email"
        placeholder="Email"
        name="user_email"
        required
      />
      <input
        className="border  border-dark dark:border-light text-light dark:text-dark"
        type="text"
        placeholder="Message"
        name="subject"
        required
      />

      <textarea
        className="border border-dark dark:border-light text-light dark:text-dark"
        id=""
        cols="30"
        rows="10"
        placeholder="Description"
        name="message"
        required
      ></textarea>
      <button
        className="btn border border-dark dark:border-light"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
