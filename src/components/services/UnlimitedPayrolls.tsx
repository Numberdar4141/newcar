import FadeLeft from "../animation/FadeLeft";
import FadeRight from "../animation/FadeRight";
import img from "/images/black2.png";

function UnlimitedPayrolls() {
  return (
    <section className="stp-30  sbp-30">
      <div className="container grid grid-cols-12 gap-6 max-xxl:overflow-hidden">
        <div className="col-span-12 md:col-span-6">
          <FadeLeft>
            <div className="  flex justify-start items-start flex-col">
              <p className="bg-p1 py-3 px-5 rounded-full text-white ">
                Finance
              </p>
              <h2 className="display-4 pt-4 pb-6">
              Financing Your Vehicle <span className="text-[22px]">Navigating the Financial Landscape of Car Ownership</span>
              </h2>
              <p className=" text-bodyText">
              Explore the intricacies of car finance to secure the best deal on your vehicle. From loans to leasing, unravel the complexities of ownership costs. Drive confidently with a solid understanding of financing options tailored to your needs.
              </p>
            </div>
          </FadeLeft>
        </div>
        <div className="col-span-12 md:col-span-6 xxl:col-start-8">
          <FadeRight>
            <div className=" flex justify-center items-center">
              <img src={img}  className="" alt="" />
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}

export default UnlimitedPayrolls;
