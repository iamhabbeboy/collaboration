import type { CartItemProps } from "../types/Icart"

const CartItem: React.FC<CartItemProps> = ({title, price, image}) => {
    return (
        // <div>
        //     <div className={`bg-gray-300 rounded-md mr-3 border-t-indigo-500`} style={{backgroundImage: `url('${image}')`, backgroundSize: "cover"}}>
        //     </div>
        //     <h2 className="mt-5">{title}</h2>
        //     <h2 className="mt-5">{price}</h2>
        //     gffgfgfgfgvvv
        // </div>
        
        <div className="border-0">
            <div className="w-full h-10 bg-white-100 border-b border-gray-300"><span className="mr-250">Logo</span> <span className="text-red-500">x Clear Cart</span></div>

        <div className="container flex gap-1 mx-auto p-2 mt-5 w-3/4 rounded-x">
 
  <div className="p-2 w-3/4 bg-white rounded-t-lg border-gray-300 border">
    
    <div className="mb-1 h-10 bg-white rounded-t-lg border-b border-gray-300">
    Cart <span className="text-gray-400">(5 Products)</span>
  </div>

  <div> <span className="mr-37">Product</span> <span className="mr-37">Count</span> <span>Price</span> </div>

  <div className="p-2 bg-white">
    
    <div className="flex items-center justify-between p-2 mb-2 border-gray-300 rounded-xl border">
      <div className="flex items-center gap-4">
        <img src="https://via.placeholder.com/300https://i.pinimg.com/736x/86/1f/9d/861f9de75c6d830dd019557c9cea1252.jpg" alt={title} className="object-cover w-16 h-16 rounded" />
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-gray-500">{price}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="px-2 bg-gray-200 rounded">-</button>
        <span>2</span>
        <button className="px-2 bg-gray-200 rounded">+</button>
      </div>

      <p className="font-semibold">$</p>
      <button className="text-red-500 text-sm hover:underline">x</button>
    </div>

    <div className="flex items-center justify-between p-2 mb-2 border-gray-300 rounded-xl border">
      <div className="flex items-center gap-4">
        <img src="https://via.placeholder.com/300https://i.pinimg.com/736x/86/1f/9d/861f9de75c6d830dd019557c9cea1252.jpg" alt={title} className="object-cover w-16 h-16 rounded" />
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-gray-500">{price}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="px-2 bg-gray-200 rounded">-</button>
        <span>2</span>
        <button className="px-2 bg-gray-200 rounded">+</button>
      </div>

      <p className="font-semibold">$</p>
      <button className="text-red-500 text-sm hover:underline">x</button>
    </div>

    <div className="flex items-center justify-between p-2 mb-2 border-gray-300 rounded-xl border">
      <div className="flex items-center gap-4">
        <img src="https://via.placeholder.com/300https://i.pinimg.com/736x/86/1f/9d/861f9de75c6d830dd019557c9cea1252.jpg" alt={title} className="object-cover w-16 h-16 rounded" />
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-gray-500">{price}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="px-2 bg-gray-200 rounded">-</button>
        <span>2</span>
        <button className="px-2 bg-gray-200 rounded">+</button>
      </div>

      <p className="font-semibold">$</p>
      <button className="text-red-500 text-sm hover:underline">x</button>
    </div>

  </div>

  <div className="h-30 bg-center bg-cover border rounded lg" style={{ backgroundImage: "url('./image/fff.jpg')" }} >&nbsp;</div>
  
  </div>

  


  <div className="p-4 w-2/4 bg-white rounded-t-lg rounded">
    
        <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
      <h3 className="mb-2 text-lg font-semibold">Promo code</h3>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Type here..."
          value=""
          className="flex-1 p-2 border rounded"
        />
        <button className="px-4 py-2 text-white bg-black rounded">Apply</button>
      </div>

      <div className="text-sm text-gray-700 space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span>-$</span>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>$</span>
        </div>
      </div>

      <button className="mt-4 py-2 w-full text-white bg-black rounded hover:opacity-90">
        Continue to checkout
      </button>
    </div>
    
  </div>
</div>

</div>
    )
}
export default CartItem