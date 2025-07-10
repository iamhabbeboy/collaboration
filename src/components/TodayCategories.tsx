import TodayProduct from "./TodayProduct";
function TodayCategories() {
  return (
    <div className="my-25">
      <div className="flex justify-between">
        <h1 className="text-5xl font-bold pb-5">Todays For Your!</h1>
        <span>
          <a
            href="http://"
            className="border-1 p-4 rounded-lg w-6 h-5 mr-5 bg-black text-white font-bold text-lg">Best Seller
          </a>
          <a
            href="http://"
            className="border-1 p-4 rounded-lg w-4 h-5 mr-5 font-bold text-lg font-bold text-lg"
          >
            Keep Stylish
          </a>
          <a
            href="http://"
            className="border-1 p-4 rounded-lg w-4 h-5 mr-5 font-bold text-lg"
          >
            Special Discount
          </a>
          <a
            href="http://"
            className="border-1 p-4 rounded-lg w-4 h-5 mr-5 font-bold text-lg">
            Official Store
          </a>
          <a
            href="http://"
            className="border-1 p-4 rounded-lg w-4 h-5 mr-5 font-bold text-lg">
            Coveted Product
          </a>
        </span>
      </div>

      <TodayProduct />
    </div>
  );
}

export default TodayCategories;
