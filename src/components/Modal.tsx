import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
   image?: string
   name?: string
   owner?: string
   price?: string
   descri?: string
   source?: string
}

const BasicModal = ({image, name, owner, price, descri, source}: Props) => {
  return (
     <div>
        <div className="flex gap-8">
           <img
              src={image}
              alt=""
              className="max-w-sm h-[25rem] rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
           />
           <div className="flex flex-col pt-10">
              <p className="text-3xl font-black leading-tight">
                 Name: <span className="text-green-600">{name}</span>{" "}
              </p>
              <p className="text-2xl font-black leading-tight mt-2">
                 Owner: <span className="text-green-600">{owner}</span>
              </p>
              <p className="text-1xl font-black leading-tight mt-2">
                 Price: <span>{price}</span>
              </p>
           </div>
        </div>
        <p className="text-1xl font-bold leading-tight mt-4">
           Description: <br />{" "}
           <span className="italic font-medium mt-2 text-[.9rem] ">
              {descri}
           </span>
        </p>
        <a href={`${source}`} target="_blank" rel="noreferrer">
           <p className="inline-block border rounded font-[700] text-[.9rem] px-4 py-1 mt-3 hover:bg-green-300 shadow-lg hover:shadow-green-500/50  ">
              Link to OpenSea
           </p>
        </a>
     </div>
  );
}

export default BasicModal