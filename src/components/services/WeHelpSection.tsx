import { PiCheckCircleFill } from "react-icons/pi";
import FadeRight from "../animation/FadeRight";
import StaggerEffect from "../animation/StaggerEffectOne";
import img from "/images/black5.png";

const offeringsItems = [
  "Reserve your dream ride hassle-free with our easy New Car Booking service",
  "Protect your investment with our comprehensive New Car Insurance coverage",
  "Drive home your dream car with flexible Car Financing options tailored to your needs",
  "Personalize your new ride with our exclusive Fancy Number Booking service",
  
];
function WeHelpSection() {
  return (
    <section className="stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          <h1 className="display-4">
          Embark on Your Automotive Adventure Today!
          </h1>
          <p className=" text-bodyText pt-4 pb-6 lg:pb-8">
          Explore our curated selection of top-quality vehicles, tailored to elevate your driving experience. Start your journey towards automotive excellence with us
          </p>
          <h3 className="heading-3 pb-6">Our Neu Car Offerings:</h3>
          <ul className="flex flex-col gap-5 justify-start items-start">
            {offeringsItems.map((item, idx) => (
              <li key={idx}>
                <StaggerEffect id={idx}> 
                  <div className="flex justify-start items-center gap-2">
                    <span className="text-2xl text-s1">
                      <PiCheckCircleFill />
                    </span>{" "}
                    {item}
                  </div>
                </StaggerEffect>
              </li>
            ))}
          </ul>
        </div>
        <div className="xxl:col-start-8 col-span-12 md:col-span-6 xxl:col-span-5 overflow-hidden flex justify-center items-center">
          <FadeRight>
            <img
              src={img}
              alt=""
              className="object-fit hover:scale-110 duration-500"
            />
          </FadeRight>
        </div>
      </div>
    </section>
  );
}

export default WeHelpSection;
