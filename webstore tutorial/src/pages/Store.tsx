import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";

export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row>
        {storeItems.map((item) => (
          <Col>{JSON.stringify(item)}</Col> //for loop that goes through each item in the items.jason file nd stringifys it in a Col component.
        ))}
        <Col></Col>
      </Row>
    </>
  );
}
