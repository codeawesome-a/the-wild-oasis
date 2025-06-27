import supabase from "./supabase";

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
export async function createCabin(newCabin) {
  const {data,error} = await supabase
  .from('cabins')
  .insert([newCabin])
    if(error){
    console.error(error)
    throw new Error('cabins could not create')
}
    return data


}