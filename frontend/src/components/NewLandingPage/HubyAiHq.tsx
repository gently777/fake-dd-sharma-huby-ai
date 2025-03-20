import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import birthDayPop from "../../assets/Images/birthDayPop.png";
// import hubyAiHqTitle from "../../assets/Images/hubyAiHqTitle.png";
import hubyAIVerse from "../../assets/Images/hubyAIVerse.png";
//import checkIcon from "../../assets/Images/check_icon.png";
// import hubyAiHqNews from "../../assets/Images/hubyAiHqNews.png";
// import Spline from "@splinetool/react-spline";
//import hubyAIVerseMsg from "../../assets/Images/hubyAIVerseMsg.png";

const HubyAiHq = () => {
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.2 });
  //const [ref4, inView4] = useInView({ triggerOnce: false, threshold: 0.2 });
  // const [ref5, inView5] = useInView({ triggerOnce: false, threshold: 0.2 });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  /*
  const RoleOption = ({ title }) => (
    <button className="border-1 border-[#FA780F] hover:bg-[#FF7F50] hover:text-white rounded-xl text-sm py-[11px] px-[8px] m-[5px]">
      <span className=" ">{title}</span>
    </button>
  );
*/
  return (
    <div>
      <div className="px-[34px] md:px-[50px] text-center">
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.8 }}
          className="mulish text-[24px] lg:text-[30px] italic"
        >
          <motion.img
            src={birthDayPop}
            alt="Birthday Pop"
            className="inline-block"
            initial={{ rotate: -10 }}
            animate={inView1 ? { rotate: 0 } : { rotate: -10 }}
            transition={{ duration: 1 }}
          />{" "}
          <span>celebrating the launch of</span>
        </motion.div>

        <div
          // ref={ref2}
          // initial="hidden"
          // animate={inView2 ? "visible" : "hidden"}
          // variants={animationVariants}
          // transition={{ duration: 0.8, delay: 0.2 }}
          className="my-4 mx-6"
        >
          <img
            src={hubyAIVerse}
            alt="Huby AIverse  Title"
            className="mx-auto"
          />
        </div>

        {/* <div className="h-[210px] md:h-[500px] max-w-[95%] mx-auto">
          <Spline scene="https://prod.spline.design/ZcOLf1iqFK0q4sS3/scene.splinecode" />
        </div> */}

        <motion.div
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:text-[38px] md:text-[28px] text-[22px] max-w-[493px] lg:max-w-[875px] pb-[50px] mx-auto poppins"
        >
          The community for{" "}
          <span className="text-[#E5461A] font-semibold">
            everyone to get the most out of AI.
          </span>
        </motion.div>

        <motion.div
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 1, delay: 0.6 }}
          className="md:max-w-[569px] lg:max-w-[960px] mx-auto text-justify lg:text-[30px] md:text-[18px] text-[16px] font-[AlteHaasGrotesk]"
        >
          <span className="font-bold">
            We believe that truly harnessing AI goes beyond discussion—it’s
            about taking action. Building our personal skills. Advancing our
            careers. Growing our businesses. Supporting the local community.{" "}
          </span>
          We bring together people from all industries, each contributing a
          unique perspective. From AI beginners to experts, we solve problems
          together—from learning how to best implement AI to shaping innovations
          like the next ChatGPT. Whether you’re here for 5 minutes to discover
          your new favorite AI tool, a month to achieve your next business
          milestone, or a lifetime to lead the AI revolution, we invite you to
          join us.
        </motion.div>
        {/*
        <motion.div
          ref={ref4}
          animate={inView4 ?? "visible"}
          variants={animationVariants}
          transition={{ duration: 1, delay: 0.8 }}
          className="sm:max-w-[565px] lg:max-w-[1018px] mx-auto bg-[#FFFBF6] my-[100px] py-[15px] px-[26px] rounded-xl shadow-2xl"
        >
          <div className="flex justify-between items-center gap-[18px] lg:flex-row flex-col">
            <div className="font-[AlteHaasGrotesk] text-[22px] md:w-[21%]">
              What's your role?
            </div>
            <div className="hidden lg:block">
              <div className="grid lg:grid-cols-5 grid-cols-2 ">
                <RoleOption title="AI user" />
                <RoleOption title="AI developer" />
                <RoleOption title="Professional" />
                <RoleOption title="Tech enthusiast" />
                <RoleOption title="Content creator" />
              </div>
              <div className="grid lg:grid-cols-4 grid-cols-2 ">
                <RoleOption title="Business owner" />
                <RoleOption title="AI newcomer" />
                <RoleOption title="AI founder" />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView4 ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="border flex items-center justify-around m-[5px] mulish text-xs py-1.5 bg-[#ECECEC] rounded-lg"
                >
                  <input
                    className="bg-transparent w-[80%] py-[3px] focus:outline-none"
                    type="text"
                    placeholder="Tell us about yourself!"
                  />
                  <div className="bg-[#FA780F] rounded-full">
                    <img src={checkIcon} alt="Check Icon" className="w-3 m-1" />
                  </div>
                </motion.div>
              </div>
            </div>


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
                  className="border flex items-center justify-between m-[5px] px-3 mulish col-span-2 text-xs py-1.5 bg-[#ECECEC] rounded-lg"
                >
                  <input
                    className="bg-transparent w-[70%] py-[3px] focus:outline-none"
                    placeholder="Tell us about yourself!"
                  />
                  <div className="bg-[#FA780F] rounded-full">
                    <img src={checkIcon} alt="Check Icon" className="w-3 m-1" />
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mulish border lg:w-[11%] border-black hover:bg-[#252525] hover:text-white font-bold rounded-xl py-[8px] px-[12px] "
              onClick={() =>
                (window.location.href = "https://hubysaicommunity.slack.com")
              }
            >
              join now
            </motion.button>
          </div>
        </motion.div>
        */}
      </div>
      {/* 
      <div className="flex py-[120px] flex-wrap">
        <motion.img
          ref={ref5}
          initial="hidden"
          animate={inView5 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 1 }}
          src={hubyAIVerseMsg}
          alt="Huby AIverse message"
          className="px-0 w-full xl:w-auto "
        />
        <div className="poppins mt-14 xl:mt-0 text-[24px] md:text-[28px] lg:text-[32px] xl:text-[48px] font-semibold max-w-[300px] xl:max-w-[353px] self-center mx-auto">
          Locate the right resources to help you achieve your goals.
        </div>
      </div>
      */}
    </div>
  );
};

export default HubyAiHq;
