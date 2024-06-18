import { useState } from "react";

import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";

import CabinTable from "../features/cabins/CabinTable";

import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>FILTER / SORT</p>
      </Row>

      <Row>
        <CabinTable />
        <Button onClick={() => setShowForm(!showForm)}>Add new cabin</Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
