import { Link } from "react-router-dom";
import StaggerEffectTwo from "../animation/StaggerEffectTwo";

import heroIllus from "/images/herobg7.png";
import FadeRight from "../animation/FadeRight";

function Hero() {
  const text = "Payroll";
  const animateWord = text.split("");
  return (
    <section className="  bg-repeat stp-30  overflow-hidden">
     
     
      <div className="absolute -left-[200px]  rounded-[1176px] max-w-full lg:w-[1176px] h-[1176px] overflow-hidden"></div>
      <div className="xxl:ml-[calc((100%-1296px)/2)] lg:max-xxl:py-10 max-xxl:container relative z-20 max-lg:pt-15 text-s1 grid grid-cols-12 ">
      
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center gap-2">
          <p className="uppercase text-base lg:text-xl font-semibold">
            Efficiency Payroll and workforce mastery{" "}
          </p>
          <div className="display-2 ">
            We Make{" "}
            <div className="text-s3 inline-flex">
              {animateWord.map((word, idx) => (
                <StaggerEffectTwo key={idx} id={idx}>
                  <span>{word}</span>
                </StaggerEffectTwo>
              ))}
            </div>
            <br /> Painless.
          </div>
          <p className="max-w-[550px]">
            We get your employees paid while providing online access to
            paystubs, tax reports & payroll tax filings.
          </p>
          <div className="flex justify-start items-center gap-4 pt-6 lg:pt-8 pb-15">
            <Link
              to={"/contact"}
              className="font-medium bg-s2 py-2 lg:py-3 px-4 lg:px-6 rounded-full text-mainTextColor"
            >
              Get Started
            </Link>
            <Link to={"/faq"} className=" underline font-medium">
              Learn More
            </Link>
          </div>
        </div>
       

        <div className="col-span-12 lg:col-span-9 lg:col-start-6">
        <FadeRight>
          <img src={heroIllus} className=" mt-[70px] " alt="" />
          </FadeRight>
        </div>
       
      </div>
    </section>
  );
}

export default Hero;
