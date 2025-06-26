import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { deleteCabin } from '../../services/apiCabins';

function CabinRow({ cabin}) {
  const {id:cabinId, name,maxCapacity,regularPrice,dicount,image} = cabin
//here is the concept of deleting the cabin so we need to use mutationFn

const QueryClient = useQueryClient();
   const {isLoading:isDeleting,mutate} = useMutation({
      mutationFn:deleteCabin,
      //we can specify success call back to make it beautiful called invalidate query
 
      onSuccess :()=>{
            alert('cabin deleted successfuly')
           QueryClient.invalidateQueries({
            queryKey:['cabins']
           })
      },
      onError:(err)=>{
        
        console.log(err)
        alert(err.message)}
      
    })
  

  return (
    <div
      className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-x-6 items-center px-6 py-[1.4rem] border-b last:border-b-0"
    >
      {/* Image */}
      <img
        // src={image}
        alt='image'
        className="block w-4 aspect-[3/2] object-cover object-center scale-[1.5] -translate-x-[7px]"
      />

      {/* Cabin Name */}
      <div className="text-[1.6rem] font-semibold text-gray-600 font-[Sono]">
        {name}
      </div>

      {/* Price */}
      <div className="font-semibold font-[Sono]">
        {maxCapacity}
      </div>
      <div className="font-medium text-green-700 font-[Sono]">
        {regularPrice}
      </div>
      {/* Discount */}
      <div className="font-medium text-green-700 font-[Sono]">
        {dicount ? `-${dicount}%` : '—'}
      </div>

      <div>
        <button onClick={()=>mutate(cabinId) } disabled = {isDeleting}>Delete</button>
      </div>


      

      
    </div>
  );
}

export default CabinRow;
