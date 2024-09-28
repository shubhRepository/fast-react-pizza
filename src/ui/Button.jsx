import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Button.propTypes = {
  children: PropTypes.any,
  isDisabled: PropTypes.bool,
  to: PropTypes.string,
};

function Button({ children, isDisabled = false, to = "" }) {
  const className =
    "rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-500 hover:transition-colors focus:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:bg-yellow-600 sm:px-6 sm:py-4 inline-block";
  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Button;
