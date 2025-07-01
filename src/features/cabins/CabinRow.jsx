import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import CreateCabinForm from "./CreateCabinForm";

function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);
  const queryClient = useQueryClient();

  const { id: cabinId, name, maxCapacity, regularPrice, dicount, image } = cabin;

  const { mutate, isLoading: isDeleting } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      alert("Cabin deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => {
      console.error(err);
      alert(err.message);
    },
  });

  const handleDelete = () => mutate(cabinId);
  const handleToggleForm = () => setShowForm((prev) => !prev);

  return (
    <div className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-x-6 items-center px-6 py-4 border-b last:border-b-0 text-sm overflow-auto">
      {/* Image */}
      <img
        src={image}
        alt={`${name}`}
        style={{ width: "30px", height: "30px" }}
      />

      {/* Name */}
      <div className="font-semibold text-gray-700 font-[Sono] text-base">{name}</div>

      {/* Capacity */}
      <div className="text-gray-600 font-[Sono]">{maxCapacity}</div>

      {/* Price */}
      <div className="text-green-700 font-medium font-[Sono]">${regularPrice}</div>

      {/* Discount */}
      <div className="text-green-600 font-[Sono]">
        {dicount ? `-${dicount}%` : "—"}
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 justify-end text-sm">
        <button
          onClick={handleToggleForm}
          className="px-3 py-1 text-blue-600 hover:text-blue-800 transition"
        >
          {showForm ? "Close" : "Edit"}
        </button>
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="px-3 py-1 text-red-600 hover:text-red-800 transition disabled:opacity-50"
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>

      {/* Edit form */}
      {showForm && (
        <div className="col-span-full mt-4 bg-gray-50 p-4 rounded shadow">
          <CreateCabinForm cabinToEdit={cabin} />
        </div>
      )}
    </div>
  );
}

export default CabinRow;
