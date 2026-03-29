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
                    <tr key={index}>
                        <td className="border border-gray-300 px-4 py-2">{row.id}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.customer}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.amount}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default BasicTable
