import { useDispatch, useSelector } from "react-redux";
import { setFilters, updateFilters } from "../store/features/productSlice";



const FilterPanel = ({ setShowFilterPanel }) => {
    const dispatch = useDispatch();
    const { filters } = useSelector(state => state.product);


    const handleFilter = (key, value) => {
        dispatch(updateFilters({ [key]: value }))
        dispatch(setFilters());

    }


    return (
        <div className="p-4 space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Filters</h3>
                <button onClick={() => setShowFilterPanel(false)}>❌</button>
            </div>



            <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                    value={filters.category}
                    onChange={(e) => handleFilter('category', e.target.value) }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                >
                    {/* ... options ... */}
                    <option value="all">All</option>
                    <option value="T-shirts">T-shirts</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Jacket">Jacket</option>
                    <option value="Sweatshirts">Sweatshirts</option>
                    <option value="Shoes">Shoes</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                    value={filters.status}
                    onChange={(e) => handleFilter('status', e.target.value) }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                >
                    {/* ... options ... */}
                    <option value="all">All</option>
                    <option value="In Stock">In Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                </select>
            </div>
        </div>
    );
};


export default FilterPanel;
