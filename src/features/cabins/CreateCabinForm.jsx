import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";

// Tailwind-based error message
const Error = ({ children }) => (
  <span className="text-sm text-red-700 block mt-1">{children}</span>
);

function CreateCabinForm() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      alert("Cabin created successfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => alert(err.message),
  });

  function onSubmit(data) {
    mutate(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      {/* Name */}
      <div className="grid items-center grid-cols-[24rem_1fr_1.2fr] gap-6 py-3 border-b border-grey-100">
        <label htmlFor="name" className="font-medium">
          Cabin name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "This field is required" })}
        />
      </div>
      {errors.name && <Error>{errors.name.message}</Error>}

      {/* Max Capacity */}
      <div className="grid items-center grid-cols-[24rem_1fr_1.2fr] gap-6 py-3 border-b border-grey-100">
        <label htmlFor="maxCapacity" className="font-medium">
          Maximum capacity
        </label>
        <input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This field is required",
            min: { value: 1, message: "Capacity should be at least 1" },
          })}
        />
      </div>
      {errors.maxCapacity && <Error>{errors.maxCapacity.message}</Error>}

      {/* Regular Price */}
      <div className="grid items-center grid-cols-[24rem_1fr_1.2fr] gap-6 py-3 border-b border-grey-100">
        <label htmlFor="regularPrice" className="font-medium">
          Regular price
        </label>
        <input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is required",
          })}
        />
      </div>
      {errors.regularPrice && <Error>{errors.regularPrice.message}</Error>}

      {/* Discount */}
      <div className="grid items-center grid-cols-[24rem_1fr_1.2fr] gap-6 py-3 border-b border-grey-100">
        <label htmlFor="discount" className="font-medium">
          Discount
        </label>
        <input
          type="number"
          id="dicount"
          defaultValue={0}
          {...register("dicount", {
            required: "This field is required",
          })}
        />
      </div>
      {errors.discount && <Error>{errors.discount.message}</Error>}

      {/* Description */}
      <div className="grid items-center grid-cols-[24rem_1fr_1.2fr] gap-6 py-3 border-b border-grey-100">
        <label htmlFor="description" className="font-medium">
          Description for website
        </label>
        <Textarea
          id="description"
          {...register("description", {
            required: "This field is required",
          })}
        />
      </div>
      {errors.description && <Error>{errors.description.message}</Error>}

      {/* Image */}
      <div className="grid items-center grid-cols-[24rem_1fr_1.2fr] gap-6 py-3 border-b border-grey-100">
        <label htmlFor="image" className="font-medium">
          Cabin photo
        </label>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: "Cabin image is required",
          })}
        />
      </div>
      {errors.image && <Error>{errors.image.message}</Error>}

      {/* Actions */}
      <div className="flex justify-end gap-4 py-3">
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isLoading}>
          {isLoading ? "Creating..." : "Create cabin"}
        </Button>
      </div>
    </Form>
  );
}

export default CreateCabinForm;
