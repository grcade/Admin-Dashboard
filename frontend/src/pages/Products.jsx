import { useState, useEffect } from "react";
import { Filter, PenSquare, Plus, Trash2Icon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { AddProductForm, FilterPanel } from "../components/index";
import { deleteProduct, setFilters } from "../store/features/productSlice";

function Products() {
  const { products, filteredProducts } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [editingProduct, setEditingProduct] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showFilterPanel, setShowFilterPanel] = useState(false);



  useEffect(() => {

    dispatch(setFilters());
  }, [dispatch]);

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowAddForm(true);
  };

  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(productId));
    }
  };

  const dataSource = filteredProducts

  return (
    <div className="p-6">
      {/* Top section */}
      <div className="flex justify-between mb-6 border-b-2">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="gap-2 p-2 flex">
          <button
            onClick={() => setShowFilterPanel(true)}
            className="bg-slate-200 hover:bg-slate-300 flex p-2 rounded-md"
          >
            Filter <Filter />
          </button>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-blue-200 hover:bg-blue-300 flex p-2 rounded-md"
          >
            <Plus /> Add Product
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg shadow-sm">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm font-medium">
            <tr>
              {["Name", "Price", "Stock", "Category", "Status", "Actions"].map(
                (header) => (
                  <th
                    key={header}
                    className="border border-gray-300 px-4 py-2"
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {dataSource.map((product) => (
              <tr key={product.id} className="hover:bg-slate-100">
                <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                <td className="border border-gray-300 px-4 py-2">{product.price}</td>
                <td className="border border-gray-300 px-4 py-2">{product.stock}</td>
                <td className="border border-gray-300 px-4 py-2">{product.category}</td>
                <td className="border border-gray-300 px-4 py-2">{product.status}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex space-x-6">
                    <button
                      className="text-blue-400 hover:text-blue-600 font-medium"
                      onClick={() => handleEdit(product)}
                    >
                      <PenSquare />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-500 hover:text-red-700 font-medium"
                    >
                      <Trash2Icon />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
            <AddProductForm
              setShowAddForm={setShowAddForm}
              editingProduct={editingProduct}
            />
          </div>
        </div>
      )}

      {showFilterPanel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
            <FilterPanel setShowFilterPanel={setShowFilterPanel} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
