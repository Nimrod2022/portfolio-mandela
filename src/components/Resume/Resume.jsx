const Resume = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="exo mx-4 md:mx-0 mt-5 md:mt-0 border md:w-[50%] border-gray-400 leading-7 cursor-pointer shadow-lg mb-16 rounded-lg p-10 hover:transform hover:scale-105 transition duration-300 ease-in-out"
        id="experience"
      >
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-[90%]">
            <h2 className="text-[#676E71] font-bold text-xl">
              Student assistant
            </h2>
            <p className="mt-3">2023</p>
            <p className="mt-3">Department of Geoinformatics</p>
            <p className="text-[#4f585b] mt-2 font-semibold">
              Salzburg, Austria
            </p>
          </div>

          <div className="flex flex-col">
            <p className=" md:ml-16 w-[90%]">
              I was tasked with providing technical support to students in
              remote sensing courses. Additionally, I helped in the
              redevelopment of remote sensing curriculumn for the UNIGIS master
              program.
            </p>

            <img src="/assets/zgis.png" alt="" className="mt-7 md:ml-16 w-56" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
