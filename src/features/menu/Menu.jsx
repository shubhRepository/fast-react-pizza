import { useLoaderData } from "react-router";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  return (
    <>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </>
  );
}

export default Menu;
