import { DollarSign, Package, ShoppingBag, User } from "lucide-react";
import { Card, BasicTable } from "../components/index";
import { useGetStatsQuery, useGetMonthlySalesQuery } from "../store/dashboardApi";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function Dashboard() {
  const { data: stats, isLoading: statsLoading } = useGetStatsQuery();
  const { data: salesData, isLoading: salesLoading } = useGetMonthlySalesQuery();

  if (statsLoading || salesLoading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          label="Total Revenue"
          value={`$${stats.totalSales}`}
          icon={<DollarSign />}
        />
        <Card
          label="Orders"
          value={stats.totalOrders}
          icon={<ShoppingBag />}
        />
        <Card
          label="Products Count"
          value={stats.totalProducts}
          icon={<Package />}
        />
        <Card
          label="Active Customers 🟢"
          value={stats.activeCustomers}
          icon={<User />}
        />

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow col-span-2 ">
          <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
          <BasicTable data={stats.recentOrders} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow min-w-fit col-span-2">
           <h2 className="text-2xl font-bold mb-4">Monthly Sales</h2>
          <div className="h-64">
            <Bar
              data={{
                labels: salesData?.map((data) => data.month),
                datasets: [
                  {
                    label: "Revenue",
                    data: salesData?.map((data) => data.totalSales),
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
    </div>
  );
}

export default Dashboard;
