




function CustDetails({setShowDetails, customerDetails }) {
    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
          setShowDetails(false);
        }
      };

    if (!customerDetails) return null;

    const { name, email, total_orders, total_amount_spent, registration_date, address, phone, zip_code, status} = customerDetails
  return (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={handleBackgroundClick}
        >
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-h-[80vh] max-w-3xl overflow-y-auto w-full">
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold text-2xl"
            >
              ×
            </button>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">Customer Details</h2>

              <div className="grid gap-3">
                <div className="flex border-b pb-2">
                  <span className="font-medium w-32">Customer:</span>
                  <span>{name}</span>
                </div>

                <div className="flex border-b pb-2">
                  <span className="font-medium w-32">Email ID:</span>
                  <span>{email}</span>
                </div>

                <div className="flex border-b pb-2">
                  <span className="font-medium w-32">Phone:</span>
                  <span>{phone}</span>
                </div>

                <div className="flex border-b pb-2">
                  <span className="font-medium w-32">Status:</span>
                  <span className={`px-2 py-0.5 rounded text-sm ${status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {status}
                  </span>
                </div>

                <div className="flex border-b pb-2">
                  <span className="font-medium w-32">Join Date:</span>
                  <span>{registration_date}</span>
                </div>
                
                <div className="flex border-b pb-2">
                  <span className="font-medium w-32">Address:</span>
                  <span>{address}</span>
                </div>
                
                <div className="flex border-b pb-2">
                  <span className="font-medium w-32">ZIP Code:</span>
                  <span>{zip_code}</span>
                </div>

                <div className="flex border-b pb-2">
                  <span className="font-medium w-32">Total Orders:</span>
                  <span>{total_orders}</span>
                </div>
                <div className="flex border-b pb-2">
                  <span className="font-medium w-32">Total Spent:</span>
                  <span>${total_amount_spent}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}



export default CustDetails
