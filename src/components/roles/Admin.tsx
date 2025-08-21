import React from "react";
import AdminLayout from "./admin/AdminLayout";
import { Routes, Route } from "react-router-dom";
import AdminHome from "./admin/pages/AdminHome";
import Users from "./admin/pages/Users";
import Hubs from "./admin/pages/Hubs";
import Reports from "./admin/pages/Reports";

const Admin: React.FC = () => {
	return (
		<div className="h-screen overflow-hidden bg-[#08083C]">
			<Routes>
				<Route element={<AdminLayout />}> 
					<Route index element={<AdminHome />} />
					<Route path="users" element={<Users />} />
					<Route path="hubs" element={<Hubs />} />
					<Route path="reports" element={<Reports />} />
				</Route>
			</Routes>
		</div>
	);
};

export default Admin; 