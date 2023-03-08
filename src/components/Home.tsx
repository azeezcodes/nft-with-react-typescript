import React from "react";
import { data } from "../data";
import Card from "./Card";
import BasicModal from "./Modal";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";



type Props = {};
interface datatype {
   id?: number;
   name?: string;
   img?: string;
   owner?: string;
   link?: string;
   price?: string;
   desc?: string;
}



const Home = (props: Props) => {
   const [open, setOpen] = React.useState(false);
   const [current, setCurrent] = React.useState<datatype | null>(null)
   const handleOpen = (item: any) => {
      setOpen(!open)
      setCurrent(item)
   };

 
     const handleClose = () => setOpen(false);
   return (
      <div>
         <div className="flex gap-4 w-full px-[4rem] pt-8 mt-11">
            <div className="md:w-[40%] w-[100%] text-white font-black text-left text-[2rem] md:text-[4rem]">
               <p>Explore Collection of Outstanding NFTs</p>
            </div>
            <div className="rounded-md w-[60%] hidden md:block">
               <img
                  className="rounded-[3rem] object-contain"
                  src="https://en.cryptonomist.ch/wp-content/uploads/2022/10/regolamentazione-nft-mica-1140x600.jpg"
                  alt="nft"
               />
            </div>
         </div>
         <div className="px-[4rem] pt-8">
            <p className="text-white w-fit border-b-4 pb-2 border-b-pink-500 rounded mt-8">
               Explore Top NFT
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8 mt-10 mb-32">
               {data.length > 0 &&
                  data.map((item, index) => (
                     <div key={index} onClick={() => handleOpen(item)}>
                        <Card
                           key={index}
                           image={item.img}
                           name={item.name}
                           price={item.price}
                           id={item.id}
                        />
                     </div>
                  ))}

               <div>
                  <Modal
                     open={open}
                     onClose={handleClose}
                     aria-labelledby="modal-modal-title"
                     aria-describedby="modal-modal-description"
                  >
                     <Box
                     className="h-fit"
                        sx={{
                           position: "absolute" as "absolute",
                           top: "50%",
                           left: "50%",
                           transform: "translate(-50%, -50%)",
                           width: { md: "800px", lg: "800px", xs: "400px" },                  
                           bgcolor: "background.paper",
                           boxShadow: 24,
                           p: 4,
                           border: "none",
                        }}
                     >
                        <BasicModal
                           image={current?.img}
                           name={current?.name}
                           owner={current?.owner}
                           price={current?.price}
                           descri={current?.desc}
                           source={current?.link}
                        />
                     </Box>
                  </Modal>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
