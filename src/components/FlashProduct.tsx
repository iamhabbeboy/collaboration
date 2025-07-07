import type { IFlashSale } from "../types/IFlashSale";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const FlashProduct: React.FC<IFlashSale> = ({
  image,
  description,
  price,
  oldPrice,
  numberRemain,
  totalNumber,
}) => {
  return (
    <div className="flex flex-col text-center w-100 rounded-xl shadow-md">
      <div
        className={`bg-gray-300 w-[100%] h-[300px] h-96 mb-4 w-96 mr-3 rounded-t-xl`}
        style={{ backgroundImage: `url('${image}')`, backgroundSize: "cover" }}
      >
        <FontAwesomeIcon
          icon={faHeart}
          className="text-2xl relative p-2 w-8 h-12 bg-red-100 text-grey rounded-full left-35 top-3"
        />
      </div>
      {/*  */}

      <p className="text-xl text-center font-bold capitalize text-justify px-3">
        {description}
      </p>

      <span className="flex">
        <h2 className="text-2xl text-capitalize font-bold mb-4 px-3">
          {" "}
          {price}
        </h2>
        <h3 className="text-xl ml-2 text-red-300 font-bold line-through">
          Rp{oldPrice}
        </h3>
      </span>
      <span className="flex text-grey-300 text-lg">
        <h3 className="flex text-grey-300 text-2xl font-bold mr-1 px-3">
          {numberRemain}
        </h3>
        /
        <h3 className="flex text-gray-700 text-2xl font-bold px-3">
          {totalNumber} <span className="text-black pl-1"> sale</span>
        </h3>
      </span>
    </div>
  );
};

export default FlashProduct;
