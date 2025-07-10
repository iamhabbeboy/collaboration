import FlashProduct from "./FlashProduct";
// import type {IFlashSale} from "../types/IFlashSale"

function FlashProducts() {
  const fProducts = [
    {
      image: "./images/greshirt.jpg",
      description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
      price: 2090.0,
      oldPrice: 30000.0,
      numberRemain: 10,
      totalNumber: 10,
    },
    {
      image: "./images/grsk.jpg",
      description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
      price: 20.0,
      oldPrice: 3067,
      numberRemain: 10,
      totalNumber: 10,
    },
    {
      image: "./images/bbag.jpg",
      description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
      price: 20.0,
      oldPrice: 4003,
      numberRemain: 4,
      totalNumber: 10,
    },
    {
      image: "./images/greyhiighheel.jpg",
      description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
      price: 20.0,
      oldPrice: 30.0,
      numberRemain: 10,
      totalNumber: 10,
    },
  ];

  return (
    <section className="">
      <div className="flex justify-around gap-6">
        {fProducts.map((fproduct, key) => (
          <FlashProduct {...fproduct} key={key} />
        ))}
      </div>
    </section>
  );
}

export default FlashProducts;
