"use client";

import React, {lazy, Suspense} from "react";
import {useAppSelector} from "@/redux/hooks";
import {UserRole} from "@/types/roles";
import ProfileSkeleton from "@/components/layout/skeleton/ProfileSkeleton";

// ✅ Lazy-loaded component map
const RoleComponentMap: Record<
  UserRole,
  React.LazyExoticComponent<React.FC>
> = {
  ADMINISTRATOR: lazy(
    () => import("@/components/layout/profiles/AdminProfile")
  ),
  PATIENT: lazy(() => import("@/components/layout/profiles/PatientProfile")),
  DELIVERY_BOY: lazy(
    () => import("@/components/layout/profiles/DeliveryBoyProfile")
  ),
  MEDICINE_ADMIN: lazy(
    () => import("@/components/layout/profiles/MedicineAdminProfile")
  ),
  DOCTOR: lazy(() => import("@/components/layout/profiles/DoctorProfile")),
  USER: lazy(() => import("@/components/layout/profiles/UserProfile")),
};

// ✅ Main Profile Component
const Profile: React.FC = () => {
  const {currentUser} = useAppSelector((state) => state.user);

  // fallback role if undefined
  const role = (currentUser?.role as UserRole) || UserRole.USER;
  const RoleComponent =
    RoleComponentMap[role] || RoleComponentMap[UserRole.USER];

  return (
    <div className="app min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-neutral-900 dark:to-neutral-800 p-6">
      <Suspense fallback={<ProfileSkeleton />}>
        <RoleComponent />
        <div className="app min-h-screen bg-gradient-to-br from-blue-100 via-cyan-700 to-blue-100 dark:from-neutral-900 dark:to-neutral-800 p-6"></div>
        <div className="min-h-screen bg-gradient-to-tr from-pink-300 via-orange-200 to-yellow-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-black p-6 shadow-xl rounded-xl">
          Sunset Glow Section
        </div>
        <div className="min-h-screen bg-gradient-to-bl from-indigo-900 via-purple-900 to-gray-900 p-6 text-white rounded-3xl shadow-2xl">
          Midnight Nebula Panel
        </div>
        <div className="min-h-screen bg-gradient-to-r from-green-200 via-green-400 to-green-600 dark:from-green-900 dark:to-emerald-800 p-6 rounded-lg">
          Nature Forest Layout
        </div>
        <div className="min-h-screen bg-gradient-to-b from-sky-200 via-cyan-400 to-blue-500 dark:from-blue-900 dark:to-cyan-800 p-6 shadow-lg rounded-2xl">
          Ocean Breeze UI Box
        </div>
        <div className="min-h-screen bg-gradient-to-r from-slate-200 via-gray-100 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-700 p-6 border border-gray-300 dark:border-neutral-600 rounded-xl">
          Cloudy Pastel Section
        </div>
        <div className="min-h-screen bg-gradient-to-tr from-teal-100 via-green-200 to-lime-100 dark:from-emerald-900 dark:to-lime-800 p-6 rounded-lg shadow-md">
          {/* Minty UI content here */}
        </div>
        <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-orange-200 to-rose-200 dark:from-yellow-800 dark:to-rose-900 p-6 rounded-2xl shadow-inner">
          {/* Vibrant UI content here */}
        </div>
        <div className="min-h-screen bg-gradient-to-r from-sky-100 via-blue-200 to-indigo-200 dark:from-blue-800 dark:to-indigo-900 p-6 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl">
          {/* Frosty card-style UI */}
        </div>
        <div className="min-h-screen bg-gradient-to-b from-slate-800 via-gray-900 to-black p-6 text-white rounded-xl shadow-md">
          {/* Dark modern UI layout */}
        </div>
        <div className="min-h-screen bg-gradient-to-l from-fuchsia-300 via-purple-300 to-indigo-300 dark:from-purple-900 dark:to-indigo-800 p-6 rounded-3xl shadow-lg ring-2 ring-purple-300/40">
          {/* Artistic or portfolio layout */}
        </div>
        <div className="min-h-screen bg-gradient-to-tr from-pink-100 via-rose-100 to-violet-100 dark:from-pink-900 dark:to-violet-800 p-6 rounded-xl border border-pink-200/50 dark:border-pink-800/50">
          {/* Elegant soft form UI */}
        </div>
        <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-6 text-green-400 shadow-2xl rounded-xl border border-green-500/20">
          {/* Cyberpunk layout or developer dashboard */}
        </div>
      </Suspense>
    </div>
  );
};

export default Profile;
