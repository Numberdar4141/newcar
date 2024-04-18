import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { featuresCard } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";

function Features() {
  return (
    <section className="bg-black bg-no-repeat stp-30 sbp-30">
      <div className="container">
        <div className="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
          <div className="  max-w-[600px] flex justify-center items-start flex-col">
        
            <h1 className="display-4 text-white pt-4 ">
            Perfect solutions for your new car journey.
            </h1>
          </div>
          <p className="text-white max-w-[500px]">
          Unlock flawless solutions tailored for your new car adventure. From expense tracking to seamless integration, elevate your driving experience with ease. Experience perfection in every mile
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 stp-15">
          {featuresCard.map(({ id, icon, name, desc }, idx) => (
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 " key={id}>
              <StaggerEffect id={idx}>
                <div className="bg-white  shadow-lg shadow-gray-900 hover:shadow-xl   rounded-2xl p-6 xl:p-8 flex flex-col  group hover:border-mainTextColor duration-700 hover:bg-s2">
                  <div className="text-4xl  pb-6 group-hover:text-mainTextColor duration-500">
                    {icon}
                  </div>
                  <h4 className="heading-4  pb-5">{name}</h4>
                  <p className=" pb-6">{desc}</p>
                  <Link
                    to={"/contact"}
                    className="flex justify-start items-center gap-2 font-medium"
                  >
                    Learn more <GoArrowRight />
                  </Link>
                </div>
              </StaggerEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
