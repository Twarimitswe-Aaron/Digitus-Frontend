import React from "react";

const Hubs: React.FC = () => {
	// Dummy data for hubs
	const hubs = [
		{ id: 1, name: "Kigali Central Hub", location: "Kigali, Rwanda", manager: "John Smith", status: "Active", trainees: 156, trainers: 8, capacity: 200, createdDate: "2023-01-15" },
		{ id: 2, name: "Kigali East Hub", location: "Kigali, Rwanda", manager: "Emma Johnson", status: "Active", trainees: 142, trainers: 6, capacity: 180, createdDate: "2023-02-20" },
		{ id: 3, name: "Kigali West Hub", location: "Kigali, Rwanda", manager: "Maria Garcia", status: "Active", trainees: 98, trainers: 5, capacity: 150, createdDate: "2023-03-10" },
		{ id: 4, name: "Eastern Hub", location: "Eastern Province, Rwanda", manager: "David Brown", status: "Inactive", trainees: 0, trainers: 0, capacity: 120, createdDate: "2023-04-05" },
		{ id: 5, name: "Western Hub", location: "Western Province, Rwanda", manager: "Lisa Chen", status: "Active", trainees: 87, trainers: 4, capacity: 100, createdDate: "2023-05-12" },
		{ id: 6, name: "Southern Hub", location: "Southern Province, Rwanda", manager: "Alex Thompson", status: "Pending", trainees: 0, trainers: 0, capacity: 80, createdDate: "2024-01-10" },
		{ id: 7, name: "Northern Hub", location: "Northern Province, Rwanda", manager: "Sarah Wilson", status: "Active", trainees: 65, trainers: 3, capacity: 90, createdDate: "2023-06-18" },
		{ id: 8, name: "Kigali South Hub", location: "Kigali, Rwanda", manager: "Mike Davis", status: "Active", trainees: 112, trainers: 7, capacity: 160, createdDate: "2023-07-22" },
	];

	return (
		<div className="space-y-6 text-white">
			<div className="flex justify-between items-center">
				<h3 className="font-semibold mb-3">Hub Management</h3>
				<div className="flex space-x-2">
					<button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors">
						Export Hubs
					</button>
					<button className="px-4 py-2 bg-white text-[#08083C] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
						Create Hub
					</button>
				</div>
			</div>

			{/* Summary Cards */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Total Hubs</h4>
					<p className="text-2xl font-bold">25</p>
					<p className="text-sm text-blue-100">Across all regions</p>
				</div>
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Active Hubs</h4>
					<p className="text-2xl font-bold">22</p>
					<p className="text-sm text-green-300">88% operational</p>
				</div>
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Total Capacity</h4>
					<p className="text-2xl font-bold">3,280</p>
					<p className="text-sm text-purple-300">Learners across all hubs</p>
				</div>
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Average Utilization</h4>
					<p className="text-2xl font-bold">87%</p>
					<p className="text-sm text-yellow-300">Good capacity usage</p>
				</div>
			</div>

			{/* Filter Tabs */}
			<div className="flex space-x-2 mb-6">
				<button className="px-4 py-2 bg-white text-[#08083C] font-semibold rounded-lg">All Hubs</button>
				<button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors">Active</button>
				<button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors">Inactive</button>
				<button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors">Pending</button>
			</div>

			{/* Hubs Table */}
			<div className="rounded-xl border border-white/20 bg-white/5 overflow-hidden">
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead className="bg-white/10">
							<tr>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Hub Name</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Location</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Manager</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Status</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Trainees</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Trainers</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Capacity</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Utilization</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Actions</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-white/10">
							{hubs.map((hub) => {
								const utilization = Math.round((hub.trainees / hub.capacity) * 100);
								return (
									<tr key={hub.id} className="hover:bg-white/5">
										<td className="px-6 py-4">
											<div>
												<p className="font-medium">{hub.name}</p>
												<p className="text-xs text-blue-100">Created: {hub.createdDate}</p>
											</div>
										</td>
										<td className="px-6 py-4 text-sm text-blue-100">{hub.location}</td>
										<td className="px-6 py-4 text-sm text-blue-100">{hub.manager}</td>
										<td className="px-6 py-4">
											<span className={`px-2 py-1 rounded-full text-xs font-medium ${
												hub.status === 'Active' ? 'bg-green-500/20 text-green-300' :
												hub.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-300' :
												'bg-red-500/20 text-red-300'
											}`}>
												{hub.status}
											</span>
										</td>
										<td className="px-6 py-4 text-sm">{hub.trainees}</td>
										<td className="px-6 py-4 text-sm">{hub.trainers}</td>
										<td className="px-6 py-4 text-sm">{hub.capacity}</td>
										<td className="px-6 py-4">
											<span className={`px-2 py-1 rounded-full text-xs font-medium ${
												utilization >= 90 ? 'bg-red-500/20 text-red-300' :
												utilization >= 75 ? 'bg-yellow-500/20 text-yellow-300' :
												'bg-green-500/20 text-green-300'
											}`}>
												{utilization}%
											</span>
										</td>
										<td className="px-6 py-4">
											<div className="flex space-x-2">
												<button className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs hover:bg-white/20">
													Edit
												</button>
												<button className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs hover:bg-white/20">
													View
												</button>
												<button className="px-2 py-1 bg-red-500/20 border border-red-500/20 rounded text-xs hover:bg-red-500/30 text-red-300">
													Deactivate
												</button>
											</div>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>

			{/* Hub Statistics */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">Hub Growth Trend</h4>
					<div className="h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-end justify-around p-4">
						<div className="flex flex-col items-center">
							<div className="w-8 bg-white/30 rounded-t" style={{height: '60%'}}></div>
							<span className="text-xs mt-1">Q1</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-8 bg-white/50 rounded-t" style={{height: '70%'}}></div>
							<span className="text-xs mt-1">Q2</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-8 bg-white/70 rounded-t" style={{height: '80%'}}></div>
							<span className="text-xs mt-1">Q3</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-8 bg-white/90 rounded-t" style={{height: '85%'}}></div>
							<span className="text-xs mt-1">Q4</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-8 bg-white rounded-t" style={{height: '90%'}}></div>
							<span className="text-xs mt-1">Q1'24</span>
						</div>
					</div>
					<p className="text-sm text-blue-100 mt-2">Hub count growth over quarters</p>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">Regional Distribution</h4>
					<div className="space-y-3">
						<div className="flex justify-between items-center">
							<span>Kigali Region</span>
							<span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-sm">8 hubs</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Eastern Province</span>
							<span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">6 hubs</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Western Province</span>
							<span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">5 hubs</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Southern Province</span>
							<span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-sm">3 hubs</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Northern Province</span>
							<span className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-sm">3 hubs</span>
						</div>
					</div>
				</div>
			</div>

			{/* Quick Actions */}
			<div className="p-4 rounded-xl border border-white/20 bg-white/5">
				<h4 className="font-medium mb-4">Hub Management Actions</h4>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
					<button className="p-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
						🏢 Create New Hub
					</button>
					<button className="p-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
						👥 Assign Manager
					</button>
					<button className="p-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
						📊 Hub Analytics
					</button>
					<button className="p-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
						⚙️ Hub Settings
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hubs; 