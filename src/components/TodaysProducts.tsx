//import type { IToday } from "../types/IToday";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

const TodaysProducts: React.FC<any> = ({
  image,
  description,
  ratings,
  numberSold,
  price,
  oldPrice,
}) => {
  return (
    <div className=" rounded-3xl mt-9 shadow-md">
      <div
        className={`bg-gray-300 h-[200px] px-8  w-[90%] mx-auto rounded-t-3xl`}
        style={{ backgroundImage: `url('${image}')`, backgroundSize: "cover" }}
      >
        <FontAwesomeIcon
          icon={faHeart}
          className="relative p-3  bg-red-100 font-white-100 rounded-full left-55 mt-5"
        />
      </div>
      <h3 className="text-[1.1rem] font-[620] font-900-black  capitalize text-justify px-3">
        {description}
      </h3>
      <div className="flex">
        <FontAwesomeIcon
          icon={faStar}
          className="font-3xl p-3 mt-3 text-yellow-400"
        />
        <h3 className="text-xl text-left py-4 font-bold">{ratings}</h3>
        <h4 className="text-xl px-4 py-4 font-bold text-gray-400">
          {numberSold}k <span className="text-base">sold</span>{" "}
        </h4>
      </div>
      <div className="flex">
        <h3 className="text-xl text-capitalize font-bold mb-4 px-3">
          RP{price}
        </h3>
        <h4 className="text-md text-red-400 font-semibold ">RP{oldPrice}</h4>
      </div>
    </div>
  );
};

export default TodaysProducts;
