import type { IProductItem } from "../types/IProductItem"
const ProductItem: React.FC<ProductItem> = ({ image, price }) => (
  <div className="flex flex-col items-center">
    <img src={image} alt="product" className="w-16 h-16 object-cover rounded-md" />
    <p className="text-xs font-semibold text-gray-700">{price}</p>
  </div>
);

export default ProductItem;