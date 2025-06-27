import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import { data } from "react-router-dom";
import CabinTable from "../features/cabins/CabinTable";
import React from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm,setShowForm] = useState(false)
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>Filter /Sort</p>
    </Row>

    <Row>
      <CabinTable/>
      <button onClick={()=>setShowForm((show)=>!show)}>add newCabin</button>
      {showForm && <CreateCabinForm/>}
    </Row>
    </>
  );
}

export default Cabins;
