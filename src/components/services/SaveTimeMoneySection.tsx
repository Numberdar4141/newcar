import FadeDown from "../animation/FadeDown";
import FadeRight from "../animation/FadeRight";
import FadeTop from "../animation/FadeTop";
import img from "/images/fin2.png";

function SaveTimeMoneySection({ isImgRight }: { isImgRight?: boolean }) {
  return (
    <section className="stp-30 sbp-30 bg-black overflow-hidden">
      <div
        className={`${
          isImgRight
            ? "xxl:ml-[calc((100%-1296px)/2)]"
            : "xxl:mr-[calc((100%-1296px)/2)]"
        } max-xxl:container grid grid-cols-12 lg:gap-6 xxl:gap-32 `}
      >
        <div
          className={`col-span-12 lg:col-span-6  flex justify-start items-start self-stretch  ${
            isImgRight ? "order-2" : "max-lg:order-2"
          }`}
        >
          <img
            src={img}
            alt=""
            className={` ${isImgRight ? " " : " "}  mt-[50px]`}
          />
        </div>
        <div className=" col-span-12 lg:col-span-6 flex justify-center items-start flex-col">
          <FadeDown>
            <p className="bg-p1 py-3 px-5 rounded-full text-white ">
              Insurance
            </p>
          </FadeDown>
          <FadeRight>
            <h2 className="display-4  text-white pt-4 pb-6">
            Drive with confidence, Protected every mile of the Way
            </h2>
          </FadeRight>
          <FadeTop>
            <p className=" text-white">
            Navigate the roads ahead knowing you're safeguarded by our comprehensive car insurance. Experience peace of mind with coverage tailored to your needs, ensuring you're always prepared for the unexpected twists and turns of the journey.
            </p>
          </FadeTop>
        </div>
      </div>
    </section>
  );
}

export default SaveTimeMoneySection;
