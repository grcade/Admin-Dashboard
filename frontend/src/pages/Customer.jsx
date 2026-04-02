
import { useState } from "react";
import { searchCustomers } from "../store/features/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import { CustDetails, PaginationBar } from "../components/index";
import { Search } from "lucide-react";
import { useGetCustomersQuery } from "../store/dashboardApi";

function Customer() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  // API returns { data, total }
  const { data: customersResponse } = useGetCustomersQuery({ page: currentPage, limit: itemsPerPage });
  const customers = customersResponse?.data || [];
    console.log("Customers API response:", customersResponse);
  const totalItems = customersResponse?.totalCustomers.count || customers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const { searchResult } = useSelector((state) => state.customer);
  const dispatch = useDispatch();
  const [showDetail, setShowDetail] = useState(false);
  const [customerDetails, setCustomerDetail] = useState(null);

  // If searching, paginate on frontend, else use API paginated data
  const CustomerData = searchResult.length > 0 ? searchResult : customers;
  const paginatedData = searchResult.length > 0
    ? searchResult : customers;

    const handleSearch = (e) => {
        if (customers) {
            dispatch(searchCustomers({
                customers,
                searchTerm: e.target.value
            }));
        }
    };
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
              {paginatedData.map((customer) => (
                <tr key={customer.email} className="hover:bg-slate-100">
                  <td className="border border-gray-300 px-4 py-2">{customer.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{customer.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{customer.total_orders}</td>
                  <td className="border border-gray-300 px-4 py-2">${customer.total_amount_spent}</td>
                  <td className="border border-gray-300 px-4 py-2">{customer.registration_date}</td>
                  <td className="border border-gray-300 px-4 py-2 ">
                    <div className="flex space-x-6">
                      <button
                        className=" hover:font-medium "
                        onClick={() => {setShowDetail(true)
                            setCustomerDetail(customer)
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
        {/* Pagination Bar */}
        <div className="flex justify-center my-4">
          <PaginationBar
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
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
