const Home = () => {
  return (
    <div className="flex flex-col md:space-x-10 space-y-10 md:flex-row items-center w-[100vw] justify-center md:px-8  py-20 bg-gradient-to-r from-[#bdbdbd] to-[#e9e9e9]">
      <div className="w-[100%] sm:w-[45%] flex items-center justify-center relative">
        <div className="h-[100%] w-[100%] absolute top-8 md:-left-20 ">
          <span className="text-[160px] sm:text-[180px] leading-[120px] font-extrabold opacity-40 text-white ">
            Air Pods Max
          </span>
        </div>
        <div className="z-10 m-auto ">
          <img
            className="h-[480px] sm:h-[500px] min-w-[300px] sm:max-w-[500px]"
            src="/frontPic.png"
            alt="Headphone"
          />
        </div>
      </div>
      <div className="w-[100%]  md:w-[55%] flex items-center justify-center lg:justify-between md:relative">
        <div className="w-[320px]  space-y-10 text-center lg:text-left text-[#393a3e]">
          <span className="text-6xl font-bold">Air Pods Max</span>
          <p>
            "AirPods are the most popular headphones in the world beloved for
            their effortless setup, incredible sound quality, and iconic
            design." said Greg joswiak
          </p>
          <button className="px-10 py-2 rounded-3xl hover:outline-[3px] outline outline-2 outline-gray-400">
            Read More
          </button>
        </div>
        <div className="pt-40 absolute -right-4 -bottom-[142px] hidden lg:block">
          <img
            className="max-h-[700px] w-[350px] "
            src="/sidePic.png"
            alt="SidePic"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
