import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";

OrderItem.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number,
    name: PropTypes.string,
    totalPrice: PropTypes.number,
  }),
};

// function OrderItem({ item, isLoadingIngredients, ingredients }) {
function OrderItem({ item }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="px-6 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
