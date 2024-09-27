function CartOverview() {
  return (
    <div className="bg-stone-800 uppercase text-stone-300">
      <p className="font-semibold">
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
