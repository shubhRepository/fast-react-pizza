import { redirect } from "react-router";
import { getOrder, createOrder } from "../../services/apiRestaurant";

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
  console.log(order);
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}
