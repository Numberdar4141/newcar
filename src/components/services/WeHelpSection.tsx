import { PiCheckCircleFill } from "react-icons/pi";
import FadeRight from "../animation/FadeRight";
import StaggerEffect from "../animation/StaggerEffectOne";
import img from "/images/moneycar.png";

const offeringsItems = [
  "Find a Better Price: If you discover a better price for the same vehicle elsewhere, simply share the official proforma invoice with a detailed price breakdown.",
  "Price Verification: We'll carefully examine the proforma invoice to ensure it meets our comparison criteria and corresponds to the same vehicle model and specifications.",
  "Price Match: Upon confirmation, we'll match the competing price and offer you an extra ₹10,000 discount on your purchase",
  
  
];
function WeHelpSection() {
  return (
    <section className="stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          <h1 className="display-4">
          How Cashback Works
          </h1>
          <p className=" text-bodyText pt-4 pb-6 lg:pb-8">
          At NewCar, we're committed to ensuring you receive the best deal possible. Start your car buying journey with confidence today!
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
