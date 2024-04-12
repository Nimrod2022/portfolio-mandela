const darkMessageIcon = "/assets/message-icon-dark.svg";
const lightMessageIcon = "/assets/message-icon-light.svg";

const Form = ({ darkMode }) => {
  return (
    <>
      <section className={darkMode ? "dark" : ""}>
        <div className="satoshi  bg-[#F0F0F4] dark:bg-[#151C25] flex flex-col justify-center items-center">
            <h1 className=" text-[#26313F] dark:text-white text-2xl font-extrabold pt-20">Get in Touch</h1>
        <div className=" py-16 flex gap-x-10 ">
            
            <div className="bg-[url('/assets/contact-image.png')] size-72"></div>
            <div className="grid grid-cols-1 gap-x-16 it gap-y-8 lg:grid-cols-5">
              <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form action="#" className="space-y-3">
                  <div>
                    <p>I am interested in...</p>
                    <div className="flex justify-between gap-10 pt-5">
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
                            {" "}
                            Frontend{" "}
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
  
                    <div className="flex-1 pt-5">
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
                      rows="3"
                      id="message"
                    ></textarea>
                  </div>
  
                  <div className="mt-4 flex flex-col items-center justify-center ">
                    <button
                      type="submit"
                      className={`inline-block w-full text-md rounded-lg bg-[#26313F] dark:bg-[#55E5A4] px-5 py-3 font-bold text-white dark:text-[#151C25] sm:w-auto `}
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
