// // // // import React from "react";

// // // // const AdminDashboard: React.FC = () => {
// // // //   return (
// // // //     <div className="p-6 bg-gray-50 min-h-screen">
// // // //       <h2 className="text-3xl font-bold text-gray-800 mb-6">
// // // //         Administrator Dashboard
// // // //       </h2>

// // // //       {/* Overview Cards */}
// // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
// // // //         <div className="bg-white p-4 rounded-xl shadow">
// // // //           <h3 className="text-xl font-semibold mb-2">Total Doctors</h3>
// // // //           <p className="text-4xl font-bold text-blue-600">12</p>
// // // //         </div>
// // // //         <div className="bg-white p-4 rounded-xl shadow">
// // // //           <h3 className="text-xl font-semibold mb-2">Total Patients</h3>
// // // //           <p className="text-4xl font-bold text-green-600">48</p>
// // // //         </div>
// // // //         <div className="bg-white p-4 rounded-xl shadow">
// // // //           <h3 className="text-xl font-semibold mb-2">Medicine Admins</h3>
// // // //           <p className="text-4xl font-bold text-purple-600">5</p>
// // // //         </div>
// // // //       </div>

// // // //       {/* Doctors Table */}
// // // //       <div className="bg-white rounded-xl shadow p-6 mb-8">
// // // //         <div className="flex justify-between items-center mb-4">
// // // //           <h3 className="text-2xl font-semibold text-gray-800">Doctors</h3>
// // // //           <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
// // // //             Add Doctor
// // // //           </button>
// // // //         </div>
// // // //         <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
// // // //           <thead className="bg-gray-100">
// // // //             <tr>
// // // //               <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
// // // //                 Name
// // // //               </th>
// // // //               <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
// // // //                 Specialization
// // // //               </th>
// // // //               <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
// // // //                 Contact
// // // //               </th>
// // // //               <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
// // // //                 Actions
// // // //               </th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             <tr className="border-b hover:bg-gray-50">
// // // //               <td className="py-3 px-4 text-gray-800">Dr. John Doe</td>
// // // //               <td className="py-3 px-4 text-gray-800">Cardiology</td>
// // // //               <td className="py-3 px-4 text-gray-800">+91-9999999999</td>
// // // //               <td className="py-3 px-4 flex space-x-2">
// // // //                 <button className="bg-yellow-500 text-white px-3 py-1 rounded-md text-xs">
// // // //                   Edit
// // // //                 </button>
// // // //                 <button className="bg-red-600 text-white px-3 py-1 rounded-md text-xs">
// // // //                   Delete
// // // //                 </button>
// // // //               </td>
// // // //             </tr>
// // // //             {/* More rows... */}
// // // //           </tbody>
// // // //         </table>
// // // //       </div>

// // // //       {/* Medicine Admins Table */}
// // // //       <div className="bg-white rounded-xl shadow p-6">
// // // //         <div className="flex justify-between items-center mb-4">
// // // //           <h3 className="text-2xl font-semibold text-gray-800">
// // // //             Medicine Administrators
// // // //           </h3>
// // // //           <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
// // // //             Add Medicine Admin
// // // //           </button>
// // // //         </div>
// // // //         <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
// // // //           <thead className="bg-gray-100">
// // // //             <tr>
// // // //               <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
// // // //                 Name
// // // //               </th>
// // // //               <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
// // // //                 Contact
// // // //               </th>
// // // //               <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
// // // //                 Actions
// // // //               </th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             <tr className="border-b hover:bg-gray-50">
// // // //               <td className="py-3 px-4 text-gray-800">Jane Smith</td>
// // // //               <td className="py-3 px-4 text-gray-800">+91-8888888888</td>
// // // //               <td className="py-3 px-4 flex space-x-2">
// // // //                 <button className="bg-yellow-500 text-white px-3 py-1 rounded-md text-xs">
// // // //                   Edit
// // // //                 </button>
// // // //                 <button className="bg-red-600 text-white px-3 py-1 rounded-md text-xs">
// // // //                   Delete
// // // //                 </button>
// // // //               </td>
// // // //             </tr>
// // // //             {/* More rows... */}
// // // //           </tbody>
// // // //         </table>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AdminDashboard;


// // // import React from "react";
// // // import {CheckCircle, Pill} from "lucide-react";

// // // const DoctorDashboardUI: React.FC = () => {
// // //   return (
// // //     <div className="p-6 bg-gray-50 min-h-screen">
// // //       <h2 className="text-3xl font-bold text-gray-800 mb-6">
// // //         Doctor Dashboard
// // //       </h2>

// // //       {/* Pending Appointments */}
// // //       <div className="bg-white rounded-xl shadow p-6 mb-8">
// // //         <h3 className="text-2xl font-semibold text-gray-800 mb-4">
// // //           Pending Appointments
// // //         </h3>
// // //         <div className="overflow-x-auto">
// // //           <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
// // //             <thead className="bg-gray-100">
// // //               <tr>
// // //                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
// // //                   Patient
// // //                 </th>
// // //                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
// // //                   Date
// // //                 </th>
// // //                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
// // //                   Time
// // //                 </th>
// // //                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
// // //                   Reason
// // //                 </th>
// // //                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
// // //                   Actions
// // //                 </th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               <tr className="border-b hover:bg-gray-50">
// // //                 <td className="py-3 px-4 text-gray-800">Jane Doe</td>
// // //                 <td className="py-3 px-4 text-gray-800">2025-07-05</td>
// // //                 <td className="py-3 px-4 text-gray-800">10:00 AM</td>
// // //                 <td className="py-3 px-4 text-gray-800">Fever & Cough</td>
// // //                 <td className="py-3 px-4 flex space-x-2">
// // //                   <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs flex items-center gap-1">
// // //                     <Pill size={14} /> Prescribe
// // //                   </button>
// // //                   <button className="bg-green-600 text-white px-3 py-1 rounded-md text-xs flex items-center gap-1">
// // //                     <CheckCircle size={14} /> Completed
// // //                   </button>
// // //                 </td>
// // //               </tr>
// // //               {/* More static rows */}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       </div>

// // //       {/* Completed Appointments */}
// // //       <div className="bg-white rounded-xl shadow p-6">
// // //         <h3 className="text-2xl font-semibold text-gray-800 mb-4">
// // //           Completed Appointments
// // //         </h3>
// // //         <div className="overflow-x-auto">
// // //           <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
// // //             <thead className="bg-gray-100">
// // //               <tr>
// // //                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
// // //                   Patient
// // //                 </th>
// // //                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
// // //                   Date
// // //                 </th>
// // //                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
// // //                   Time
// // //                 </th>
// // //                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
// // //                   Prescription
// // //                 </th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               <tr className="border-b hover:bg-gray-50">
// // //                 <td className="py-3 px-4 text-gray-800">John Smith</td>
// // //                 <td className="py-3 px-4 text-gray-800">2025-07-03</td>
// // //                 <td className="py-3 px-4 text-gray-800">2:30 PM</td>
// // //                 <td className="py-3 px-4 text-gray-800">
// // //                   Paracetamol 500mg - 1 tab twice daily for 3 days
// // //                 </td>
// // //               </tr>
// // //               {/* More static rows */}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       </div>

// // //       {/* Prescribe Modal (Static Example) */}
// // //       {/* <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
// // //         <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-lg">
// // //           <h3 className="text-xl font-semibold mb-4">Prescribe Medicine</h3>
// // //           <p className="mb-4 text-gray-700">
// // //             Prescribing for: <span className="font-semibold">Jane Doe</span> on
// // //             2025-07-05 at 10:00 AM
// // //           </p>
// // //           <textarea
// // //             className="w-full p-3 border rounded-md text-sm text-gray-700"
// // //             rows={5}
// // //             placeholder="e.g. Paracetamol 500mg, twice daily for 3 days"
// // //             defaultValue=""
// // //           />
// // //           <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md flex items-center justify-center gap-2 text-sm">
// // //             <CheckCircle size={16} /> Save Prescription
// // //           </button>
// // //         </div>
// // //       </div> */}
// // //     </div>
// // //   );
// // // };

// // // export default DoctorDashboardUI;

// // import React from "react";
// // import {Edit, Plus} from "lucide-react";

// // const PatientDashboardUI: React.FC = () => {
// //   return (
// //     <div className="p-6 bg-gray-50 min-h-screen">
// //       <h2 className="text-3xl font-bold text-gray-800 mb-6">
// //         Patient Dashboard
// //       </h2>

// //       {/* Patient Profile Section */}
// //       <div className="bg-white rounded-xl shadow p-6 mb-8">
// //         <div className="flex justify-between items-center mb-4">
// //           <h3 className="text-2xl font-semibold text-gray-800">Your Profile</h3>
// //           <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
// //             <Edit size={16} /> Edit Profile
// //           </button>
// //         </div>
// //         <div>
// //           <p className="mb-2">
// //             <span className="font-semibold">Name:</span> Jane Doe
// //           </p>
// //           <p className="mb-2">
// //             <span className="font-semibold">Contact:</span> +91-9999999999
// //           </p>
// //           <p className="mb-2">
// //             <span className="font-semibold">Address:</span> 123 Main Street,
// //             Mumbai
// //           </p>
// //         </div>
// //       </div>

// //       {/* Appointments Section */}
// //       <div className="bg-white rounded-xl shadow p-6 mb-8">
// //         <div className="flex justify-between items-center mb-4">
// //           <h3 className="text-2xl font-semibold text-gray-800">
// //             Your Appointments
// //           </h3>
// //           <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
// //             <Plus size={16} /> Book New Appointment
// //           </button>
// //         </div>
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
// //             <thead className="bg-gray-100">
// //               <tr>
// //                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
// //                   Doctor
// //                 </th>
// //                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
// //                   Date
// //                 </th>
// //                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
// //                   Time
// //                 </th>
// //                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
// //                   Reason
// //                 </th>
// //                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
// //                   Status
// //                 </th>
// //                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
// //                   Prescription
// //                 </th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               <tr className="border-b hover:bg-gray-50">
// //                 <td className="py-3 px-4 text-gray-800">Dr. John Smith</td>
// //                 <td className="py-3 px-4 text-gray-800">2025-07-05</td>
// //                 <td className="py-3 px-4 text-gray-800">10:00 AM</td>
// //                 <td className="py-3 px-4 text-gray-800">Fever & Cold</td>
// //                 <td className="py-3 px-4">
// //                   <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
// //                     Pending
// //                   </span>
// //                 </td>
// //                 <td className="py-3 px-4 text-gray-800">N/A</td>
// //               </tr>
// //               {/* More static rows... */}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>

// //       {/* Book Appointment Modal */}
// //       <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
// //         <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6">
// //           <h3 className="text-xl font-semibold mb-4">Book New Appointment</h3>
// //           <div className="mb-4">
// //             <label className="block text-sm font-medium text-gray-700 mb-1">
// //               Select Doctor
// //             </label>
// //             <select className="w-full border rounded-md px-3 py-2 text-sm">
// //               <option>Select a doctor</option>
// //               <option>Dr. A (Cardiologist)</option>
// //               <option>Dr. B (Dermatologist)</option>
// //             </select>
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-sm font-medium text-gray-700 mb-1">
// //               Date
// //             </label>
// //             <input
// //               type="date"
// //               className="w-full border rounded-md px-3 py-2 text-sm"
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-sm font-medium text-gray-700 mb-1">
// //               Time
// //             </label>
// //             <input
// //               type="time"
// //               className="w-full border rounded-md px-3 py-2 text-sm"
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-sm font-medium text-gray-700 mb-1">
// //               Reason for Appointment
// //             </label>
// //             <textarea
// //               rows={3}
// //               className="w-full border rounded-md px-3 py-2 text-sm"
// //               placeholder="e.g., Fever, Consultation..."
// //             />
// //           </div>
// //           <button className="w-full bg-blue-600 text-white py-2 rounded-md flex items-center justify-center gap-2 text-sm hover:bg-blue-700">
// //             <Plus size={16} /> Book Appointment
// //           </button>
// //         </div>
// //       </div>

// //       {/* Patient Profile Modal */}
// //       <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
// //         <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6">
// //           <h3 className="text-xl font-semibold mb-4">Edit Your Profile</h3>
// //           <div className="mb-4">
// //             <label className="block text-sm font-medium text-gray-700 mb-1">
// //               Your Name
// //             </label>
// //             <input
// //               type="text"
// //               className="w-full border rounded-md px-3 py-2 text-sm"
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-sm font-medium text-gray-700 mb-1">
// //               Contact Number
// //             </label>
// //             <input
// //               type="text"
// //               className="w-full border rounded-md px-3 py-2 text-sm"
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-sm font-medium text-gray-700 mb-1">
// //               Your Address
// //             </label>
// //             <textarea
// //               rows={3}
// //               className="w-full border rounded-md px-3 py-2 text-sm"
// //               placeholder="e.g., 123 Main St, City, Country"
// //             />
// //           </div>
// //           <button className="w-full bg-green-600 text-white py-2 rounded-md flex items-center justify-center gap-2 text-sm hover:bg-green-700">
// //             <Edit size={16} /> Save Profile
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PatientDashboardUI;

// import React from "react";
// import {Edit, Plus, Trash2, Truck} from "lucide-react";

// const MedicineAdministratorDashboardUI: React.FC = () => {
//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h2 className="text-3xl font-bold text-gray-800 mb-6">
//         Medicine Administrator Dashboard
//       </h2>

//       {/* Medicines Management Section */}
//       <div className="bg-white rounded-xl shadow p-6 mb-8">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-2xl font-semibold text-gray-800">Medicines</h3>
//           <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
//             <Plus size={16} /> Add Medicine
//           </button>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                   Name
//                 </th>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                   Description
//                 </th>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                   Stock
//                 </th>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                   Price
//                 </th>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b hover:bg-gray-50">
//                 <td className="py-3 px-4 text-gray-800">Paracetamol</td>
//                 <td className="py-3 px-4 text-gray-800">Pain Reliever</td>
//                 <td className="py-3 px-4 text-gray-800">100</td>
//                 <td className="py-3 px-4 text-gray-800">$5.00</td>
//                 <td className="py-3 px-4 flex space-x-2">
//                   <button className="bg-yellow-500 text-white px-3 py-1 rounded-md text-xs">
//                     Edit
//                   </button>
//                   <button className="bg-red-600 text-white px-3 py-1 rounded-md text-xs">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Pending Medicine Orders Section */}
//       <div className="bg-white rounded-xl shadow p-6 mb-8">
//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//           Pending Medicine Orders
//         </h3>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                   Order ID
//                 </th>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                   Patient
//                 </th>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                   Items
//                 </th>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                   Total
//                 </th>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                   Order Date
//                 </th>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b hover:bg-gray-50">
//                 <td className="py-3 px-4 text-gray-800">abc123...</td>
//                 <td className="py-3 px-4 text-gray-800">John Doe</td>
//                 <td className="py-3 px-4 text-gray-800">
//                   <ul>
//                     <li>Paracetamol x 2</li>
//                   </ul>
//                 </td>
//                 <td className="py-3 px-4 text-gray-800">$10.00</td>
//                 <td className="py-3 px-4 text-gray-800">2025-07-01</td>
//                 <td className="py-3 px-4">
//                   <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
//                     <Truck size={16} /> Assign Delivery
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Assigned Medicine Orders Section */}
//       <div className="bg-white rounded-xl shadow p-6 mb-8">
//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//           Assigned Medicine Orders
//         </h3>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                   Order ID
//                 </th>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                   Patient
//                 </th>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                   Assigned To
//                 </th>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                   Status
//                 </th>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                   Order Date
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b hover:bg-gray-50">
//                 <td className="py-3 px-4 text-gray-800">xyz456...</td>
//                 <td className="py-3 px-4 text-gray-800">Jane Smith</td>
//                 <td className="py-3 px-4 text-gray-800">Delivery Boy A</td>
//                 <td className="py-3 px-4">
//                   <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
//                     Assigned
//                   </span>
//                 </td>
//                 <td className="py-3 px-4 text-gray-800">2025-07-02</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Completed Medicine Orders Section */}
//       <div className="bg-white rounded-xl shadow p-6">
//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//           Completed Medicine Orders
//         </h3>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                   Order ID
//                 </th>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                   Patient
//                 </th>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                   Assigned To
//                 </th>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                   Status
//                 </th>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                   Order Date
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b hover:bg-gray-50">
//                 <td className="py-3 px-4 text-gray-800">lmn789...</td>
//                 <td className="py-3 px-4 text-gray-800">Alice Brown</td>
//                 <td className="py-3 px-4 text-gray-800">Delivery Boy B</td>
//                 <td className="py-3 px-4">
//                   <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
//                     Completed
//                   </span>
//                 </td>
//                 <td className="py-3 px-4 text-gray-800">2025-07-03</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// "use client";

// import React from "react";
// import {Box, CheckCircle} from "lucide-react";

// // ==========================
// // Types
// // ==========================

// type MedicineItem = {
//   medicineId: string;
//   quantity: number;
// };

// type Order = {
//   id: string;
//   patientId: string;
//   status: "Assigned" | "Picked Up" | "Delivered";
//   items: MedicineItem[];
//   deliveryDate?: string;
// };

// // ==========================
// // Reusable Components
// // ==========================

// type ButtonProps = {
//   onClick?: () => void;
//   children: React.ReactNode;
//   variant?: "primary" | "secondary" | "destructive";
//   icon?: React.ElementType;
//   className?: string;
// };

// const Button: React.FC<ButtonProps> = ({
//   onClick,
//   children,
//   variant = "primary",
//   icon: Icon,
//   className = "",
// }) => {
//   const base =
//     "inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition";
//   const variants: Record<string, string> = {
//     primary: "bg-blue-600 text-white hover:bg-blue-700",
//     secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
//     destructive: "bg-red-600 text-white hover:bg-red-700",
//   };

//   return (
//     <button
//       onClick={onClick}
//       className={`${base} ${variants[variant]} ${className}`}
//     >
//       {Icon && <Icon size={16} />}
//       {children}
//     </button>
//   );
// };

// type CardProps = {
//   children: React.ReactNode;
//   className?: string;
// };

// const Card: React.FC<CardProps> = ({children, className = ""}) => (
//   <div className={`bg-white p-6 rounded-xl shadow-sm ${className}`}>
//     {children}
//   </div>
// );

// // ==========================
// // Main Component
// // ==========================

// const DeliveryBoyDashboard: React.FC = () => {
//   // Sample Data
//   const assignedOrders: Order[] = [
//     {
//       id: "order12345678",
//       patientId: "patient1",
//       status: "Assigned",
//       items: [
//         {medicineId: "med1", quantity: 2},
//         {medicineId: "med2", quantity: 1},
//       ],
//     },
//     {
//       id: "order23456789",
//       patientId: "patient2",
//       status: "Picked Up",
//       items: [{medicineId: "med3", quantity: 5}],
//     },
//   ];

//   const deliveredOrders: Order[] = [
//     {
//       id: "order34567890",
//       patientId: "patient3",
//       status: "Delivered",
//       deliveryDate: "2025-07-01",
//       items: [
//         {medicineId: "med1", quantity: 1},
//         {medicineId: "med4", quantity: 3},
//       ],
//     },
//   ];

//   // Helpers
//   const getPatientName = (id: string): string => {
//     const patients: Record<string, string> = {
//       patient1: "John Doe",
//       patient2: "Alice Smith",
//       patient3: "Robert Johnson",
//     };
//     return patients[id] || "Unknown Patient";
//   };

//   const getMedicineName = (id: string): string => {
//     const medicines: Record<string, string> = {
//       med1: "Paracetamol",
//       med2: "Amoxicillin",
//       med3: "Ibuprofen",
//       med4: "Cetirizine",
//     };
//     return medicines[id] || "Unknown Medicine";
//   };

//   const handleUpdateOrderStatus = (
//     orderId: string,
//     status: "Picked Up" | "Delivered"
//   ): void => {
//     console.log(`Order ${orderId} updated to status: ${status}`);
//     alert(`Order ${orderId} marked as ${status}`);
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h2 className="text-3xl font-bold text-gray-800 mb-6">
//         Medicine Delivery Boy Dashboard
//       </h2>

//       {/* Assigned Orders */}
//       <Card className="mb-8">
//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//           Your Assigned Orders
//         </h3>
//         {assignedOrders.length === 0 ? (
//           <p className="text-gray-600">No orders currently assigned to you.</p>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                     Order ID
//                   </th>
//                   <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                     Patient
//                   </th>
//                   <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                     Items
//                   </th>
//                   <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                     Status
//                   </th>
//                   <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {assignedOrders.map((order) => (
//                   <tr
//                     key={order.id}
//                     className="border-b last:border-b-0 hover:bg-gray-50"
//                   >
//                     <td className="py-3 px-4 text-gray-800">
//                       {order.id.substring(0, 8)}...
//                     </td>
//                     <td className="py-3 px-4 text-gray-800">
//                       {getPatientName(order.patientId)}
//                     </td>
//                     <td className="py-3 px-4 text-gray-800">
//                       <ul>
//                         {order.items.map((item, idx) => (
//                           <li key={idx}>
//                             {getMedicineName(item.medicineId)} x {item.quantity}
//                           </li>
//                         ))}
//                       </ul>
//                     </td>
//                     <td className="py-3 px-4 text-gray-800">
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                           order.status === "Assigned"
//                             ? "bg-blue-100 text-blue-800"
//                             : "bg-yellow-100 text-yellow-800"
//                         }`}
//                       >
//                         {order.status}
//                       </span>
//                     </td>
//                     <td className="py-3 px-4 flex space-x-2">
//                       {order.status === "Assigned" && (
//                         <Button
//                           onClick={() =>
//                             handleUpdateOrderStatus(order.id, "Picked Up")
//                           }
//                           variant="secondary"
//                           icon={Box}
//                           className="p-2 text-sm"
//                         >
//                           Picked Up
//                         </Button>
//                       )}
//                       {order.status === "Picked Up" && (
//                         <Button
//                           onClick={() =>
//                             handleUpdateOrderStatus(order.id, "Delivered")
//                           }
//                           variant="primary"
//                           icon={CheckCircle}
//                           className="p-2 text-sm"
//                         >
//                           Delivered
//                         </Button>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </Card>

//       {/* Delivered Orders */}
//       <Card>
//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//           Your Delivered Orders
//         </h3>
//         {deliveredOrders.length === 0 ? (
//           <p className="text-gray-600">No orders delivered by you yet.</p>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                     Order ID
//                   </th>
//                   <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                     Patient
//                   </th>
//                   <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                     Items
//                   </th>
//                   <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                     Status
//                   </th>
//                   <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
//                     Delivery Date
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {deliveredOrders.map((order) => (
//                   <tr
//                     key={order.id}
//                     className="border-b last:border-b-0 hover:bg-gray-50"
//                   >
//                     <td className="py-3 px-4 text-gray-800">
//                       {order.id.substring(0, 8)}...
//                     </td>
//                     <td className="py-3 px-4 text-gray-800">
//                       {getPatientName(order.patientId)}
//                     </td>
//                     <td className="py-3 px-4 text-gray-800">
//                       <ul>
//                         {order.items.map((item, idx) => (
//                           <li key={idx}>
//                             {getMedicineName(item.medicineId)} x {item.quantity}
//                           </li>
//                         ))}
//                       </ul>
//                     </td>
//                     <td className="py-3 px-4 text-gray-800">
//                       <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
//                         {order.status}
//                       </span>
//                     </td>
//                     <td className="py-3 px-4 text-gray-800">
//                       {order.deliveryDate || "N/A"}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </Card>
//     </div>
//   );
// };

// export default DeliveryBoyDashboard;
