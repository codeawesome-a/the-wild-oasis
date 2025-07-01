import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
    
const { data, error } = await supabase
  .from('cabins')
  .select('*')
if(error){
    console.error(error)
    throw new Error('cabins could not be loaded')
}
    return data
}


//lets build the delating fucntion 
export async function deleteCabin(id) {

const { data, error } = await supabase
  .from('cabins')
  .delete()
  .eq('id', id)
  if(error){
    console.error(error)
    throw new Error('cabins could not be deleted')
}
    return data

  
}



//leets create the create cabin function
// export async function createEditCabin(newCabin,id) {
    
//   //checking the image
//   const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)

//   //first step is creating the name path and create cabins
//   const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/","")
//   const imagePath = hasImagePath ? newCabin.image: `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

//   //lets create and edit 
//   let query = supabase.from('cabins')
  
//   //for creating the cabin 
//   if(!id) query = 
//     query
//     .insert([{...newCabin,image:imagePath}])
//   // const {data ,error}= await query.select().single();

//   //for edit
//   if(id) query = 
//       query
//         .update([{...newCabin,image:imagePath}])
//         .eq('id', id)

//   const { data, error } = await query.select().single();

//     if(error){
//     console.error(error)
//     throw new Error('cabins could not create')
// }
//   //then upload
//   const {error:storageErr} = await supabase.storage
//   .from('cabin-images')
//   .upload(imageName,newCabin.image)


//   //if error in uploading delet cabin
//   if(storageErr){
//     (await supabase.from('cabins').delete()).eq('id',data.id);
//     console.error(storageErr)
//     throw new Error(
//       'the data cant be creared and not uploaded'
//     )
//   }



//     return data


// }
export async function createEditCabin(newCabin, id) {
  const isStorageImage = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
  const imagePath = isStorageImage
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // Upload image first if it's a new upload
  if (!isStorageImage) {
    const { error: uploadError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    if (uploadError) {
      console.error(uploadError);
      throw new Error("Image upload failed.");
    }
  }

  let query = supabase.from("cabins");

  if (id) {
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  } else {
    query = query.insert({ ...newCabin, image: imagePath });
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created/updated.");
  }

  return data;
}
