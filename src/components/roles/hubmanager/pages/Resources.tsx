import React from "react";

const Resources: React.FC = () => {
	// Dummy data for devices
	const devices = [
		{ id: 1, name: "Laptop HP-001", type: "Laptop", status: "Active", user: "Alice Johnson", lastUsed: "2024-01-15", condition: "Good" },
		{ id: 2, name: "Tablet Samsung-002", type: "Tablet", status: "Active", user: "Bob Smith", lastUsed: "2024-01-15", condition: "Good" },
		{ id: 3, name: "Laptop Dell-003", type: "Laptop", status: "Maintenance", user: "None", lastUsed: "2024-01-10", condition: "Needs Repair" },
		{ id: 4, name: "Tablet iPad-004", type: "Tablet", status: "Active", user: "Carol Brown", lastUsed: "2024-01-14", condition: "Good" },
		{ id: 5, name: "Laptop Lenovo-005", type: "Laptop", status: "Active", user: "David Wilson", lastUsed: "2024-01-15", condition: "Good" },
		{ id: 6, name: "Tablet Android-006", type: "Tablet", status: "Offline", user: "None", lastUsed: "2024-01-12", condition: "Needs Update" },
		{ id: 7, name: "Laptop MacBook-007", type: "Laptop", status: "Active", user: "Eva Garcia", lastUsed: "2024-01-15", condition: "Good" },
		{ id: 8, name: "Tablet iPad-008", type: "Tablet", status: "Active", user: "Frank Miller", lastUsed: "2024-01-13", condition: "Good" },
	];

	// Dummy data for support requests
	const supportRequests = [
		{ id: 1, title: "Internet connectivity issues", priority: "High", status: "Pending", assignedTo: "IT Support", date: "2024-01-15" },
		{ id: 2, title: "Device Dell-003 needs repair", priority: "Medium", status: "In Progress", assignedTo: "Hardware Team", date: "2024-01-14" },
		{ id: 3, title: "Software update required", priority: "Low", status: "Pending", assignedTo: "IT Support", date: "2024-01-13" },
		{ id: 4, title: "Network printer not working", priority: "Medium", status: "Resolved", assignedTo: "IT Support", date: "2024-01-12" },
	];

	return (
		<div className="space-y-6 text-white">
			<div className="flex justify-between items-center">
				<h3 className="font-semibold mb-3">Hub Resources Management</h3>
				<div className="flex space-x-2">
					<button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors">
						Request Support
					</button>
					<button className="px-4 py-2 bg-white text-[#08083C] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
						Add Device
					</button>
				</div>
			</div>

			{/* Summary Cards */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Total Devices</h4>
					<p className="text-2xl font-bold">15</p>
					<p className="text-sm text-blue-100">8 laptops, 7 tablets</p>
				</div>
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Active Devices</h4>
					<p className="text-2xl font-bold">12</p>
					<p className="text-sm text-green-300">80% utilization</p>
				</div>
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Internet Status</h4>
					<p className="text-2xl font-bold text-green-300">Online</p>
					<p className="text-sm text-blue-100">100 Mbps</p>
				</div>
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Support Requests</h4>
					<p className="text-2xl font-bold">4</p>
					<p className="text-sm text-yellow-300">2 pending</p>
				</div>
			</div>

			{/* Internet Status */}
			<div className="p-4 rounded-xl border border-white/20 bg-white/5">
				<h4 className="font-medium mb-4">Internet & Network Status</h4>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div className="flex items-center space-x-3">
						<div className="w-3 h-3 bg-green-500 rounded-full"></div>
						<span>Internet Connection</span>
						<span className="text-green-300">Online</span>
					</div>
					<div className="flex items-center space-x-3">
						<div className="w-3 h-3 bg-green-500 rounded-full"></div>
						<span>WiFi Network</span>
						<span className="text-green-300">Active</span>
					</div>
					<div className="flex items-center space-x-3">
						<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
						<span>Bandwidth Usage</span>
						<span className="text-yellow-300">75%</span>
					</div>
				</div>
			</div>

			{/* Devices Table */}
			<div className="rounded-xl border border-white/20 bg-white/5 overflow-hidden">
				<div className="p-4 border-b border-white/10">
					<h4 className="font-medium">Device Inventory</h4>
				</div>
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead className="bg-white/10">
							<tr>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Device Name</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Type</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Status</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Current User</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Last Used</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Condition</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Actions</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-white/10">
							{devices.map((device) => (
								<tr key={device.id} className="hover:bg-white/5">
									<td className="px-6 py-4">
										<p className="font-medium">{device.name}</p>
									</td>
									<td className="px-6 py-4 text-sm">{device.type}</td>
									<td className="px-6 py-4">
										<span className={`px-2 py-1 rounded-full text-xs font-medium ${
											device.status === 'Active' ? 'bg-green-500/20 text-green-300' :
											device.status === 'Maintenance' ? 'bg-yellow-500/20 text-yellow-300' :
											'bg-red-500/20 text-red-300'
										}`}>
											{device.status}
										</span>
									</td>
									<td className="px-6 py-4 text-sm text-blue-100">{device.user}</td>
									<td className="px-6 py-4 text-sm text-blue-100">{device.lastUsed}</td>
									<td className="px-6 py-4">
										<span className={`px-2 py-1 rounded-full text-xs font-medium ${
											device.condition === 'Good' ? 'bg-green-500/20 text-green-300' :
											'bg-red-500/20 text-red-300'
										}`}>
											{device.condition}
										</span>
									</td>
									<td className="px-6 py-4">
										<div className="flex space-x-2">
											<button className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs hover:bg-white/20">
												View
											</button>
											<button className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs hover:bg-white/20">
												Maintain
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			{/* Support Requests */}
			<div className="rounded-xl border border-white/20 bg-white/5 overflow-hidden">
				<div className="p-4 border-b border-white/10">
					<h4 className="font-medium">Support Requests</h4>
				</div>
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead className="bg-white/10">
							<tr>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Request</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Priority</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Status</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Assigned To</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Date</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Actions</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-white/10">
							{supportRequests.map((request) => (
								<tr key={request.id} className="hover:bg-white/5">
									<td className="px-6 py-4">
										<p className="font-medium">{request.title}</p>
									</td>
									<td className="px-6 py-4">
										<span className={`px-2 py-1 rounded-full text-xs font-medium ${
											request.priority === 'High' ? 'bg-red-500/20 text-red-300' :
											request.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
											'bg-blue-500/20 text-blue-300'
										}`}>
											{request.priority}
										</span>
									</td>
									<td className="px-6 py-4">
										<span className={`px-2 py-1 rounded-full text-xs font-medium ${
											request.status === 'Resolved' ? 'bg-green-500/20 text-green-300' :
											request.status === 'In Progress' ? 'bg-blue-500/20 text-blue-300' :
											'bg-yellow-500/20 text-yellow-300'
										}`}>
											{request.status}
										</span>
									</td>
									<td className="px-6 py-4 text-sm text-blue-100">{request.assignedTo}</td>
									<td className="px-6 py-4 text-sm text-blue-100">{request.date}</td>
									<td className="px-6 py-4">
										<div className="flex space-x-2">
											<button className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs hover:bg-white/20">
												Update
											</button>
											<button className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs hover:bg-white/20">
												Close
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Resources; 