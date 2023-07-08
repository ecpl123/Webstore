import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const quantity = 1;
  return (
    // bootstrap card code with image body, title and add/remove from cart button divs
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="400px"
        style={{ objectFit: "scale-down" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        {/* below is the code for the add to cart/quantity selection UI. first div is for the overall section and makes sure we are using the total space available. 
        there is also an if else which checks which portion of the ui should be displayed based on item quantity already in the cart. 
        subsequent divs are for the add and remove buttons */}
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100"> + Add To Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button>+</Button>
              </div>
              <Button variant="danger">remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
