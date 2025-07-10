// // "use client";

// // import React, {useEffect, useState} from "react";
// // import axios from "axios";
// // import {Pencil, UploadCloud} from "lucide-react";
// // import {motion} from "framer-motion";

// // // Define Admin type
// // type Admin = {
// //   name: string;
// //   email: string;
// //   contact: string;
// //   role: string;
// //   department: string;
// //   city: string;
// //   avatar: string;
// // };

// // // Mock Admin Data
// // const mockAdmin: Admin = {
// //   name: "Rajeev Mehra",
// //   email: "rajeev.admin@example.com",
// //   contact: "+91-9876543210",
// //   role: "Super Admin",
// //   department: "IT & Compliance",
// //   city: "Bangalore",
// //   avatar: "https://via.placeholder.com/150",
// // };

// // const AdminProfile: React.FC = () => {
// //   const [adminData, setAdminData] = useState<Admin | null>(null);

// //   useEffect(() => {
// //     setTimeout(() => {
// //       setAdminData(mockAdmin);
// //     }, 500);
// //   }, []);

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const {id, value} = e.target;
// //     setAdminData((prev) => (prev ? {...prev, [id]: value} : prev));
// //   };

// //   const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const file = e.target.files?.[0];
// //     if (!file) return;

// //     const formData = new FormData();
// //     formData.append("file", file);
// //     formData.append("upload_preset", "mypreset");
// //     formData.append("cloud_name", "dcozy6hkg");

// //     try {
// //       const res = await axios.post(
// //         "https://api.cloudinary.com/v1_1/dcozy6hkg/image/upload",
// //         formData
// //       );
// //       const imageUrl = res.data.secure_url;
// //       setAdminData((prev) => (prev ? {...prev, avatar: imageUrl} : prev));
// //     } catch (error) {
// //       console.error("Image upload failed:", error);
// //     }
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     console.log("Updated Admin Profile:", adminData);
// //     alert("Profile Updated Successfully");
// //   };

// //   return (
// //     <motion.div
// //       initial={{opacity: 0, y: 20}}
// //       animate={{opacity: 1, y: 0}}
// //       transition={{duration: 0.5, ease: "easeOut"}}
// //       className="app min-h-screen p-6 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-neutral-900 dark:to-neutral-800"
// //     >
// //       <motion.h1
// //         initial={{opacity: 0, y: -20}}
// //         animate={{opacity: 1, y: 0}}
// //         transition={{delay: 0.2, duration: 0.6}}
// //         className="app text-4xl font-extrabold text-center uppercase text-indigo-700 dark:text-white mb-12"
// //       >
// //         Admin Profile
// //       </motion.h1>

// //       {adminData ? (
// //         <motion.form
// //           onSubmit={handleSubmit}
// //           initial={{opacity: 0, scale: 0.95}}
// //           animate={{opacity: 1, scale: 1}}
// //           transition={{duration: 0.5}}
// //           className="app max-w-4xl mx-auto bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl p-8 md:p-12 space-y-10"
// //         >
// //           {/* Avatar Upload */}
// //           <div className="app relative w-fit mx-auto">
// //             <motion.img
// //               src={adminData.avatar}
// //               alt="Admin Avatar"
// //               initial={{opacity: 0, scale: 0.8}}
// //               animate={{opacity: 1, scale: 1}}
// //               transition={{delay: 0.3}}
// //               className="app w-32 h-32 md:w-40 md:h-40 rounded-full ring-4 ring-indigo-300 dark:ring-neutral-700 object-cover mx-auto"
// //             />
// //             <label className="app absolute bottom-0 right-0 bg-indigo-600 hover:bg-indigo-700 p-2 rounded-full cursor-pointer transition duration-300 shadow-lg">
// //               <UploadCloud className="app w-5 h-5 text-white" />
// //               <input
// //                 type="file"
// //                 onChange={handleImageUpload}
// //                 className="app hidden"
// //               />
// //             </label>
// //           </div>

// //           {/* Profile Fields */}
// //           <div className="app grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
// //             {(
// //               [
// //                 ["name", "Full Name"],
// //                 ["email", "Email", true],
// //                 ["contact", "Contact"],
// //                 ["role", "Role"],
// //                 ["department", "Department"],
// //                 ["city", "City"],
// //               ] as [keyof Admin, string, boolean?][]
// //             ).map(([id, label, disabled]) => (
// //               <motion.div
// //                 key={id}
// //                 initial={{opacity: 0, y: 10}}
// //                 animate={{opacity: 1, y: 0}}
// //                 transition={{duration: 0.3, delay: 0.1}}
// //                 className="app space-y-1"
// //               >
// //                 <label
// //                   htmlFor={id}
// //                   className="app block text-sm font-semibold text-gray-700 dark:text-gray-300"
// //                 >
// //                   {label}
// //                 </label>
// //                 <input
// //                   id={id}
// //                   type="text"
// //                   value={adminData[id]}
// //                   onChange={handleInputChange}
// //                   disabled={disabled}
// //                   className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-neutral-800 dark:text-white ${
// //                     disabled
// //                       ? "bg-gray-100 dark:bg-neutral-700 cursor-not-allowed"
// //                       : "bg-white dark:bg-neutral-800"
// //                   }`}
// //                 />
// //               </motion.div>
// //             ))}
// //           </div>

// //           {/* Submit Button */}
// //           <motion.div
// //             initial={{opacity: 0, y: 20}}
// //             animate={{opacity: 1, y: 0}}
// //             transition={{delay: 0.3}}
// //             className="app text-center"
// //           >
// //             <button
// //               type="submit"
// //               className="app inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
// //             >
// //               <Pencil className="app w-5 h-5" />
// //               Update Profile
// //             </button>
// //           </motion.div>
// //         </motion.form>
// //       ) : (
// //         <motion.p
// //           initial={{opacity: 0}}
// //           animate={{opacity: 1}}
// //           className="app text-center text-xl font-medium text-gray-700 dark:text-white"
// //         >
// //           Loading...
// //         </motion.p>
// //       )}
// //     </motion.div>
// //   );
// // };

// // export default AdminProfile;



// "use client";

// import React, {useEffect, useState} from "react";
// import axios from "axios";
// import {Pencil, UploadCloud} from "lucide-react";
// import {motion} from "framer-motion";
// import {useAppSelector} from "@/redux/hooks";
// import {UserRole} from "@/types/roles";

// // Define Admin type
// type Admin = {
//   name: string;
//   email: string;
//   contact: string;
//   role: UserRole;
//   department: string;
//   city: string;
//   avatar: string;
// };

// const AdminProfile: React.FC = () => {
//   const {currentUser} = useAppSelector((state) => state.user);
//   const [adminData, setAdminData] = useState<Admin | null>(null);
//   const [uploading, setUploading] = useState(false);

//   useEffect(() => {
//     if (currentUser) {
//       const timer = setTimeout(() => {
//         setAdminData(currentUser as Admin);
//       }, 500);
//       return () => clearTimeout(timer);
//     }
//   }, [currentUser]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const {id, value} = e.target;
//     setAdminData((prev) => (prev ? {...prev, [id]: value} : prev));
//   };

//   const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "mypreset");
//     formData.append("cloud_name", "dcozy6hkg");

//     setUploading(true);
//     try {
//       const res = await axios.post(
//         "https://api.cloudinary.com/v1_1/dcozy6hkg/image/upload",
//         formData
//       );
//       const imageUrl = res.data.secure_url;
//       setAdminData((prev) => (prev ? {...prev, avatar: imageUrl} : prev));
//     } catch (error) {
//       console.error("Image upload failed:", error);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Updated Admin Profile:", adminData);
//     alert("Profile Updated Successfully");

//     // Optional: Send to API
//     // try {
//     //   await axios.put("/api/admin/profile", adminData);
//     //   alert("Profile saved to server!");
//     // } catch (error) {
//     //   console.error("Update failed", error);
//     //   alert("Update failed. Try again.");
//     // }
//   };

//   return (
//     <motion.div
//       initial={{opacity: 0, y: 20}}
//       animate={{opacity: 1, y: 0}}
//       transition={{duration: 0.5}}
//       className="app min-h-screen p-6 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-neutral-900 dark:to-neutral-800"
//     >
//       <motion.h1
//         initial={{opacity: 0, y: -20}}
//         animate={{opacity: 1, y: 0}}
//         transition={{delay: 0.2, duration: 0.6}}
//         className="app text-4xl font-extrabold text-center uppercase text-indigo-700 dark:text-white mb-12"
//       >
//         Admin Profile
//       </motion.h1>

//       {adminData ? (
//         <motion.form
//           onSubmit={handleSubmit}
//           initial={{opacity: 0, scale: 0.95}}
//           animate={{opacity: 1, scale: 1}}
//           transition={{duration: 0.5}}
//           className="app max-w-4xl mx-auto bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl p-8 md:p-12 space-y-10"
//         >
//           {/* Avatar Upload */}
//           <div className="app relative w-fit mx-auto">
//             <motion.img
//               src={adminData.avatar}
//               alt="Admin Avatar"
//               initial={{opacity: 0, scale: 0.8}}
//               animate={{opacity: 1, scale: 1}}
//               transition={{delay: 0.3}}
//               className="app w-32 h-32 md:w-40 md:h-40 rounded-full ring-4 ring-indigo-300 dark:ring-neutral-700 object-cover mx-auto"
//             />
//             <label
//               htmlFor="avatar-upload"
//               className="app absolute bottom-0 right-0 bg-indigo-600 hover:bg-indigo-700 p-2 rounded-full cursor-pointer transition duration-300 shadow-lg"
//             >
//               <UploadCloud className="app w-5 h-5 text-white" />
//               <input
//                 id="avatar-upload"
//                 type="file"
//                 onChange={handleImageUpload}
//                 className="app hidden"
//                 accept="image/*"
//               />
//             </label>
//             {uploading && (
//               <div className="app absolute inset-0 bg-white/50 dark:bg-black/40 rounded-full flex items-center justify-center">
//                 <div className="app w-6 h-6 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
//               </div>
//             )}
//           </div>

//           {/* Profile Fields */}
//           <div className="app grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
//             {(
//               [
//                 ["name", "Full Name"],
//                 ["email", "Email", true],
//                 ["contact", "Contact"],
//                 ["role", "Role"],
//                 ["department", "Department"],
//                 ["city", "City"],
//               ] as [keyof Admin, string, boolean?][]
//             ).map(([id, label, disabled]) => (
//               <motion.div
//                 key={id}
//                 initial={{opacity: 0, y: 10}}
//                 animate={{opacity: 1, y: 0}}
//                 transition={{duration: 0.3, delay: 0.1}}
//                 className="app space-y-1"
//               >
//                 <label
//                   htmlFor={id}
//                   className="app block text-sm font-semibold text-gray-700 dark:text-gray-300"
//                 >
//                   {label}
//                 </label>
//                 <input
//                   id={id}
//                   type="text"
//                   value={adminData[id]}
//                   onChange={handleInputChange}
//                   disabled={disabled}
//                   className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-neutral-800 dark:text-white ${
//                     disabled
//                       ? "bg-gray-100 dark:bg-neutral-700 cursor-not-allowed"
//                       : "bg-white dark:bg-neutral-800"
//                   }`}
//                 />
//               </motion.div>
//             ))}
//           </div>

//           {/* Submit Button */}
//           <motion.div
//             initial={{opacity: 0, y: 20}}
//             animate={{opacity: 1, y: 0}}
//             transition={{delay: 0.3}}
//             className="app text-center"
//           >
//             <button
//               type="submit"
//               className="app inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
//             >
//               <Pencil className="app w-5 h-5" />
//               Update Profile
//             </button>
//           </motion.div>
//         </motion.form>
//       ) : (
//         <motion.p
//           initial={{opacity: 0}}
//           animate={{opacity: 1}}
//           className="app text-center text-xl font-medium text-gray-700 dark:text-white"
//         >
//           Loading...
//         </motion.p>
//       )}
//     </motion.div>
//   );
// };

// export default AdminProfile;


"use client";

import React, {useEffect, useState} from "react";
import axios from "axios";
import {Pencil, UploadCloud} from "lucide-react";
import {motion} from "framer-motion";
import {useAppSelector} from "@/redux/hooks";
import {UserRole} from "@/types/roles";

// Type definition
type Admin = {
  name: string;
  email: string;
  contact: string;
  role: UserRole;
  department: string;
  city: string;
  avatar: string;
};

const AdminProfile: React.FC = () => {
  const {currentUser} = useAppSelector((state) => state.user);
  const [adminData, setAdminData] = useState<Admin | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (
      currentUser &&
      currentUser.role === UserRole.ADMIN &&
      currentUser.name &&
      currentUser.email
    ) {
      setAdminData(currentUser as Admin);
    }
  }, [currentUser]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {id, value} = e.target;
    setAdminData((prev) => (prev ? {...prev, [id]: value} : prev));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "mypreset");
    formData.append("cloud_name", "dcozy6hkg");

    setUploading(true);
    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dcozy6hkg/image/upload",
        formData
      );
      const imageUrl = res.data.secure_url;
      setAdminData((prev) => (prev ? {...prev, avatar: imageUrl} : prev));
    } catch (error) {
      console.error("Image upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminData) return;

    console.log("Updated Admin Profile:", adminData);
    alert("Profile Updated Successfully");

    // Optional: Save to server
    // try {
    //   await axios.put("/api/admin/profile", adminData);
    //   alert("Profile saved!");
    // } catch (error) {
    //   console.error("Update failed:", error);
    // }
  };

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className="app min-h-screen p-6 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-neutral-900 dark:to-neutral-800"
    >
      <motion.h1
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.2, duration: 0.6}}
        className="app text-4xl font-extrabold text-center uppercase text-indigo-700 dark:text-white mb-12"
      >
        Admin Profile
      </motion.h1>

      {adminData ? (
        <motion.form
          onSubmit={handleSubmit}
          initial={{opacity: 0, scale: 0.95}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          className="app max-w-4xl mx-auto bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl p-8 md:p-12 space-y-10"
        >
          {/* Avatar Upload */}
          <div className="app relative w-fit mx-auto">
            <motion.img
              src={adminData.avatar}
              alt="Admin Avatar"
              initial={{opacity: 0, scale: 0.8}}
              animate={{opacity: 1, scale: 1}}
              transition={{delay: 0.3}}
              className="app w-32 h-32 md:w-40 md:h-40 rounded-full ring-4 ring-indigo-300 dark:ring-neutral-700 object-cover mx-auto"
            />
            <label
              htmlFor="avatar-upload"
              className="app absolute bottom-0 right-0 bg-indigo-600 hover:bg-indigo-700 p-2 rounded-full cursor-pointer transition duration-300 shadow-lg"
            >
              <UploadCloud className="app w-5 h-5 text-white" />
              <input
                id="avatar-upload"
                type="file"
                onChange={handleImageUpload}
                className="app hidden"
                accept="image/*"
              />
            </label>
            {uploading && (
              <div className="app absolute inset-0 bg-white/50 dark:bg-black/40 rounded-full flex items-center justify-center">
                <div className="app w-6 h-6 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </div>

          {/* Profile Fields */}
          <div className="app grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {(
              [
                ["name", "Full Name"],
                ["email", "Email", true],
                ["contact", "Contact"],
                ["role", "Role"],
                ["department", "Department"],
                ["city", "City"],
              ] as [keyof Admin, string, boolean?][]
            ).map(([id, label, disabled]) => (
              <motion.div
                key={id}
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.3, delay: 0.1}}
                className="app space-y-1"
              >
                <label
                  htmlFor={id}
                  className="app block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  {label}
                </label>
                <input
                  id={id}
                  type="text"
                  value={adminData[id]}
                  onChange={handleInputChange}
                  disabled={disabled}
                  className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-neutral-800 dark:text-white ${
                    disabled
                      ? "bg-gray-100 dark:bg-neutral-700 cursor-not-allowed"
                      : "bg-white dark:bg-neutral-800"
                  }`}
                />
              </motion.div>
            ))}
          </div>

          {/* Submit Button */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.3}}
            className="app text-center"
          >
            <button
              type="submit"
              className="app inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Pencil className="app w-5 h-5" />
              Update Profile
            </button>
          </motion.div>
        </motion.form>
      ) : (
        <motion.p
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          className="app text-center text-xl font-medium text-gray-700 dark:text-white"
        >
          Loading...
        </motion.p>
      )}
    </motion.div>
  );
};

export default AdminProfile;
