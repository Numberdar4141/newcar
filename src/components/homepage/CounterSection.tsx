import NumberCounter from "../ui/NumberCounter";

function CounterSection() {
  return (
    <section className=" bg-black bg-cover stp-30 sbp-30 relative ">
      <div className="container text-white flex justify-between items-center gap-8 sm:gap-4 md:gap-8 lg:gap-16 max-sm:flex-col">
        <div className="text-center max-w-[280px]">
          <p className="display-4 pb-3">
            <NumberCounter start={1} end={1500} /> +
          </p>
          <p>
          Join over 1500+ satisfied customers who've found their perfect new ride with us!
          </p>
        </div>
        <div className="h-[120px] w-[2px] bg-white/70 mt-8 max-sm:hidden"></div>
        <div className="text-center max-w-[280px]">
          <p className="display-4 pb-3">
            <NumberCounter start={1} end={1000} />{" "}+
          </p>
          <p>
          Thousands of drivers trust our insurance solutions for peace of mind on the road.
          </p>
        </div>
        <div className="h-[120px] w-[2px] bg-white/70 mt-8 max-sm:hidden"></div>
        <div className="text-center max-w-[280px]">
          <p className="display-4 pb-3">
            <NumberCounter start={0} end={2.5} /> Cr  +
          </p>
          <p>Over 3 Crore in Loans Disbursed, Driving Dreams Forward!</p>
        </div>
      </div>
    </section>
  );
}

export default CounterSection;
