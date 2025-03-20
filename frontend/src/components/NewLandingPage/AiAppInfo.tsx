import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";
import checkIcon from "../../assets/Images/check_icon.png";
//import searchIcon from "../../assets/Images/searchIcon.png";
//import appInfoRow1 from "../../assets/Images/appInfoRow1.png";
//import appInfoRow2 from "../../assets/Images/appInfoRow2.png";
//import appInfoRow3 from "../../assets/Images/appInfoRow3.png";
import { useEffect, useRef, useState } from "react";
// import { PiCheckCircleDuotone } from "react-icons/pi";

const AiAppInfo = () => {
  const [ref4, inView4] = useInView({ triggerOnce: false, threshold: 0.2 });

  const RoleOption = ({ title }) => (
    <button className="border-1 border-[#FA780F] hover:bg-[#FA780F] rounded-xl text-sm py-[11px] px-[8px] m-[5px]">
      <span className=" ">{title}</span>
    </button>
  );

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  /*
  const cardAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.8 },
  };
*/
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [textRef]);
  return (
    <div>
      <div className="bg-[#252525] text-white md:p-[50px] p-[16px]">
        <div className="text-center mt-[100px]">
          <motion.div
            className="mulish text-[30px] italic"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            coming soon
          </motion.div>
          <motion.div
            className="font-[AlteHaasGrotesk] text-[28px] lg:text-[38px] font-bold py-[10px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            More than a marketplace.
          </motion.div>
          <div
            ref={textRef}
            className="poppins xl:text-[80px] md:text-[42px] text-[25px] bg-gradient-to-r from-[#FF7F50]/[50] via-[#FF7F50] to-[#ECFF11]/[100] bg-clip-text text-transparent font-bold"
          >
            {isVisible && (
              <TypeAnimation
                sequence={["A journey of leveraging AI.", 5000]}
                speed={50}
                repeat={0}
                style={{ display: "inline-block" }}
                cursor={false}
              />
            )}
          </div>

          <motion.div
            className="text-[24px] lg:text-[38px] font-[inter] max-w-[600px] lg:max-w-[818px] mx-auto py-[30px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Easily discover & engage with{" "}
            <span className="font-bold">
              personalized, trustworthy, and powerful AI solutions.
            </span>
          </motion.div>
          <motion.div
            className="font-[AlteHaasGrotesk] lg:text-[30px] sm:text-[20px] text-[16px] sm:max-w-[600px] lg:max-w-[880px] text-justify mx-auto md:py-[60px] py-[20px] p-[16px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            While everyone knows and loves ChatGPT, have you explored
            Hunch.tools or Eraser.io? With thousands of new AI apps emerging
            daily, it's nearly impossible to try them all. That's why we've
            created a dedicated marketplace for AI solutions—spotlighting
            innovative, growing tools that offer capabilities beyond what
            ChatGPT provides. Here, you can earn money, gain visibility, and
            build your reputation by working with and helping shape powerful AI
            solutions. So many people are doing incredible things with AI, and
            this is your place to be part of it.
          </motion.div>
        </div>
        <motion.div
          ref={ref4}
          animate={inView4 ?? "visible"}
          variants={animationVariants}
          transition={{ duration: 1, delay: 0.8 }}
          className="sm:max-w-[565px] lg:max-w-[1203px] mx-auto bg-[#303030]  my-[100px] p-2 rounded-xl shadow-2xl"
        >
          <div className="flex justify-between items-center sm:px-4 px-2 gap-[24px] py-[14px] lg:flex-row flex-col">
            <div className="font-[AlteHaasGrotesk] text-[22px]">
              What's your role?
            </div>
            <div className="hidden lg:block">
              <div className="grid sm:grid-cols-5 grid-cols-2 gap-2 ">
                <RoleOption title="AI user" />
                <RoleOption title="AI developer" />
                <RoleOption title="Professional" />
                <RoleOption title="Tech enthusiast" />
                <RoleOption title="Content creator" />
              </div>
              <div className="grid sm:grid-cols-4 grid-cols-2 gap-2">
                <RoleOption title="Business owner" />
                <RoleOption title="AI newcomer" />
                <RoleOption title="AI founder" />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView4 ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="border flex items-center justify-around m-[5px] mulish text-xs py-1.5 bg-[#ECECEC] text-[#666666] rounded-lg"
                >
                  <input
                    className="bg-transparent w-[70%] py-[3px] focus:outline-none placeholder:text-[#666666]"
                    type="text"
                    placeholder="Tell us about yourself!"
                  />

                  <div className="bg-[#FA780F] rounded-full">
                    <img src={checkIcon} alt="Check Icon" className="w-3 m-1" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* for small devices */}
            <div className="block lg:hidden">
              <div className="grid grid-cols-2 gap-1 ">
                {[
                  "AI user",
                  "AI developer",
                  "Professional",
                  "Tech enthusiast",
                  "Content creator",
                  "Business owner",
                  "Business owner",
                  "AI founder",
                ].map((titleName) => (
                  <RoleOption title={titleName} />
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView4 ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="border flex items-center justify-between m-[5px] px-3 mulish col-span-2 text-xs py-1.5 bg-[#ECECEC] text-[#666666] rounded-lg"
                >
                  <input
                    className="bg-transparent w-[70%] py-[3px] focus:outline-none placeholder:text-[#666666]"
                    placeholder="Tell us about yourself!"
                  />
                  <div className="bg-[#FA780F] rounded-full">
                    <img src={checkIcon} alt="Check Icon" className="w-3 m-1" />
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mulish border hover:bg-[#ffffff] hover:text-[#000000] rounded-xl py-[8px] px-[12px] cursor-pointer"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/1U_EMmFvcN2gsUpmLOo1y7ClOI95zgUCctH73T1GnGhI",
                  "_blank"
                )
              }
            >
              Request early access
            </motion.div>
          </div>
        </motion.div>
        {/*
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <img src={searchIcon} alt="" className="mx-auto mb-[40px]" />
          <div className="font-[AlteHaasGrotesk] text-[24px] lg:text-[38px] font-bold max-w-[500px] lg:max-w-[715px] mx-auto mb-[70px]">
            Find the AI solutions you didn’t know how much you’d love...
          </div>
        </motion.div>
        <div className="bg-white mx-[20px]">
          <div className="grid xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-[30px] px-[20px] lg:px-[50px] rounded-[10px] gap-y-[50px]">
            {Array(6)
              .fill(appInfoRow1)
              .map((src, index) => (
                <motion.img
                  key={index}
                  src={src}
                  alt=""
                  className="mx-auto"
                  // initial={{ opacity: 0, y: 20 }}
                  // animate={{ opacity: 1, y: 0 }}
                  // transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  {...cardAnimation}
                />
              ))}
            {Array(6)
              .fill(appInfoRow2)
              .map((src, index) => (
                <motion.img
                  key={index}
                  src={src}
                  alt=""
                  className="mx-auto"
                  // initial={{ opacity: 0, y: 20 }}
                  // animate={{ opacity: 1, y: 0 }}
                  // transition={{ duration: 0.5, delay: 1.4 + (index + 6) * 0.1 }}
                  {...cardAnimation}
                />
              ))}
            {Array(6)
              .fill(appInfoRow3)
              .map((src, index) => (
                <motion.img
                  key={index}
                  src={src}
                  alt=""
                  className="mx-auto"
                  // initial={{ opacity: 0, y: 20 }}
                  // animate={{ opacity: 1, y: 0 }}
                  // transition={{ duration: 0.5, delay: 1.4 + (index + 12) * 0.1 }}
                  {...cardAnimation}
                />
              ))}
            {Array(6)
              .fill(appInfoRow1)
              .map((src, index) => (
                <motion.img
                  key={index}
                  src={src}
                  alt=""
                  className="mx-auto"
                  // initial={{ opacity: 0, y: 20 }}
                  // animate={{ opacity: 1, y: 0 }}
                  // transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  {...cardAnimation}
                />
              ))}
            {Array(6)
              .fill(appInfoRow2)
              .map((src, index) => (
                <motion.img
                  key={index}
                  src={src}
                  alt=""
                  className="mx-auto"
                  // initial={{ opacity: 0, y: 20 }}
                  // animate={{ opacity: 1, y: 0 }}
                  // transition={{ duration: 0.5, delay: 1.4 + (index + 6) * 0.1 }}
                  {...cardAnimation}
                />
              ))}
          </div>
          <div className="font-[AlteHaasGrotesk] text-black md:mx-[80px] sm:mx-[45px] mx-[16px] py-[30px] text-center">
            <div className="md:text-[28px] lg:text-[38px] text-[25px]">
              and many more coming soon to you.
            </div>
            <div className="flex justify-between items-center flex-wrap">
              <div className="mulish text-[12px] lg:text-[22px] italic max-w-[240px] lg:max-w-[690px] text-start py-[30px] lg:py-[50px]">
                Check out some of our favorite GenAI solutions above. And please
                feel free to share your favorites with us on the right!
              </div>
              <div className="flex gap-2 items-center bg-[rgba(162,162,162,0.19)] h-[30px] lg:h-[47px] justify-between max-w-[220px] lg:max-w-[320px] w-full rounded-xl p-[10px] relative">
                <input
                  type="text"
                  className="bg-transparent placeholder:text-[12px] focus:outline-none w-[85%] pl-3"
                  placeholder="Enter a URL of your favorite AI solution(s)!"
                />
                <div className="bg-[#FA780F] min-w-[20px] min-h-[20px] rounded-full mr-[10px] my-[10px] absolute right-0">
                  <img src={checkIcon} alt="" className="p-[5px]" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className=" bg-[#FF7F50] mx-[20px] lg:max-w-[950px] lg:mx-auto rounded-[15px] mt-[80px] mb-[40px] py-[30px]">
          <div className="text-white px-[10px] md:px-[50px] lg:px-[100px] ">
            <div className="mulish italic text-[17px] sm:text-[25px]">
              We are launching our first curated drop of AI!
            </div>
            <div className="poppins text-[24px] md:text-[32px] lg:text-[48px]">
              Top solutions for <span className="font-bold"> developers</span>
            </div>
            <div className="flex-wrap sm:flex justify-between mt-[25px]">
              <div className="flex gap-2 flex-wrap md:justify-start justify-center">
                <button
                  className="py-[8px] px-[12px] rounded-[15px] text-black hover:!text-white bg-white hover:!bg-[#252525]"
                  onClick={() =>
                    window.open(
                      "mailto:support@huby.ai?subject=huby AI first curated drop&body=Hi, I'm interested in getting involved in huby's first curated drop of AI products.",
                      "_blank"
                    )
                  }
                >
                  Get updates
                </button>
                <button
                  className="py-[8px] px-[12px] rounded-[15px] bg-[#252525] hover:bg-white hover:text-[#252525]"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/1Lq_jGH6oZ8lTQK9Co2huVmXr6RQjjXHgYzm7NvqV5eU/",
                      "_blank"
                    )
                  }
                >
                  Submit your AI
                </button>
              </div>
              <div className="flex bg-[#252525] h-[40px] rounded-xl px-[10px] mt-2 md:mt-0 justify-center">
                <input
                  type="text"
                  className="bg-transparent pr-[7px] sm:pr-[10px] md:pr-[20px] text-[10px] sm:text-[18px] focus:outline-none pl-2"
                  placeholder="What category should we curate next?"
                />
                <div className="bg-[#FA780F] rounded-full  my-[10px] p-[5px] md:p-[6px] lg:p-[5px]">
                  <img src={checkIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAppInfo;
