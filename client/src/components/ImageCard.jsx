
const ImageCard = ({id, img, title, price, author, icon1, icon2}) => {
  return (
    <div className=" rounded-lg bg-white shadow-2xl shadow-black p-2">
    <div className="w-full h-[250px] overflow-hidden">  
       <img src={img} 
       alt={title}
       className="w-full h-full hover:scale-105 transition-all ease-linear duration-300 transform cursor-pointer py-3 px-1"
       />
     </div>
      <p className="font-semibold text-black w-fit px-3 text-sm mt-1"> 
        {"@" + author.charAt(0).toUpperCase() + author.slice(1)}
      </p>      
      <div className="flex justify-between items-center mt-2">
           <div>
               <h3 className="text-lg font-bold">{title}</h3>
               <p className="text-black font-semibold ">Price:${price}</p>
           </div>
           <div className="flex gap-3 justify-center items-center">
           {icon1}
           {icon2}
           </div>
       </div>  
    </div>
  )
}

export default ImageCard