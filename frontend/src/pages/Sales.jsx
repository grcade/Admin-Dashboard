import { NotebookTabs } from "lucide-react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {updateStatus  } from "../store/features/salesSlice";
import { Details } from "../components/index";
function Sales() {

    const dispatch = useDispatch();
    const { orders } = useSelector((state) => state.sales)



    const [showDetails, setShowDetails] = useState(false)
    const [detailProduct, setDetailProduct] =useState(null)


const dataSource = orders
if (!orders || orders.length === 0) {
    return <div>No orders available.</div>;
  }
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
              {["Name", "Order ID", "Date", "Amount", "Status", "Actions"].map(
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
                <td className="border border-gray-300 px-4 py-2">{product.customerName}</td>
                <td className="border border-gray-300 px-4 py-2">{product.id}</td>
                <td className="border border-gray-300 px-4 py-2">{product.date}</td>
                <td className="border border-gray-300 px-4 py-2">{product.total}</td>
                <td className=" px-4 py-2 flex justify-center"><span className={`px-2 py-1 rounded-full text-sm ${
                   product.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                   product.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                   product.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {product.status}
                  </span></td>
                <td className="border border-gray-300 px-4 py-2">
                  <div c  className="flex border-b pb-2 gap-x-5" >
                    <button
                      className=" hover:text-gray-600 font-medium"
                        onClick={() => {
                            setShowDetails(true)
                            setDetailProduct(product)
                         } }
                    >
                      Details
                    </button>

            <span className="font-medium w-32">
            <select
className= 'px-2 py-1 rounded-full text-sm'
value={product.status}
onChange={(e) =>
  dispatch(updateStatus({ id: product.id, status: e.target.value }))
}
>
<option value="" disabled>
  Status
</option>
<option value="Processing">Processing</option>
<option value="Shipped">Shipped</option>
<option value="Delivered">Delivered</option>
<option value="Pending">Pending</option>
</select>
            </span>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
            {showDetails && detailProduct && (
                <Details setShowDetails={setShowDetails} detailProduct={detailProduct} />
            ) }
      </div>

    )
}


export default Sales;
