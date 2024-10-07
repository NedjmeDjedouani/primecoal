
const FeatureCard = (props:{paragraphs: string[]}) => {
  return (
    <div className=" bg-lightgray rounded-lg basis-full ">
    <div className=" text-white space-y-5 p-4 font-light text-sm leading-loose">
 {props.paragraphs.map((p)=><p key={p}>{p}</p>)}
    </div>
  </div>
  )
}

export default FeatureCard
