// export default Contact;

import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = ({ isOpen, closeModal }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!firstname || !email || !subject || !message || !lastname || !phone) {
      toast.error("Email not sent, Please fill in all fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mjvqjwgj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          subject,
          phone,
          message,
        }),
      });

      if (response.ok) {
        toast.success("Email sent successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        // Clear form fields after successful submission
        setFirstname("");
        setLastname("");
        setEmail("");
        setSubject("");
        setPhone("");
        setMessage("");

        // Close modal after sending email
        closeModal();
      } else {
        toast.error("Failed to send email", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error.message);
      toast.error("Failed to send email", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      {/* Contact modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-[50%] h-[70%]">
            <h1 className="font-bold text-center items-center text-xl mb-5">
              Get in Touch
            </h1>
            <form className="ml-10" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstname" className="text-md font-bold">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    required
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    placeholder="John"
                    className="bg-white h-12 rounded-lg p-1 w-full focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="text-md font-bold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    id="lastname"
                    required
                    placeholder="Doe"
                    className="bg-white h-12 rounded-lg p-1 w-full focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="text-md font-bold">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    id="email"
                    placeholder="johndoe@gmail.com"
                    className="bg-white h-12 rounded-lg p-1 w-full focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-md font-bold">
                    Phone
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    id="phone"
                    placeholder="+43 600 000 000"
                    className="bg-white h-12 rounded-lg p-1 w-full focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="text-md font-bold">
                  Subject
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  id="subject"
                  required
                  placeholder="Subject"
                  className="bg-white h-12 rounded-lg p-1 w-full focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-md font-bold">
                  Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  required
                  placeholder="Message"
                  className="bg-white h-[80px] rounded-lg p-2 w-full focus:outline-none"
                />
              </div>
              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-lg mr-4"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
