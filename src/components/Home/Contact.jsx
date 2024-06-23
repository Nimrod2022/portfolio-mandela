import { toast } from "react-toastify";
import { useState, useRef, useEffect } from "react";

const darkMessageIcon = "/assets/message-icon-dark.svg";
const lightMessageIcon = "/assets/message-icon-light.svg";

const Contact = ({ darkMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [interest, setInterest] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const frontendRadioButtonRef = useRef(null);

  useEffect(() => {
    setInterest("Frontend");

    if (frontendRadioButtonRef.current) {
      frontendRadioButtonRef.current.checked = true;
      frontendRadioButtonRef.current.dispatchEvent(
        new Event("change", { bubbles: true })
      );
    }
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
  
    if (!name || !email || !message || !phone || !interest) {
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
          name,
          email,
          phone,
          message,
          interest,
        }),
      });
  
      if (response.ok) {
        setIsSubmitted(true);
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
  
        setTimeout(() => {
          setIsSubmitted(false);
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setInterest("");
        }, 3000);
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
      <section id="contact" className={`${darkMode ? "dark" : ""}`}>
        <div className="satoshi bg-[#F0F0F4] dark:bg-[#151C25] min-h-screen flex flex-col justify-center items-center relative pt-10">
         

          <h1 className="text-[#26313F] dark:text-white text-2xl md:text-3xl font-extrabold">
            Get in Touch
          </h1>
          <div className="w-full md:flex rounded-lg md:overflow-hidden md:w-auto my-10 md:px-0 px-3">
            <div className="bg-[url('/assets/contact-image.png')] hidden md:block form-height contact-form-image">
              <h1 className="text-white justify-center items-center text-4xl px-20 pt-44">
                Let’s discuss
              </h1>
              <h1 className="text-white pt-3 justify-center items-center text-4xl px-20">
                something{" "}
                <span
                  className={darkMode ? "text-[#55E5A4]" : "text-[#5598EE]"}
                >
                  cool{" "}
                </span>
              </h1>
              <h1 className="text-white pt-3 justify-center items-center text-4xl px-20">
                together
              </h1>
            </div>

            <div className="rounded-lg md:rounded-none form-height bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <p className="text-lg">I am interested in...</p>
              <form
                action="#"
                className="md:space-y-4 space-y-2 z-50"
                onSubmit={sendEmail}
              >
                <div className="flex justify-between gap-4 md:gap-10 pt-5">
                  <div className="flex-1">
                    <label
                      htmlFor="Frontend"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-2 text-[#B4A7BC] hover:border-gray-400 has-[:checked]:border-none has-[:checked]:bg-[#26313F] dark:has-[:checked]:bg-[#55E5A4] has-[:checked]:text-white dark:has-[:checked]:text-[#000000]"
                      tabIndex="0"
                    >
                      <input
                        className="sr-only h-6 w-6"
                        id="Frontend"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                        value="Frontend"
                        ref={frontendRadioButtonRef}
                        onChange={(e) => setInterest(e.target.value)}
                      />
                      <p className="text-md font-extrabold text-center">
                        Frontend
                      </p>
                    </label>
                  </div>

                  <div className="flex-1">
                    <label
                      htmlFor="geoinformatics"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-2 text-[#B4A7BC] hover:border-gray-400 has-[:checked]:border-none has-[:checked]:bg-[#26313F] dark:has-[:checked]:bg-[#55E5A4] has-[:checked]:text-white dark:has-[:checked]:text-[#000000]"
                    >
                      <input
                        className="sr-only h-6 w-6"
                        id="geoinformatics"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                        value="Geoinformatics"
                        onChange={(e) => setInterest(e.target.value)}
                      />
                      <p className="text-md text-center"> Geoinformatics </p>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none dark:focus:border-[#55E5A4] focus:border-[#26313F]"
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none dark:focus:border-[#55E5A4] focus:border-[#26313F]"
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="johndoe@gmail.com"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none dark:focus:border-[#55E5A4] focus:border-[#26313F]"
                      placeholder="+43 600 000 000"
                      type="text"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none dark:focus:border-[#55E5A4] focus:border-[#26313F]"
                    placeholder="Message"
                    rows="4"
                    id="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <div className="md:pt-0 flex flex-col items-center justify-center">
                  <button
                    type="submit"
                    className={`inline-block w-auto text-md rounded-lg px-3 py-2 md:px-5 md:py-3 font-bold sm:w-auto ${
                      isSubmitted
                        ? "bg-green-500 text-white"
                        : "bg-[#26313F] dark:bg-[#55E5A4] text-white dark:text-[#151C25]"
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      <img
                        src={darkMode ? darkMessageIcon : lightMessageIcon}
                        alt="message-icon"
                        className="size-5"
                      />
                      <p>
                        {isSubmitted
                          ? "Message sent successfully"
                          : "Send message"}
                      </p>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
