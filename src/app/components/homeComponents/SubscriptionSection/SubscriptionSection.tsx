import Subscription from "./Subscription";

const SubscriptionSection = () => {
  return (
    <div className="full-bleed h-[400px]  w-full flex flex-col items-center gap-16 py-[30px] sm:py-[80px]  bg-black">
      <div className="flex flex-col">
        <h2 className="uppercase text-center text-[18px]! sm:text-[24px]! mb-4 sm:mb-0">
          want the latest night club news
        </h2>
        <p className="px-4 sm:px-0 text-center sm:text-left">
          Subscribe to our newsletter and never miss an
          <span className="text-(--red)"> Event</span>
        </p>
      </div>
      <Subscription></Subscription>
    </div>
  );
};

export default SubscriptionSection;
