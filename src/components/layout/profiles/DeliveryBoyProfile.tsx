"use client";

import React, {useEffect, useState} from "react";
import axios from "axios";
import {Pencil, UploadCloud} from "lucide-react";
import {motion} from "framer-motion";

// DeliveryBoy type
type DeliveryBoy = {
  name: string;
  email: string;
  contact: string;
  vehicleType: string;
  licenseNumber: string;
  city: string;
  avatar: string;
};

const mockDeliveryBoy: DeliveryBoy = {
  name: "Sandeep Kumar",
  email: "sandeep.delivery@example.com",
  contact: "+91-9876543210",
  vehicleType: "Bike",
  licenseNumber: "DL14AB1234",
  city: "Mumbai",
  avatar: "https://via.placeholder.com/150",
};

const DeliveryBoyProfile: React.FC = () => {
  const [deliveryData, setDeliveryData] = useState<DeliveryBoy | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setDeliveryData(mockDeliveryBoy);
    }, 500);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {id, value} = e.target;
    setDeliveryData((prev) => (prev ? {...prev, [id]: value} : prev));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "mypreset");
    formData.append("cloud_name", "dcozy6hkg");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dcozy6hkg/image/upload",
        formData
      );
      const imageUrl = res.data.secure_url;
      setDeliveryData((prev) => (prev ? {...prev, avatar: imageUrl} : prev));
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Delivery Boy Profile:", deliveryData);
    alert("Profile Updated Successfully");
  };

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5, ease: "easeOut"}}
      className="app min-h-screen p-6 bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-neutral-900 dark:to-neutral-800"
    >
      <motion.h1
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.2, duration: 0.6}}
        className="app text-4xl font-extrabold text-center uppercase text-green-700 dark:text-white mb-12"
      >
        Delivery Boy Profile
      </motion.h1>

      {deliveryData ? (
        <motion.form
          onSubmit={handleSubmit}
          initial={{opacity: 0, scale: 0.95}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          className="app max-w-4xl mx-auto bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl p-8 md:p-12 space-y-10"
        >
          {/* Avatar */}
          <div className="app relative w-fit mx-auto">
            <motion.img
              src={deliveryData.avatar}
              alt="Delivery Boy Avatar"
              initial={{opacity: 0, scale: 0.8}}
              animate={{opacity: 1, scale: 1}}
              transition={{delay: 0.3}}
              className="app w-32 h-32 md:w-40 md:h-40 rounded-full ring-4 ring-green-300 dark:ring-neutral-700 object-cover mx-auto"
            />
            <label className="app absolute bottom-0 right-0 bg-green-600 hover:bg-green-700 p-2 rounded-full cursor-pointer transition duration-300 shadow-lg">
              <UploadCloud className="app w-5 h-5 text-white" />
              <input
                type="file"
                onChange={handleImageUpload}
                className="app hidden"
              />
            </label>
          </div>

          {/* Fields */}
          <div className="app grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {(
              [
                ["name", "Full Name"],
                ["email", "Email", true],
                ["contact", "Contact"],
                ["vehicleType", "Vehicle Type"],
                ["licenseNumber", "License Number"],
                ["city", "City"],
              ] as [keyof DeliveryBoy, string, boolean?][]
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
                  value={deliveryData[id]}
                  onChange={handleInputChange}
                  disabled={disabled}
                  className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-white ${
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
              className="app inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
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

export default DeliveryBoyProfile;
