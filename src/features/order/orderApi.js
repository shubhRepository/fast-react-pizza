import { redirect } from "react-router";
import { getOrder, createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on" ? true : false,
  };
  const error = {};
  if (!isValidPhone(order.phone)) {
    error.phone =
      "Please give us your correct phone number. We might need it to contact you.";
  }

  if (Object.keys(error).length > 0) return error;

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}
