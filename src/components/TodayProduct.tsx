import TodaysProducts from "./TodaysProducts"

function TodayProduct(){
    
        const productsToday =[
            {
            image: "./images/ghood.jpg",
            description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
            ratings:5.9,
            numberSold:2090.00,
            price:30000.00,
            oldPrice:40000,
        },
              {
            image: "./images/ghood.jpg",
            description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
            ratings:5.9,
            numberSold:2090.00,
            price:30000.00,
            oldPrice:40000,
        },
              {
            image: "./images/ghood.jpg",
            description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
            ratings:5.9,
            numberSold:2090.00,
            price:30000.00,
            oldPrice:40000,
        },
              {
            image: "./images/ghood.jpg",
            description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
            ratings:5.9,
            numberSold:2090.00,
            price:30000.00,
            oldPrice:40000,
        },
              {
            image: "./images/ghood.jpg",
            description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
            ratings:5.9,
            numberSold:2090.00,
            price:30000.00,
            oldPrice:40000,
        },
              {
            image: "./images/ghood.jpg",
            description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
            ratings:5.9,
            numberSold:2090.00,
            price:30000.00,
            oldPrice:40000,
        },   {
            image: "./images/ghood.jpg",
            description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
            ratings:5.9,
            numberSold:2090.00,
            price:30000.00,
            oldPrice:40000,
        },
           {
            image: "./images/ghood.jpg",
            description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
            ratings:5.9,
            numberSold:2090.00,
            price:30000.00,
            oldPrice:40000,
        },
       ]
    
        return(
            <section>
              <div className='flex justify-between grid grid-cols-4 gap-6 mt-5 p-4'>
                { 
                    productsToday.map((ptoday,key) => (
                        <TodaysProducts {...ptoday} key={key}/>
                    ))
                }
                </div>
            </section>
        )
    }
    
    export default TodayProduct
    