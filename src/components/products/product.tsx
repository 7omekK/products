interface Props {
  imgSrc: string;
  name: string;
  price: number;
}

function Product({ imgSrc, name, price }: Props) {
  return (
    <div className="grid gap-x-4 grid-cols-2 border-2 border-solid border-cyan-500">
      <img className="max-h-40 w-40" alt="product image" src={imgSrc} />
      <div className="flex flex-col justify-center items-center">
        <h4>{name}</h4>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default Product;
