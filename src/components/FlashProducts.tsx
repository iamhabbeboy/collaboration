import FlashProduct from './FlashProduct';
// import type {IFlashSale} from "../types/IFlashSale"


function FlashProducts(){
    const fProducts =[
        {
        image: "./images/ghood.jpg",
        description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
        price:2090.00,
        oldPrice:30000.00,
        numberRemain:10,
        totalNumber:10
    },
  {
        image: "./images/grey-hat.jpg",
        description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
        price:20.00,
        oldPrice:3067,
        numberRemain:10,
        totalNumber:10
    },
  {
        image: "./images/bbag.jpg",
        description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
        price:20.00,
        oldPrice:4003,
        numberRemain:4,
        totalNumber:10
    },
  {
        image: "./images/greyhiighheel.jpg",
        description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
        price:20.00,
        oldPrice:30.00,
        numberRemain:10,
        totalNumber:10
    }, ]

    return(
        <section>
          <div className='flex justify-between'>
            { 
                fProducts.map((fproduct,key) => (
                    <FlashProduct {...fproduct} key={key}/>
                ))
            }
            </div>
        </section>
    )
}

export default FlashProducts