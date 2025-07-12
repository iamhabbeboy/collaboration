import TodayCategories from "./TodayCategories";

function ForYouTop() {
  return (
    <div className="py-8 flex justify-between ">
      <h2 className="ml-3 font-bold text-2xl">Todays for you!</h2>
      <TodayCategories />
    </div>
  );
}

export default ForYouTop;
