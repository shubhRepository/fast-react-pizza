import { Form, useActionData, useNavigation } from "react-router-dom";

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
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          {formData?.phone ? <p>{`${formData.phone}`}</p> : null}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        <div>
          <button
            disabled={isSubmitting}
            className="rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-500 hover:transition-colors focus:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:bg-yellow-600"
          >
            {isSubmitting ? "Placing Order..." : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
