
import { useState } from "react";
import { searchCustomers, resetSearch } from "../store/features/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import { CustDetails } from "../components/index";
import { Search } from "lucide-react";



function Customer() {

    const {customers, searchResult} = useSelector((state) => state.customer)
    const dispatch = useDispatch();

    const [showDetail, setShowDetail] = useState(false)
    const [customerDetails, setCustomerDetail] = useState(null)


    const CustomerData = searchResult.length > 0 ? searchResult : customers

    const handleSearch = (e) => {
        dispatch(searchCustomers({
          Name: e.target.value,
          Email: e.target.value
        }))
      }
    return (
        <div className="p-6">
        {/* Top section */}
        <div className="flex justify-between mb-6 border-b-2">
          <h1 className="text-2xl font-bold">Customers</h1>
          <div className="mb-4 flex ">

          <div className="flex items-center gap-2 w-full max-w-md">
      <label htmlFor="search" className="font-medium">
         <Search/>
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search customers..."
        className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={
            handleSearch
        }
      />
    </div>
</div>
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg shadow-sm">
            <thead className="bg-gray-200 text-gray-600 uppercase text-sm font-medium">
              <tr>
                {["Name", "Email", "Total Orders", "Total Spent", "Join Date", "Details"].map(
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
              {CustomerData.map((product) => (
                <tr key={product.Email} className="hover:bg-slate-100">
                  <td className="border border-gray-300 px-4 py-2">{product.Name}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.Email}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.TotalOrders}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.TotalSpent}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.JoinDate}</td>
                  <td className="border border-gray-300 px-4 py-2 ">
                    <div className="flex space-x-6">
                      <button
                        className=" hover:font-medium "
                        onClick={() => {setShowDetail(true)
                            setCustomerDetail(product)
                        } }
                      >
                     Details
                      </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {showDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
            <CustDetails customerDetails = {customerDetails} setShowDetails = {setShowDetail} />
          </div>
        </div>
      )}

      </div>

    )
}


export default Customer;
