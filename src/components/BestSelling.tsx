import BestBag from "./BestBag";
import BestSellings from "./BestSellings";

function BestSelling() {
  const storeData: [] = [
    {
      logo: "./images/ghood.jpg",
      name: '"Nike sea mall"',
      slogan: "just do it bro!",
      image1: "./images/greycap.jpeg",
      image2: "./images/grsk.jpg",
      image3: "./images/grshoe.jpeg",
      price1: "300.00",
      price2: "3200.00",
      price3: "3030.00",
    },
    {
      logo: "./images/ghood.jpg",
      name: "Barudka Disaster mall",
      slogan: '"unleash your fashion!"',
      image1: "./images/shirtgrey.jpg",
      image2: "./images/shoegrey.jpg",
      image3: "./images/watchgrey.jpg",
      price: 400.0,
      price2: "3200.00",
      price3: "300.00",
    },
    {
      logo: "./images/ghood.jpg",
      name: "Galaxy galleria mall",
      slogan: '"be extra ordinary!"',
      image1: "./images/shirtgrey.jpg",
      image2: "./images/shoegrey.jpg",
      image3: "./images/watchgrey.jpg",
      price: "500.0",
      price2: "900.00",
      price3: "300.00",
    },
    {
      logo: "./images/ghood.jpg",
      name: "Nike sea mall",
      slogan: '"chic, bold, confident!"',
      image1: "./images/shoegrey.jpg",
      image2: "./images/capgrey.jpg",
      image3: "./images/greshirt.jpg",
      price1: 700.0,
      price2: "320.00",
      price3: "456.00",
    },
  ];
  return (
    <section className="mt-5">
      <h1 className="text-center text-5xl font-bold py-7">
        Best Selling Store
      </h1>
      <div className="flex flex-row">
        <BestBag />
        <div className="w-[70%]">
          <div className="grid grid-cols-2 grid-rows-2 gap-6 ">
            {storeData.map((store, key) => (
              <BestSellings {...store} key={key} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSelling;
