// src/components/Dashboard.js
import React from 'react';
import { Users, Tractor, ShoppingBag } from 'lucide-react';

const DashboardStats = ({ title, value, icon: Icon, trend }) => (
  <div className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow">
    <div className="flex justify-between items-center pb-2">
      <h2 className="text-sm font-medium">{title}</h2>
      <Icon className="h-4 w-4 text-green-600" />
    </div>
    <div className="text-2xl font-bold">{value}</div>
    <p className="text-xs text-gray-500">{trend}</p>
  </div>
);

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Welcome to EcoFarm Network</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardStats title="Active Job Listings" value="24" icon={Users} trend="+5 new this week" />
        <DashboardStats title="Available Equipment" value="15" icon={Tractor} trend="3 pending requests" />
        <DashboardStats title="Marketplace Items" value="156" icon={ShoppingBag} trend="12 new listings" />
      </div>
    </div>
  );
};

export default Dashboard;
