import React from "react";

const AdminHome: React.FC = () => {
	return (
		<div className="space-y-6 text-white">
			<h3 className="font-semibold mb-3">Global Overview</h3>
			
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Total Learners Reached</h4>
					<p className="text-2xl font-bold">2,847</p>
					<p className="text-sm text-green-300">+156 this month</p>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Active Hubs</h4>
					<p className="text-2xl font-bold">25</p>
					<p className="text-sm text-blue-300">3 new this quarter</p>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Active Trainers</h4>
					<p className="text-2xl font-bold">89</p>
					<p className="text-sm text-purple-300">12 new this month</p>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Hub Managers</h4>
					<p className="text-2xl font-bold">25</p>
					<p className="text-sm text-yellow-300">All hubs covered</p>
				</div>
			</div>
			
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">System Growth Trend</h4>
					<div className="h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-end justify-around p-4">
						<div className="flex flex-col items-center">
							<div className="w-8 bg-white/30 rounded-t" style={{height: '60%'}}></div>
							<span className="text-xs mt-1">Jan</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-8 bg-white/50 rounded-t" style={{height: '70%'}}></div>
							<span className="text-xs mt-1">Feb</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-8 bg-white/70 rounded-t" style={{height: '80%'}}></div>
							<span className="text-xs mt-1">Mar</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-8 bg-white/90 rounded-t" style={{height: '85%'}}></div>
							<span className="text-xs mt-1">Apr</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-8 bg-white rounded-t" style={{height: '90%'}}></div>
							<span className="text-xs mt-1">May</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-8 bg-white rounded-t" style={{height: '95%'}}></div>
							<span className="text-xs mt-1">Jun</span>
						</div>
					</div>
					<p className="text-sm text-blue-100 mt-2">Learner growth over 6 months</p>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">Hub Performance Overview</h4>
					<div className="space-y-3">
						<div className="flex justify-between items-center">
							<span>Top Performing Hub</span>
							<span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-sm">Kigali Central</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Average Attendance</span>
							<span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">87%</span>
						</div>
						<div className="flex justify-between items-center">
							<span>System Uptime</span>
							<span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-sm">99.8%</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Active Sessions</span>
							<span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">156</span>
						</div>
					</div>
				</div>
			</div>
			
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">Recent System Activities</h4>
					<div className="space-y-3">
						<div className="flex justify-between items-start">
							<div>
								<p className="font-medium">New Hub Created</p>
								<p className="text-sm text-blue-100">Kigali West Hub - 2 hours ago</p>
							</div>
							<span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Completed</span>
						</div>
						<div className="flex justify-between items-start">
							<div>
								<p className="font-medium">Trainer Registration</p>
								<p className="text-sm text-blue-100">Sarah Johnson - 4 hours ago</p>
							</div>
							<span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Pending</span>
						</div>
						<div className="flex justify-between items-start">
							<div>
								<p className="font-medium">System Maintenance</p>
								<p className="text-sm text-blue-100">Database update - 6 hours ago</p>
							</div>
							<span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Completed</span>
						</div>
						<div className="flex justify-between items-start">
							<div>
								<p className="font-medium">New Report Generated</p>
								<p className="text-sm text-blue-100">Monthly performance - 1 day ago</p>
							</div>
							<span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Available</span>
						</div>
					</div>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">Quick Actions</h4>
					<div className="space-y-3">
						<button className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
							🏢 Create New Hub
						</button>
						<button className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
							👥 Add New User
						</button>
						<button className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
							📊 Generate System Report
						</button>
						<button className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
							⚙️ System Settings
						</button>
					</div>
				</div>
			</div>

			{/* Regional Overview */}
			<div className="p-4 rounded-xl border border-white/20 bg-white/5">
				<h4 className="font-medium mb-4">Regional Overview</h4>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div className="text-center p-3 bg-white/5 rounded-lg">
						<h5 className="font-medium mb-2">Kigali Region</h5>
						<p className="text-2xl font-bold text-green-300">1,247</p>
						<p className="text-sm text-blue-100">8 hubs, 45 trainers</p>
					</div>
					<div className="text-center p-3 bg-white/5 rounded-lg">
						<h5 className="font-medium mb-2">Eastern Province</h5>
						<p className="text-2xl font-bold text-blue-300">892</p>
						<p className="text-sm text-blue-100">6 hubs, 28 trainers</p>
					</div>
					<div className="text-center p-3 bg-white/5 rounded-lg">
						<h5 className="font-medium mb-2">Western Province</h5>
						<p className="text-2xl font-bold text-purple-300">708</p>
						<p className="text-sm text-blue-100">5 hubs, 16 trainers</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminHome; 