import { DollarSign, Package, ShoppingBag, User } from "lucide-react";
import { Card, BasicTable } from "../components/index";
import {
  incrementOrders,
  incrementRevenue,
  updateStats,
} from "../store/features/dashboardSlice";
import { useSelector, useDispatch } from "react-redux";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

function Dashboard() {
  const stats = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          label="Total Revenue"
          value={`$${stats.totalRevenue}`}
          icon={<DollarSign />}
        />
        <Card
          label="Orders"
          value={stats.ordersCount}
          icon={<ShoppingBag />}
        />
        <Card
          label="Products Count"
          value={stats.productsCount}
          icon={<Package />}
        />
        <Card
          label="Active Customers 🟢"
          value={stats.activeCustomer}
          icon={<User />}
        />

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow col-span-2 ">
          <h2 className="text-2xl  mb-4">Recent Orders</h2>
          <BasicTable data={stats.recentOrders} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow min-w-fit ">
          <Bar
            data={{
              labels: stats.revenueData.map((data) => data.month),
              datasets: [
                {
                  label: "Revenue",
                  data: stats.revenueData.map((data) => data.revenue),
                  backgroundColor: "rgba(75, 192, 192, 0.2)",
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
