
import BestSellings from './BestSellings'

function BestSelling(){
        const storeData =[
         {
            logo: "./images/ghood.jpg",
            name: "Nike sea mall",
            slogan: "just do it bro!",
             image1:"./images/ghood.jpg",
             image2:"./images/ghood.jpg",
             image3:"./images/ghood.jpg",
             price:"300.00"
        },
         {
            logo: "./images/ghood.jpg",
            name: "Barudka Disaster mall",
            slogan: "unleash your fashion!",
             image1:"./images/ghood.jpg",
             image2:"./images/ghood.jpg",
             image3:"./images/ghood.jpg",
             price:400.00
        },
         {
            logo: "./images/ghood.jpg",
            name: "Galaxy galleria mall",
            slogan: "be extra ordinary!",
             image1:"./images/ghood.jpg",
             image2:"./images/ghood.jpg",
             image3:"./images/ghood.jpg",
             price:500.00
        },
         {
            logo: "./images/ghood.jpg",
            name: "Nike sea mall",
            slogan: "chic, bold, confident!",
             image1:"./images/ghood.jpg",
             image2:"./images/ghood.jpg",
             image3:"./images/ghood.jpg",
             price:700.00
        },

    ]
    return(
    <section className="mt-5">
        <h1 className="text-center text-5xl font-bold py-7">Best Selling Store</h1>
        <div className="flex flex-row">
            <div className="w-[70%]">
                <div className='grid grid-cols-2 grid-rows-2 gap-6 '>
                
                    {storeData.map((store,key)=>(
                        <BestSellings {...store} key={key}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
)}

export default BestSelling