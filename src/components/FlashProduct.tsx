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
    <div className="flex flex-col shadow-md rounded-3xl text-center w-100 mt-9">
      <div
        className={`bg-gray-300 w-[90%] h-[200px] mb-4 mr-3 rounded-t-3xl`}
        style={{ backgroundImage: `url('${image}')`, backgroundSize: "cover" }}
      >
        <FontAwesomeIcon
          icon={faHeart}
          className="relative p-3 font-white-100 bg-red-100  rounded-full left-25 top-3"
        />
      </div>

      <p className="text-[1.1rem] text-center font-[620] font-900-black  capitalize text-justify px-3">
        {description}
      </p>

      <span className="flex mt-3">
        <h2 className="text-xl text-capitalize font-bold mb-4 px-3">
         RP{price}
        </h2>
        <h3 className="text-md text-red-500 font-bold line-through">
          Rp{oldPrice}
        </h3>
      </span>
      <span className="flex text-grey-300 text-lg">
        <h3 className="flex text-grey-300 text-2xl font-bold px-1">
          {numberRemain}
        </h3>
        /
        <h3 className="flex text-2xl font-bold px-1">
          {totalNumber} <span className="text-black pl-1"> sale</span>
        </h3>
      </span>
    </div>
  );
};

export default FlashProduct;
