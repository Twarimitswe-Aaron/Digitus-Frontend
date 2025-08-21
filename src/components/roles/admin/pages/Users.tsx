import React from "react";

const Users: React.FC = () => {
	// Dummy data for users
	const users = [
		{ id: 1, name: "Sarah Wilson", role: "Trainer", email: "sarah.wilson@digitus.com", hub: "Kigali Central", status: "Active", lastActive: "2024-01-15", trainees: 45 },
		{ id: 2, name: "Mike Davis", role: "Trainer", email: "mike.davis@digitus.com", hub: "Kigali East", status: "Active", lastActive: "2024-01-15", trainees: 38 },
		{ id: 3, name: "Lisa Chen", role: "Trainer", email: "lisa.chen@digitus.com", hub: "Kigali West", status: "Active", lastActive: "2024-01-14", trainees: 42 },
		{ id: 4, name: "John Smith", role: "Hub Manager", email: "john.smith@digitus.com", hub: "Kigali Central", status: "Active", lastActive: "2024-01-15", trainees: 156 },
		{ id: 5, name: "Emma Johnson", role: "Hub Manager", email: "emma.johnson@digitus.com", hub: "Kigali East", status: "Active", lastActive: "2024-01-15", trainees: 142 },
		{ id: 6, name: "David Brown", role: "Trainer", email: "david.brown@digitus.com", hub: "Eastern Hub", status: "Inactive", lastActive: "2024-01-10", trainees: 0 },
		{ id: 7, name: "Maria Garcia", role: "Hub Manager", email: "maria.garcia@digitus.com", hub: "Western Hub", status: "Active", lastActive: "2024-01-15", trainees: 98 },
		{ id: 8, name: "Alex Thompson", role: "Trainer", email: "alex.thompson@digitus.com", hub: "Kigali South", status: "Pending", lastActive: "Never", trainees: 0 },
	];

	return (
		<div className="space-y-6 text-white">
			<div className="flex justify-between items-center">
				<h3 className="font-semibold mb-3">User Management</h3>
				<div className="flex space-x-2">
					<button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors">
						Export Users
					</button>
					<button className="px-4 py-2 bg-white text-[#08083C] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
						Add User
					</button>
				</div>
			</div>

			{/* Summary Cards */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Total Users</h4>
					<p className="text-2xl font-bold">114</p>
					<p className="text-sm text-blue-100">89 trainers, 25 managers</p>
				</div>
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Active Users</h4>
					<p className="text-2xl font-bold">108</p>
					<p className="text-sm text-green-300">94.7% active rate</p>
				</div>
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Pending Approvals</h4>
					<p className="text-2xl font-bold">3</p>
					<p className="text-sm text-yellow-300">New registrations</p>
				</div>
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Inactive Users</h4>
					<p className="text-2xl font-bold">3</p>
					<p className="text-sm text-red-300">Need attention</p>
				</div>
			</div>

			{/* Filter Tabs */}
			<div className="flex space-x-2 mb-6">
				<button className="px-4 py-2 bg-white text-[#08083C] font-semibold rounded-lg">All Users</button>
				<button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors">Trainers</button>
				<button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors">Hub Managers</button>
				<button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors">Pending</button>
			</div>

			{/* Users Table */}
			<div className="rounded-xl border border-white/20 bg-white/5 overflow-hidden">
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead className="bg-white/10">
							<tr>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Name</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Role</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Email</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Hub</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Status</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Last Active</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Trainees</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Actions</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-white/10">
							{users.map((user) => (
								<tr key={user.id} className="hover:bg-white/5">
									<td className="px-6 py-4">
										<div>
											<p className="font-medium">{user.name}</p>
										</div>
									</td>
									<td className="px-6 py-4">
										<span className={`px-2 py-1 rounded-full text-xs font-medium ${
											user.role === 'Hub Manager' ? 'bg-purple-500/20 text-purple-300' : 'bg-blue-500/20 text-blue-300'
										}`}>
											{user.role}
										</span>
									</td>
									<td className="px-6 py-4 text-sm text-blue-100">{user.email}</td>
									<td className="px-6 py-4 text-sm text-blue-100">{user.hub}</td>
									<td className="px-6 py-4">
										<span className={`px-2 py-1 rounded-full text-xs font-medium ${
											user.status === 'Active' ? 'bg-green-500/20 text-green-300' :
											user.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-300' :
											'bg-red-500/20 text-red-300'
										}`}>
											{user.status}
										</span>
									</td>
									<td className="px-6 py-4 text-sm text-blue-100">{user.lastActive}</td>
									<td className="px-6 py-4 text-sm">{user.trainees}</td>
									<td className="px-6 py-4">
										<div className="flex space-x-2">
											<button className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs hover:bg-white/20">
												Edit
											</button>
											<button className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs hover:bg-white/20">
												View
											</button>
											<button className="px-2 py-1 bg-red-500/20 border border-red-500/20 rounded text-xs hover:bg-red-500/30 text-red-300">
												Suspend
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			{/* User Statistics */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">User Activity Overview</h4>
					<div className="h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-end justify-around p-4">
						<div className="flex flex-col items-center">
							<div className="w-8 bg-white/30 rounded-t" style={{height: '75%'}}></div>
							<span className="text-xs mt-1">Mon</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-8 bg-white/50 rounded-t" style={{height: '85%'}}></div>
							<span className="text-xs mt-1">Tue</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-8 bg-white/70 rounded-t" style={{height: '90%'}}></div>
							<span className="text-xs mt-1">Wed</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-8 bg-white/90 rounded-t" style={{height: '88%'}}></div>
							<span className="text-xs mt-1">Thu</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-8 bg-white rounded-t" style={{height: '92%'}}></div>
							<span className="text-xs mt-1">Fri</span>
						</div>
					</div>
					<p className="text-sm text-blue-100 mt-2">Daily active users this week</p>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">Role Distribution</h4>
					<div className="space-y-3">
						<div className="flex justify-between items-center">
							<span>Trainers</span>
							<div className="flex items-center space-x-2">
								<div className="w-20 bg-white/20 rounded-full h-2">
									<div className="bg-blue-500 h-2 rounded-full" style={{width: '78%'}}></div>
								</div>
								<span className="text-sm">78%</span>
							</div>
						</div>
						<div className="flex justify-between items-center">
							<span>Hub Managers</span>
							<div className="flex items-center space-x-2">
								<div className="w-20 bg-white/20 rounded-full h-2">
									<div className="bg-purple-500 h-2 rounded-full" style={{width: '22%'}}></div>
								</div>
								<span className="text-sm">22%</span>
							</div>
						</div>
						<div className="flex justify-between items-center">
							<span>Active Users</span>
							<span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-sm">94.7%</span>
						</div>
						<div className="flex justify-between items-center">
							<span>New This Month</span>
							<span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">12</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Users; 