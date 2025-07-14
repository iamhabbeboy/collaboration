import type { IStore } from "../types/IStore";

const BestSellings: React.FC<IStore> = ({
  name,
  slogan,
  image1,
  image2,
  image3,
  price1,
  price2,
  price3,
}) => {
  return (
    <div className="gap-4 rounded-4xl shadow-md">
      <div className="mx-auto w-[100%] p-4 gap-6">
        <div className="flex flex-col text-center p-5">
          <h1 className="font-bold text-2xl">{name}</h1>
          <h3 className="text-gray-400 text-xl font-semibold">{slogan}</h3>
        </div>

        <div className="">
          <div className="flex flex-row gap-4 p-5">
            <div
              className={`h-[130px] w-[30%] px-8  mx-auto rounded-3xl`}
              style={{
                backgroundImage: `url('${image1}')`,
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className={`h-[120px] px-8 w-[30%] mx-auto rounded-3xl`}
              style={{
                backgroundImage: `url('${image2}')`,
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className={`h-[120px] px-8  w-[30%] mx-auto rounded-3xl`}
              style={{
                backgroundImage: `url('${image3}')`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="flex justify-around text-center">
            <div>
              <h3 className="text-center text-md font-bold">Rp {price1}</h3>
            </div>
            <div>
              <h3 className="text-center text-md font-bold">Rp {price2}</h3>
            </div>
            <div>
              <h3 className="text-center text-md font-bold">Rp {price3}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellings;
