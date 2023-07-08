import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  return (
    <>
      <h1>Store</h1>
      {/* md, xs and lg specify number of collumns at medium, xs, and lg screensize. classname g-3 gives us a gap between elements on rows horizontally and vetically*/}
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          //   <Col>{JSON.stringify(item)}</Col> //for loop that goes through each item in the items.jason file nd stringifys it in a Col component.
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
        <Col></Col>
      </Row>
    </>
  );
}
