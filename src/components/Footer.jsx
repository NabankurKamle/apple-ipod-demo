const Footer = () => {
  return (
    <div className="flex items-center justify-center md:justify-start md:px-24 py-20 md:relative bg-gradient-to-l from-[#bdbdbd] to-[#e9e9e9]">
      <div className="w-[320px]  space-y-10 text-center md:text-left text-[#393a3e]">
        <span className="text-5xl font-bold">Magical experience</span>
        <p>
          AirPods Max inherits all of the wireless, effortlessmagic of the
          AirPods family. From setup to siri commands, they make the listening
          experience completely fluid day to day, device to device.
        </p>
        <button className="px-10 py-2 rounded-3xl hover:outline-[3px] outline outline-2 outline-gray-400">
          Read More
        </button>
      </div>
      <div className="pt-40 absolute right-10 lg:right-16 md:-top-16 lg:-top-56 hidden md:block">
        <img
          className="lg:h-[500px] md:h-[300px] lg:w-[550px] md:w-[300px]"
          src="/casePic.png"
          alt="Case"
        />
      </div>
    </div>
  );
};

export default Footer;
