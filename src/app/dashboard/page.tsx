"use client";
import { useState } from 'react';
import { 
  FaUserMd, 
  FaHospital, 
  FaCalendarCheck, 
  FaChartLine,
  FaUserInjured,
  FaBed,
  FaCalendarAlt,
  FaMoneyBillWave 
} from 'react-icons/fa';

// ...existing code...
const DashboardCard = ({ title, value, icon, color }: { title: string; value: string; icon: React.ReactNode; color: string }) => (
  <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${color}`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-bold mt-2">{value}</p>
      </div>
      <div className={`text-2xl ${color.replace('border-', 'text-')}`}>
        {icon}
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome to Global Care Management System</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Total Patients"
            value="1,234"
            icon={<FaUserMd />}
            color="border-blue-500"
          />
          <DashboardCard
            title="Available Beds"
            value="45"
            icon={<FaHospital />}
            color="border-green-500"
          />
          <DashboardCard
            title="Appointments"
            value="89"
            icon={<FaCalendarCheck />}
            color="border-yellow-500"
          />
          <DashboardCard
            title="Revenue"
            value="$45,678"
            icon={<FaChartLine />}
            color="border-purple-500"
          />
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Tabs */}
          <div className="border-b mb-6">
            <nav className="flex space-x-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-4 px-2 ${
                  activeTab === 'overview'
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-500'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('patients')}
                className={`pb-4 px-2 ${
                  activeTab === 'patients'
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-500'
                }`}
              >
                Patients
              </button>
              <button
                onClick={() => setActiveTab('appointments')}
                className={`pb-4 px-2 ${
                  activeTab === 'appointments'
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-500'
                }`}
              >
                Appointments
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
                  {/* Add activity list here */}
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Upcoming Appointments</h3>
                  {/* Add appointments list here */}
                </div>
              </div>
            )}
            {activeTab === 'patients' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Patient List</h3>
                {/* Add patient table here */}
              </div>
            )}
            {activeTab === 'appointments' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Appointment Calendar</h3>
                {/* Add appointment calendar here */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;