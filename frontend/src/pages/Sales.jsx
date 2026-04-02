import { useState } from "react";
import { Details, PaginationBar } from "../components/index";
import { useGetOrdersQuery, useUpdateOrderStatusMutation } from "../store/dashboardApi";

function Sales() {
  // API returns { data, totalItems }
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const { data: ordersResponse, isLoading } = useGetOrdersQuery({ page: currentPage, limit: itemsPerPage });
  const orders = ordersResponse?.data || [];
  const totalItems = ordersResponse?.totalOrders.count || orders.length;
console.log("orders:", orders, "totalItems:", totalItems);
    const [updateStatus] = useUpdateOrderStatusMutation();

    const [showDetails, setShowDetails] = useState(false)
    const [detailProduct, setDetailProduct] =useState(null)


    // Pagination state
    const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
    const paginatedOrders = orders
    if (isLoading) return <div className="p-6">Loading orders...</div>;

    const handleStatusChange = async (id, newStatus) => {
        try {
            await updateStatus({ id, status: newStatus }).unwrap();
        } catch (err) {
            console.error('Failed to update status:', err);
            alert('Failed to update status');
        }
    };

    return (
         <div className="p-6">
      {/* Top section */}
      <div className="flex justify-between mb-6 border-b-2">
        <h1 className="text-2xl font-bold">Sales</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg shadow-sm">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm font-medium">
            <tr>
              {["Customer", "Order ID", "Date", "Amount", "Status", "Actions"].map(
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
            {paginatedOrders.map((order) => (
             <tr key={order.id} className="hover:bg-slate-100">
                <td className="border border-gray-300 px-4 py-2">{order.customer_email}</td>
                <td className="border border-gray-300 px-4 py-2">#{order.id}</td>
                <td className="border border-gray-300 px-4 py-2">{order.date}</td>
                <td className="border border-gray-300 px-4 py-2">${order.amount}</td>
                <td className=" px-4 py-2 flex justify-center border border-gray-300">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                   order.status === 'completed' ? 'bg-green-100 text-green-800' :
                   order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                   order.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex items-center gap-x-5" >
                    <button
                      className=" hover:text-blue-600 font-medium"
                        onClick={() => {
                            setShowDetails(true)
                            setDetailProduct(order)
                         } }
                    >
                      Details
                    </button>

                    <select
                        className='px-2 py-1 rounded border text-sm focus:outline-none focus:ring-1 focus:ring-blue-500'
                        value={order.status}
                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    >
                        <option value="pending">pending</option>
                        <option value="completed">completed</option>
                        <option value="cancelled">cancelled</option>
                    </select>

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
            {showDetails && detailProduct && (
                <Details setShowDetails={setShowDetails} detailProduct={detailProduct} />
            ) }
      </div>

    )
}


export default Sales;
