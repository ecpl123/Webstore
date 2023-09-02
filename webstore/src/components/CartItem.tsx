import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    // this stack is set to horizontal, do not get confused! There are two stacks at play, one for all the items,
    //and one for the individual bits for each item. a line is more accurate
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        {/* item name and quantity: Item x {2} */}
        <div>
          {/* && in this if statement means then, aka if quant > 1, then show this span */}
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".75rem" }}>
              x {quantity}
            </span>
          )}
        </div>
        {/* price of individual item under title */}
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
        {/* total price */}
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        {/* &times; is a mathematical times symbol */}
        &times;
      </Button>
    </Stack>
  );
}
