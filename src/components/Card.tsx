
interface datatype {
   image: string;
   name: string;
   price: string;
   id: number;
  
}

const Card = ({ name, image, price, id, }:datatype) => {
  return (
     <div className="grid  h-[22rem] border-2 hover:border-pink-200 hover:bg-gray-10 bg-white rounded-lg px-4 pt-4 pb-8">
        <img
           src={image}
           alt="img"
           className="w-full h-[14rem] md:object-cover object-contain rounded-[10px] transform hover:scale-110 hover:mb-4 "
        />
        <p className="text-[1.2rem] font-black">{name}</p>
        <div className="flex">
           {" "}
           <p className="text-[1rem] font-extrabold text-green-600 hover:text-green-800 ">
              {price}
              </p>
             
               
             
        </div>
     </div>
  );
}

export default Card