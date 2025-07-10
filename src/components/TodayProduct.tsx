import TodaysProducts from "./TodaysProducts";

function TodayProduct() {
  const productsToday = [
    {
      image: "./images/shoegrey.jpg",
      description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
      ratings: 5.9,
      numberSold: 2090.0,
      price: 30000.0,
      oldPrice: 40000,
    },
    {
      image: "./images/greshirt.jpg",
      description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
      ratings: 5.9,
      numberSold: 2090.0,
      price: 30000.0,
      oldPrice: 40000,
    },
    {
      image: "./images/hooddgrey.jpg",
      description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
      ratings: 5.9,
      numberSold: 2090.0,
      price: 30000.0,
      oldPrice: 40000,
    },
    {
      image: "./images/capgrey.jpg",
      description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
      ratings: 5.9,
      numberSold: 2090.0,
      price: 30000.0,
      oldPrice: 40000,
    },
    {
      image: "./images/grsk.jpg",
      description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
      ratings: 5.9,
      numberSold: 2090.0,
      price: 30000.0,
      oldPrice: 40000,
    },
    {
      image: "./images/greyhiighheel.jpg",
      description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
      ratings: 5.9,
      numberSold: 2090.0,
      price: 30000.0,
      oldPrice: 40000,
    },
    {
      image: "./images/grsk.jpg",
      description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
      ratings: 5.9,
      numberSold: 2090.0,
      price: 30000.0,
      oldPrice: 40000,
    },
    {
      image: "./images/greybag.jpg",
      description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
      ratings: 5.9,
      numberSold: 2090.0,
      price: 30000.0,
      oldPrice: 40000,
    },
  ];

  return (
    <section>
      <div className="justify-between grid grid-cols-4 gap-6 mt-5 p-4">
        {productsToday.map((ptoday, key) => (
          <TodaysProducts {...ptoday} key={key} />
        ))}
      </div>
    </section>
  );
}

export default TodayProduct;
