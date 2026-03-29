function Card({
    label = "",
    value = "",
    icon,
    onClick,

}) {

    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-gray-500 text-sm">{label}</p>
                    <p className="text-2xl font-semibold mt-1">{value}</p>
                </div>

                {onClick? (<button onClick={onClick} className="border rounded-md bg-blue-200 p-3"> +1</button> ): null }

                {icon && <div className="text-blue-500">{icon}</div>}
            </div>
        </div>
    )
}



export default Card
