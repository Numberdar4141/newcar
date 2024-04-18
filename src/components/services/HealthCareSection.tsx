import { healthCareFeatures } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";
import SectionHeadingCenter from "../global/SectionHeadingCenter";
import img from "/images/bg2j.png";

function HealthCareSection() {
  return (
    <section className="stp-30  sbp-30">
      <div className="container">
        <SectionHeadingCenter
          sectionName="New Car"
          sectionTitle="Know more to Choose Better"
          sectionDesc="Unlock the power of informed decisions with our comprehensive new car . From specifications to reviews, find your perfect ride effortlessly."
        />
        <div className="grid grid-cols-12 stp-15">
          <div className="col-span-12 lg:col-span-12 xl:col-span-5 flex justify-center items-center overflow-hidden">
            <img
              src={img}
              alt=""
              className=" duration-500  rounded-2xl"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 xxl:col-start-7 flex flex-col gap-6 xl:gap-10 justify-center items-center ">
            {healthCareFeatures.map(({ id, title, desc, icon }, idx) => (
              <div className="" key={id}>
                <StaggerEffect id={idx}>
                  <div
                    key={id}
                    className="flex justify-start items-start gap-4"
                  >
                    <div className=" text-s3 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1 ">
                      {icon}
                    </div>
                    <div className="">
                      <h4 className="heading-4">{title}</h4>
                      <p className=" text-bodyText pt-3">{desc}</p>
                    </div>
                  </div>
                </StaggerEffect>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HealthCareSection;
