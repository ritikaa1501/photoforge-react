import { HiShoppingBag } from "react-icons/hi2";
import { RiHeartAdd2Fill } from "react-icons/ri";
import ImageCard from "./ImageCard";

const PhotoGalary = () => {
  return (
    <div className="my-50 bg-#DD7D5D flex flex-col justify-center items-center">
        <h3 className="text-3xl font-semibold my-5">Photos</h3>
        
        {/*All my photos will be listed inside this div*/}       
        <div div className="grid grid-cols-1 sm:grid-cols-4 gap-5 mb-20">
           {/* Image card  */}
           <ImageCard title="Bougainville" 
           author="Alia" 
           img="https://images.pexels.com/photos/1034403/pexels-photo-1034403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           price={20}
           icon1={<HiShoppingBag className="text-3xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>} 
           icon2={ <RiHeartAdd2Fill className="text-3xl text-red-600 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
           />

           <ImageCard title="The Beach" 
           author="Jay" 
           img="https://c4.wallpaperflare.com/wallpaper/37/62/515/nature-turquoise-sea-beach-wallpaper-thumb.jpg"
           price={30}
           icon1={<HiShoppingBag className="text-3xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>} 
           icon2={ <RiHeartAdd2Fill className="text-3xl text-red-600 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
           />

           <ImageCard title="Sunflowers" 
           author="Sia" 
           img="https://images.pexels.com/photos/3036366/pexels-photo-3036366.jpeg"
           price={50}
           icon1={<HiShoppingBag className="text-3xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>} 
           icon2={ <RiHeartAdd2Fill className="text-3xl text-red-600 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
           />

           <ImageCard title="View" 
           author="Dia" 
           img="https://images.pexels.com/photos/1719173/pexels-photo-1719173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           price={20}
           icon1={<HiShoppingBag className="text-3xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>} 
           icon2={ <RiHeartAdd2Fill className="text-3xl text-red-600 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
           />

           <ImageCard title="The Castle" 
           author="Rohan" 
           img="https://w0.peakpx.com/wallpaper/511/729/HD-wallpaper-balmoral-castle-scotland-castle-aesthetic-castles-interior-beautiful-places.jpg"
           price={20}
           icon1={<HiShoppingBag className="text-3xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>} 
           icon2={ <RiHeartAdd2Fill className="text-3xl text-red-600 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
           />

           <ImageCard title="Tulips" 
           author="Aren" 
           img="https://pbs.twimg.com/media/GFmvuYRW4AA3qlY.jpg"
           price={10}
           icon1={<HiShoppingBag className="text-3xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>} 
           icon2={ <RiHeartAdd2Fill className="text-3xl text-red-600 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
           />

           <ImageCard title="The Landscape" 
           author="derek" 
           img="https://wallpaper.dog/large/20431158.jpg"
           price={30}
           icon1={<HiShoppingBag className="text-3xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>} 
           icon2={ <RiHeartAdd2Fill className="text-3xl text-red-600 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
           />

           
          <ImageCard title="Winter landscape" 
           author="Alen" 
           img="https://images.unsplash.com/photo-1519216862816-eeaf9dbb90a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNub3dmYWxsfGVufDB8fDB8fHww"
           price={20}
           icon1={<HiShoppingBag className="text-3xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>} 
           icon2={ <RiHeartAdd2Fill className="text-3xl text-red-600 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
           />

          <ImageCard title="Night Sky" 
           author="Cole" 
           img="https://i.pinimg.com/originals/7d/bc/55/7dbc55de3e1108f41e53bdd72642e6a8.jpg"
           price={50}
           icon1={<HiShoppingBag className="text-3xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>} 
           icon2={ <RiHeartAdd2Fill className="text-3xl text-red-600 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
           />

          <ImageCard title="Aesthetic Room Decor" 
           author="Joe" 
           img="https://i.pinimg.com/736x/c3/b8/2e/c3b82ec9fc527dc0d093f379f51fd43e.jpg"
           price={20}
           icon1={<HiShoppingBag className="text-3xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>} 
           icon2={ <RiHeartAdd2Fill className="text-3xl text-red-600 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
           />

          <ImageCard title="Cppuccino" 
           author="Maria" 
           img="https://i3.wp.com/lamag.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk3NTU2MzQxMTI4MjQyODgw/jonas-jacobsson-338014.jpg?ssl=1"
           price={30}
           icon1={<HiShoppingBag className="text-3xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>} 
           icon2={ <RiHeartAdd2Fill className="text-3xl text-red-600 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
           />

          <ImageCard title="Peri Peri Fries" 
           author="Ritu" 
           img="https://lh3.googleusercontent.com/p/AF1QipOT-jZauactQjBrsgiqv2A3TCucidR4Ogx1g1-_=s680-w680-h510"
           price={40}
           icon1={<HiShoppingBag className="text-3xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>} 
           icon2={ <RiHeartAdd2Fill className="text-3xl text-red-600 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
           />

          
    </div>
    </div>
  ) 
}

export default PhotoGalary
