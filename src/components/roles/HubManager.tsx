import React from "react";
import HubManagerLayout from "./hubmanager/HubManagerLayout";
import { Routes, Route } from "react-router-dom";
import HubManagerHome from "./hubmanager/pages/HubManagerHome";
import Trainees from "./hubmanager/pages/Trainees";
import Resources from "./hubmanager/pages/Resources";
import Reports from "./hubmanager/pages/Reports";

const HubManager: React.FC = () => {
	return (
		<div className="h-screen overflow-hidden bg-[#08083C]">
			<Routes>
				<Route element={<HubManagerLayout />}> 
					<Route index element={<HubManagerHome />} />
					<Route path="trainees" element={<Trainees />} />
					<Route path="resources" element={<Resources />} />
					<Route path="reports" element={<Reports />} />
				</Route>
			</Routes>
		</div>
	);
};

export default HubManager; 