import { Form, useActionData, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const cart = fakeCart;
  const navigation = useNavigation();
  const formData = useActionData();
  const isSubmitting = navigation.state === "submitting" ? true : false;

  return (
    <div>
      <h2>Ready to order? Let&apos;s go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input className="input" type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input className="input" type="tel" name="phone" required />
          </div>
          {formData?.phone ? <p>{`${formData.phone}`}</p> : null}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input className="input" type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
            className="h-6 w-6 accent-yellow-500 transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        <div>
          <Button isDisabled={isSubmitting}>
            {isSubmitting ? "Placing Order..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
