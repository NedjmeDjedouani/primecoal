import { FeaturesParagraphs } from "../constants";

const MainFeatureCard = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-bottom  max-sm:text-xs   max-sm:leading-5  h-full max-md:bg-slate-600 p-4  lg:text-base md:bg-mainCard space-y-5 rounded-lg  " 
    >  
   {FeaturesParagraphs[1].map((p)=><p  key={p}>{p} </p>)}
    </div>
  );
};

export default MainFeatureCard;
