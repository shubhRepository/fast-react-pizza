function CartOverview() {
  return (
    <div className="bg-stone-800 px-4 py-4 text-sm uppercase text-stone-300 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <a href="#" className="text-stone-200">
        Open cart &rarr;
      </a>
    </div>
  );
}

export default CartOverview;
