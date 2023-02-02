import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <div className=" my-12 flex items-center justify-center relative md:flex-row flex-col space-y-10 ">
      <div className="md:mr-8">
        <img className="h-[400px] w-[270px]" src="/girlPic.jpg" alt="Girl" />
      </div>
      <div className="max-w-[400px] text-[#666669] md:space-y-4 space-y-10 relative px-10 text-center md:text-start">
        <span className=" md:w-[350px] md:block text-6xl tracking-tight font-bold text-[#c7c7cb] relative md:-left-32">
          Sounds like an epiphany
        </span>
        <p className="text-sm leading-5 mb-3">
          Industry-leading Active Noice Cancellation counters external sound
          with equal anti-noice, allowing you to immerse yourself in what you're
          listening to. <br />
          Press the noice control button to switch to Transeperancy mode, which
          leds outside sound in so you can interact naturally with your
          sorroundings
        </p>
        <button className="h-[50px] m-auto md:m-0 w-[50px] flex items-center justify-center rounded-[50%] hover:outline-[3px] outline outline-2 outline-gray-400">
          <FontAwesomeIcon className="text-md" icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Experience;
