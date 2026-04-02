function BasicTable({ data }) {
    return (
        <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
                <tr>
                    <th className="border border-gray-300 px-4 py-2">Customer ID</th>
                    <th className="border border-gray-300 px-4 py-2">Customer</th>
                    <th className="border border-gray-300 px-4 py-2">Amount</th>
                    <th className="border border-gray-300 px-4 py-2">Status</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">#{row.id}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.customer_email}</td>
                        <td className="border border-gray-300 px-4 py-2">${row.amount}</td>
                        <td className="border border-gray-300 px-4 py-2">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                                row.status === 'completed' ? 'bg-green-100 text-green-800' :
                                row.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                row.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                                'bg-gray-100 text-gray-800'
                            }`}>
                                {row.status}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default BasicTable
