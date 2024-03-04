import { FiArrowRight } from "react-icons/fi";
import TrendingCoins24 from "./TrendingCoins24";
import Image from "next/image";

export const GetStarted: React.FC = () => {
  return (
<div
 // className="w-4/6 pl-7"
>
<div
className="mr-8 w-full bg-[#0052fe] p-4 border border-1-#DEDFE2 shadow-custom rounded-xl text-center flex flex-col content-center">
<p className=" text-lg w-full h-auto gap-5 text-white font-bold top-6">
 Get Started with KoinX <br /> for FREE
</p>
<p className="sm-text-[10px] md-text-[10px] lg-text-[14px] text-white ">
 With our range of features that you can equip for free, Konix allows
 you to be more educated and aware of your tax report.
</p>
<div className="flex flex-col items-center justify-center">
<Image
src={"/assets/graphic.png"}
alt="graphic"
width={240}
height={240}
/>{" "}
<button className="lg-w-1/6 md-w-auto rounded-lg bg-white text-black px-2 py-2 font-extrabold flex flex-row items-center">
 Get Started for free <FiArrowRight />
</button>
</div>
</div>
<div className="w-[100%] h-auto pt-7">
<TrendingCoins24 />
</div>
</div>
  );
};
