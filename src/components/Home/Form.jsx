const darkMessageIcon = "/assets/message-icon-dark.svg";
const lightMessageIcon = "/assets/message-icon-light.svg";

// bg-[#F0F0F4]

const Form = ({ darkMode }) => {
  return (
    <>
      <section className={`${darkMode ? "dark" : ""}`}>
        <div
          id="/contact"
          className="satoshi bg-[#F0F0F4] dark:bg-[#151C25] flex flex-col justify-center items-center relative z-10 pt-10 md:pt-10"
        >
          <h1 className=" text-[#26313F] dark:text-white text-2xl md:text-3xl font-extrabold">
            Get in Touch
          </h1>
          <div className="w-full rounded:xl md:flex  md:w-auto py-10 md:justify-c md:px-auto px-2  ">
            <div className="bg-[url('/assets/contact-image.png')] hidden md:block form-height contact-form-image">
              <h1 className="text-white  justify-center items-center text-4xl px-20 pt-52">
                Let’s discuss
              </h1>
              <h1 className="text-white pt-3  justify-center items-center text-4xl px-20">
                something <span className="text-[#55E5A4]">cool </span>
              </h1>
              <h1 className="text-white pt-3 justify-center items-center text-4xl px-20">together</h1>
            </div>
            <div className=" gap-y-8 lg:grid-cols-5">
              <div className=" rounded-lg md:rounded-none form-height  bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form action="#" className="space-y-2  ">
                  <p className="text-lg">I am interested in...</p>
                  <div className="flex justify-between gap-4 md:gap-10 pt-5">
                    <div className="flex-1">
                      <label
                        htmlFor="Frontend"
                        className="block w-full cursor-pointer rounded-lg border  border-gray-200 p-2 text-[#B4A7BC] hover:border-gray-400 has-[:checked]:border-none has-[:checked]:bg-[#26313F]  dark:has-[:checked]:bg-[#55E5A4] has-[:checked]:text-white dark:has-[:checked]:text-[#000000]"
                        tabIndex="0"
                      >
                        <input
                          className="sr-only h-6 w-6"
                          id="Frontend"
                          type="radio"
                          tabIndex="-1"
                          name="option"
                        />
                        <p className="text-md font-extrabold text-center">
                          Frontend
                        </p>
                      </label>
                    </div>

                    <div className="flex-1">
                      <label
                        htmlFor="geoinformatics"
                        className="block w-full cursor-pointer rounded-lg border border-gray-200 p-2 text-[#B4A7BC] hover:border-gray-400 has-[:checked]:border-none has-[:checked]:bg-[#26313F]  dark:has-[:checked]:bg-[#55E5A4] has-[:checked]:text-white dark:has-[:checked]:text-[#000000]"
                      >
                        <input
                          className="sr-only h-6 w-6"
                          id="geoinformatics"
                          type="radio"
                          tabIndex="-1"
                          name="option"
                        />
                        <p className="text-md text-center "> Geoinformatics </p>
                      </label>
                    </div>
                  </div>

                  <div className="hidden  flex-1 pt-5">
                    <label
                      htmlFor="other"
                      className="block cursor-pointer rounded-lg border border-gray-200 p-2 w-16 text-[#B4A7BC] hover:border-gray-400 has-[:checked]:border-none has-[:checked]:bg-[#26313F]  dark:has-[:checked]:bg-[#55E5A4] has-[:checked]:text-white dark:has-[:checked]:text-[#000000]"
                      tabIndex="0"
                    >
                      <input
                        className="sr-only h-6 w-4"
                        id="other"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                      />
                      <p className="text-md "> Other </p>
                    </label>
                  </div>

                  <div />

                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full rounded-lg border-b border-gray-200 p-3 text-sm "
                      placeholder="Name"
                      type="text"
                      id="name"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full rounded-lg border-b border-gray-200 p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        className="w-full rounded-lg border-b border-gray-200 p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="message">
                      Message
                    </label>

                    <textarea
                      className="w-full rounded-lg border-b border-gray-200 p-3 text-sm"
                      placeholder="Message"
                      rows="4"
                      id="message"
                    ></textarea>
                  </div>

                  <div className="pt-3 md:pt-8 flex flex-col items-center justify-center ">
                    <button
                      type="submit"
                      className={`inline-block w-auto text-md rounded-lg bg-[#26313F] dark:bg-[#55E5A4] px-5 py-3 font-bold text-white dark:text-[#151C25] sm:w-auto `}
                    >
                      <span className="flex items-center gap-4">
                        <img
                          src={darkMode ? darkMessageIcon : lightMessageIcon}
                          alt="message-icon"
                          className="size-5"
                        />
                        <p>Send message</p>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
