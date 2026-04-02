import { useState, useEffect, useMemo } from "react";
import { Filter, PenSquare, Plus, Trash2Icon } from "lucide-react";
import { AddProductForm, FilterPanel, PaginationBar } from "../components/index";
import { useGetProductsQuery, useDeleteProductMutation } from "../store/dashboardApi";
import { useSelector, useDispatch } from "react-redux";

function Products() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    console.log('Products component rendered with currentPage:', currentPage);
  // API returns { data, totalItems }
        const { data: productsResponse, isLoading } = useGetProductsQuery({ page: currentPage, limit: itemsPerPage });
const dispatch = useDispatch();
const products = productsResponse?.data || [];

// Set products in Redux after API call
useEffect(() => {
  if (products.length > 0) {
    dispatch({ type: 'product/setProducts', payload: products });
  }
}, [products, dispatch]);

const { filters, products: reduxProducts } = useSelector(state => state.product);

// Memoize filtered products
const filteredProducts = useMemo(() => {
  return reduxProducts.filter(
    (product) =>
      (filters.category === "all" || product.category === filters.category) &&
      (filters.status === "all" || product.status === filters.status)
  );
}, [reduxProducts, filters]);

const totalItems = productsResponse?.total || products.length;

  const [deleteProduct] = useDeleteProductMutation();
  const [editingProduct, setEditingProduct] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showFilterPanel, setShowFilterPanel] = useState(false);

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowAddForm(true);
  };

  const handleDelete = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(productId).unwrap();
      } catch (err) {
        console.error('Failed to delete product:', err);
        alert('Failed to delete product');
      }
    }
  };


  // Pagination state
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  console.log(filteredProducts)
  const paginatedProducts = filteredProducts.length > 0 ? filteredProducts : products;

  if (isLoading) return <div className="p-6">Loading products...</div>;

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
            onClick={() => {
              setEditingProduct(null);
              setShowAddForm(true);
            }}
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
            {paginatedProducts.map((product) => (
              <tr key={product.id} className="hover:bg-slate-100">
                <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                <td className="border border-gray-300 px-4 py-2">${product.price}</td>
                <td className="border border-gray-300 px-4 py-2">{product.stock}</td>
                <td className="border border-gray-300 px-4 py-2">{product.category}</td>
                <td className="border border-gray-300 px-4 py-2">
                   <span className={`px-2 py-1 rounded-full text-xs ${product.status === 'in stock' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {product.status}
                  </span>
                </td>
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

      {/* Pagination Bar */}
      <div className="flex justify-center my-4">
        <PaginationBar
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
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
