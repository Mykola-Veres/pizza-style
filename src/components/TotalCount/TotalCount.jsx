export default function TotalCount({ pizzas }) {
  const totalCount = pizzas.reduce((acc, pizza) => acc + pizza.count, 0);

  return <>{pizzas.length > 0 ? <div>{totalCount}</div> : null}</>;
}
