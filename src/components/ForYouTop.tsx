import TodayCategories from './TodayCategories'

function ForYouTop () {
    return(
            <div className="py-8 flex justify-between font-bold">
                  <p className="text-5xl font-bold">Todays for you!</p>
                  <TodayCategories/>
            </div>
          
        )
}

export default ForYouTop