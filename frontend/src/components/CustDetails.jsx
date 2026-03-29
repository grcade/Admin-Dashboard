




function CustDetails({setShowDetails, customerDetails }) {
    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
          setShowDetails(false);
        }
      };

    //   {
    //     "Name": "John Doe",
    //     "Email": "john.doe@example.com",
    //     "TotalOrders": 15,
    //     "TotalSpent": 1200.50,
    //     "JoinDate": "2022-05-15",
    //     "Address": {
    //       "Street": "123 Elm Street",
    //       "City": "Springfield",
    //       "State": "IL",
    //       "ZipCode": "62704",
    //       "Country": "USA"
    //     }
    //   },

    const { Name, Email, TotalOrders, TotalSpent, JoinDate, Address} = customerDetails
  return (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={handleBackgroundClick}
        >
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-h-[80vh] max-w-3xl overflow-y-auto w-full">
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Customer Details</h2>

              <div className="grid gap-3">
                <div className="flex border-b pb-2">
                  <span className="font-medium w-32">Customer:</span>
                  <span>{Name}</span>
                </div>

                <div className="flex border-b pb-2">
                  <span className="font-medium w-32">Email ID:</span>
                  <span>{Email}</span>
                </div>

                <div className="flex border-b pb-2">
                  <span className="font-medium w-32">Join Date:</span>
                  <span>{JoinDate}</span>
                </div>
                <div className="flex border-b pb-2">
                  <span className="font-medium w-32">Address:</span>
                  <span>Street: {Address.Street},</span>
                        <span>City: {Address.City},</span>
                        <span>State: {Address.State}</span>
                </div>
                <div className="flex border-b pb-2">
                  <span className="font-medium w-32">ZIP Code:</span>
                  <span>{Address.ZipCode}</span>
                </div>



                <div className="flex border-b pb-2">
                  <span className="font-medium w-32">Total Orders:</span>
                  <span>${TotalOrders}</span>
                </div>
                <div className="flex border-b pb-2">
                  <span className="font-medium w-32">Total Spent:</span>
                  <span>${TotalSpent}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}



export default CustDetails
