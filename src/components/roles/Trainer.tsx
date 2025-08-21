import React from "react";
import TrainerLayout from "./trainer/TrainerLayout";
import { Routes, Route } from "react-router-dom";
import TrainerHome from "./trainer/pages/TrainerHome";
import RegisterTrainee from "./trainer/pages/RegisterTrainee";
import Trainees from "./trainer/pages/Trainees";
import TraineeDetail from "./trainer/pages/TraineeDetail";
import Courses from "./trainer/pages/Courses";
import Attendance from "./trainer/pages/Attendance";
import Reports from "./trainer/pages/Reports";

const Trainer: React.FC = () => {
	return (
		<div className="h-screen overflow-hidden bg-[#08083C]">
			<Routes>
				<Route element={<TrainerLayout />}> 
					<Route index element={<TrainerHome />} />
					<Route path="register" element={<RegisterTrainee />} />
					<Route path="trainees" element={<Trainees />} />
					<Route path="trainees/:traineeId" element={<TraineeDetail />} />
					<Route path="courses" element={<Courses />} />
					<Route path="attendance" element={<Attendance />} />
					<Route path="reports" element={<Reports />} />
				</Route>
			</Routes>
		</div>
	);
};

export default Trainer; 