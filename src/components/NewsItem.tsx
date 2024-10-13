interface NewsProps {
    content:string;
    date:string;
    id:number;
}

const NewsItem = (props:NewsProps) => {
  return (
    <div className=" flex space-x-5  bg-black p-6 rounded-lg relative">
    <div className="flex  justify-center items-center text-orangy">
      <span className=" font-bold text-3xl  max-sm:text-sm">{props.id}</span>
    </div>
    <div className=" flex text-white mb-2">
      <p className="text-sm">
       {props.content}
      </p>
    </div>
    <div className="absolute text-white bottom-[5px] right-5   ">
      <span className="text-xs font-light ">{props.date}</span>
    </div>
  </div>
  )
}

export default NewsItem
