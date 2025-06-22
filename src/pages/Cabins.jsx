import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import { data } from "react-router-dom";

function Cabins() {
 useEffect(function(){
  getCabins().then((data)=> console.log(data))
 },[])

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="https://rwystcrlbnzgignvtzck.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg" alt="cabin image"/>
    </Row>
  );
}

export default Cabins;
