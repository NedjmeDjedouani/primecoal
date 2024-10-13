
const FeatureCard = (props:{paragraphs: string[]}) => {
  return (
    <div className=" bg-lightgray rounded-lg basis-full h-full ">
    <div className=" text-white space-y-5 p-4 font-light max-sm:text-xs   max-sm:leading-6 text-sm lg:text-base  leading-loose">
 {props.paragraphs.map((p)=><p key={p}>{p}</p>)}
    </div>
  </div>
  )
}

export default FeatureCard
