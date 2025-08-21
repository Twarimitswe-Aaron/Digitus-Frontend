import React from "react";

const Trainees: React.FC = () => {
	// Dummy data for hub trainees with attendance
	const hubTrainees = [
		{ id: 1, name: "Alice Johnson", age: 65, attendance: "85%", lastVisit: "2024-01-15", status: "Active", trainer: "Sarah Wilson" },
		{ id: 2, name: "Bob Smith", age: 72, attendance: "92%", lastVisit: "2024-01-14", status: "Active", trainer: "Mike Davis" },
		{ id: 3, name: "Carol Brown", age: 58, attendance: "78%", lastVisit: "2024-01-12", status: "Active", trainer: "Sarah Wilson" },
		{ id: 4, name: "David Wilson", age: 69, attendance: "95%", lastVisit: "2024-01-15", status: "Active", trainer: "Mike Davis" },
		{ id: 5, name: "Eva Garcia", age: 63, attendance: "88%", lastVisit: "2024-01-13", status: "Active", trainer: "Lisa Chen" },
		{ id: 6, name: "Frank Miller", age: 71, attendance: "82%", lastVisit: "2024-01-11", status: "Active", trainer: "Sarah Wilson" },
		{ id: 7, name: "Grace Lee", age: 67, attendance: "90%", lastVisit: "2024-01-15", status: "Active", trainer: "Mike Davis" },
		{ id: 8, name: "Henry Taylor", age: 74, attendance: "76%", lastVisit: "2024-01-10", status: "Active", trainer: "Lisa Chen" },
		{ id: 9, name: "Iris Martinez", age: 61, attendance: "94%", lastVisit: "2024-01-15", status: "Active", trainer: "Sarah Wilson" },
		{ id: 10, name: "Jack Anderson", age: 68, attendance: "87%", lastVisit: "2024-01-14", status: "Active", trainer: "Mike Davis" },
	];

	return (
		<div className="space-y-6 text-white">
			<div className="flex justify-between items-center">
				<h3 className="font-semibold mb-3">Hub Trainees Attendance</h3>
				<div className="flex space-x-2">
					<button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors">
						Export Report
					</button>
					<button className="px-4 py-2 bg-white text-[#08083C] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
						Add Trainee
					</button>
				</div>
			</div>

			{/* Summary Cards */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Total Trainees</h4>
					<p className="text-2xl font-bold">156</p>
				</div>
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Average Attendance</h4>
					<p className="text-2xl font-bold">87%</p>
				</div>
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Active This Week</h4>
					<p className="text-2xl font-bold">142</p>
				</div>
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">New This Month</h4>
					<p className="text-2xl font-bold">12</p>
				</div>
			</div>

			{/* Trainees Table */}
			<div className="rounded-xl border border-white/20 bg-white/5 overflow-hidden">
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead className="bg-white/10">
							<tr>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Name</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Age</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Attendance</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Last Visit</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Status</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Assigned Trainer</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Actions</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-white/10">
							{hubTrainees.map((trainee) => (
								<tr key={trainee.id} className="hover:bg-white/5">
									<td className="px-6 py-4">
										<div>
											<p className="font-medium">{trainee.name}</p>
										</div>
									</td>
									<td className="px-6 py-4 text-sm">{trainee.age}</td>
									<td className="px-6 py-4">
										<span className={`px-2 py-1 rounded-full text-xs font-medium ${
											parseInt(trainee.attendance) >= 90 ? 'bg-green-500/20 text-green-300' :
											parseInt(trainee.attendance) >= 80 ? 'bg-blue-500/20 text-blue-300' :
											parseInt(trainee.attendance) >= 70 ? 'bg-yellow-500/20 text-yellow-300' :
											'bg-red-500/20 text-red-300'
										}`}>
											{trainee.attendance}
										</span>
									</td>
									<td className="px-6 py-4 text-sm text-blue-100">{trainee.lastVisit}</td>
									<td className="px-6 py-4">
										<span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">
											{trainee.status}
										</span>
									</td>
									<td className="px-6 py-4 text-sm text-blue-100">{trainee.trainer}</td>
									<td className="px-6 py-4">
										<div className="flex space-x-2">
											<button className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs hover:bg-white/20">
												View
											</button>
											<button className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs hover:bg-white/20">
												Edit
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			{/* Attendance Chart */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">Weekly Attendance Trend</h4>
					<div className="h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-end justify-around p-4">
						<div className="w-8 bg-white/30 rounded-t"></div>
						<div className="w-8 bg-white/50 rounded-t" style={{height: '75%'}}></div>
						<div className="w-8 bg-white/70 rounded-t" style={{height: '85%'}}></div>
						<div className="w-8 bg-white/90 rounded-t" style={{height: '92%'}}></div>
						<div className="w-8 bg-white rounded-t" style={{height: '88%'}}></div>
					</div>
					<p className="text-sm text-blue-100 mt-2">Last 5 weeks attendance percentage</p>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">Trainer Performance</h4>
					<div className="space-y-3">
						<div className="flex justify-between items-center">
							<span>Sarah Wilson</span>
							<span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-sm">92% avg</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Mike Davis</span>
							<span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">88% avg</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Lisa Chen</span>
							<span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-sm">85% avg</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Trainees; 