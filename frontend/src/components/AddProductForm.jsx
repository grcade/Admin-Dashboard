import { Image } from "lucide-react";
import { addProduct, updateProduct } from "../store/features/productSlice";
import { useState } from "react";
import Products from "../pages/Products";
import { useDispatch } from "react-redux";

export default function AddProductForm({
  setShowAddForm,
  editingProduct = null,
}) {
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    price: 10.0,
    stock: 0,
    category: "T-Shirts",
    status: "In Stock",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingProduct) {
      // Dispatch the updateProduct action with the product ID and updated fields
      dispatch(updateProduct({ id: editingProduct.id, updates: product }));
    } else {
      // Dispatch the addProduct action for new products
      dispatch(addProduct(product));
    }

    setShowAddForm(false);
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={() => setShowAddForm(false)} // close modal on backdrop click
    >
      <div
        className="relative bg-white p-6 rounded-lg shadow-lg max-h-[90vh] max-w-3xl overflow-y-auto w-full"
        onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
      >
        <form className="overflow-y-auto" onSubmit={handleSubmit}>
          <div className="space-y-12 ">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">
                {editingProduct ? "Update Product" : "Add Product"}
              </h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                Provide the details of the product you want to{" "}
                {editingProduct ? "update" : "add"}.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* Product Name */}
                <div className="sm:col-span-4">
                  <label
                    htmlFor="product-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Product Name
                  </label>
                  <div className="mt-2">
                    <input
                      value={product.name}
                      onChange={handleChange}
                      id="product-name"
                      name="name"
                      type="text"
                      placeholder="Enter product name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>

                  {/* id */}


                </div>

                {editingProduct && (
                    <div>
                      <label
                        htmlFor="product-id"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Product ID
                      </label>
                      <div className="mt-2">
                        <input
                          value={product.id}
                          onChange={handleChange}
                          id="product-id"
                          name="id"
                          type="number"
                          placeholder="Enter product ID"
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>
                  )}

                {/* stock */}
                <div className="sm:col-span-4">
                  <label
                    htmlFor="stock"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Stock Quantity
                  </label>
                  <div className="mt-2">
                    <input
                      value={product.stock}
                      onChange={handleChange}
                      id="stock"
                      name="stock"
                      type="number"
                      placeholder="Enter  stock quantity"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* catogery */}
                <div className="sm:col-span-4">
                  <label
                    htmlFor="catogery"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Product Catogery
                  </label>
                  <select
                    name="category"
                    id="category"
                    value={product.category}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value="T-shirts">T-shirts</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Jacket">Jacket</option>
                    <option value="Sweatshirts">Sweatshirts</option>
                    <option value="Shoes">Shoes</option>
                  </select>
                </div>

                {/* status */}
                <div className="sm:col-span-4">
                  <label
                    htmlFor="status"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Status
                  </label>
                  <select
                    value={product.status}
                    onChange={handleChange}
                    name="status"
                    id="status"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value="In Stock">In Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                  </select>
                </div>

                {/* Description */}
                <div className="col-span-full">
                  <label
                    htmlFor="description"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      placeholder="Enter product description"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* Price */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="price"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Price
                  </label>
                  <div className="mt-2">
                    <input
                      value={product.price}
                      onChange={handleChange}
                      id="price"
                      name="price"
                      type="number"
                      placeholder="Enter price"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* Upload Product Image */}
                <div className="col-span-full">
                  <label
                    htmlFor="product-image"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Product Image
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <Image
                        aria-hidden="true"
                        className="mx-auto size-12 text-gray-300"
                      />

                      <div className="mt-4 flex text-sm/6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs/5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
