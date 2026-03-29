




function Details({setShowDetails, detailProduct }) {
    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
          setShowDetails(false);
        }
      };

    const {customerName, id, date, items , status, total, shippingAddress} = detailProduct

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
              <h2 className="text-xl font-semibold mb-4">Order Details</h2>

              <div className="grid gap-3">
                <div className="flex border-b pb-2">
                  <span className="font-medium w-32">Customer:</span>
                  <span>{customerName}</span>
                </div>

                <div className="flex border-b pb-2">
                  <span className="font-medium w-32">Order ID:</span>
                  <span>{id}</span>
                </div>

                <div className="flex border-b pb-2">
                  <span className="font-medium w-32">Date:</span>
                  <span>{date}</span>
                </div>

                <div className="flex border-b pb-2">
                  <span className="font-medium w-32">Status:</span>
                  <span  className={`px-2 py-1 rounded-full text-sm ${
                   status === 'Delivered' ? 'bg-green-100 text-green-800' :
                   status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                   status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {status}
                  </span>
                </div>

                <div className="border-b pb-2">
                  <span className="font-medium">Items:</span>
                  <ul className="mt-2 space-y-2">
                    {items.map((item, index) => (
                      <li key={`${id}-${index}`} className="flex items-center gap-4 pl-4">
                        <span>Product ID: {item.productId}</span>
                        <span>Quantity: {item.quantity}</span>
                        <span>Price: ${item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex border-b pb-2">
                  <span className="font-medium w-32">Total:</span>
                  <span>${total}</span>
                </div>

                <div className="flex">
                  <span className="font-medium w-32">Shipping:</span>
                  <span>{ shippingAddress.street} , {shippingAddress.city}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}



export default Details
