import React from "react";

const HubManagerHome: React.FC = () => {
	return (
		<div className="space-y-6 text-white">
			<h3 className="font-semibold mb-3">Hub Overview</h3>
			
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Total Trainees</h4>
					<p className="text-2xl font-bold">156</p>
					<p className="text-sm text-blue-100">+12 this month</p>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Active Trainers</h4>
					<p className="text-2xl font-bold">8</p>
					<p className="text-sm text-blue-100">2 on leave</p>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Upcoming Events</h4>
					<p className="text-2xl font-bold">5</p>
					<p className="text-sm text-blue-100">Next: Tech Workshop</p>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Device Utilization</h4>
					<p className="text-2xl font-bold">78%</p>
					<p className="text-sm text-blue-100">12/15 devices active</p>
				</div>
			</div>
			
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">Hub Activity Chart</h4>
					<div className="h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-end justify-around p-4">
						<div className="w-8 bg-white/30 rounded-t"></div>
						<div className="w-8 bg-white/50 rounded-t" style={{height: '70%'}}></div>
						<div className="w-8 bg-white/70 rounded-t" style={{height: '85%'}}></div>
						<div className="w-8 bg-white/90 rounded-t" style={{height: '95%'}}></div>
						<div className="w-8 bg-white rounded-t" style={{height: '80%'}}></div>
					</div>
					<p className="text-sm text-blue-100 mt-2">Weekly trainee attendance</p>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">Resource Status</h4>
					<div className="space-y-3">
						<div className="flex justify-between items-center">
							<span>Internet Connection</span>
							<span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-sm">Online</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Devices Available</span>
							<span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">12/15</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Support Requests</span>
							<span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-sm">3 pending</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Maintenance Due</span>
							<span className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-sm">2 devices</span>
						</div>
					</div>
				</div>
			</div>
			
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">Recent Events</h4>
					<div className="space-y-3">
						<div className="flex justify-between items-start">
							<div>
								<p className="font-medium">Digital Literacy Workshop</p>
								<p className="text-sm text-blue-100">Tomorrow, 10:00 AM</p>
							</div>
							<span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">25 registered</span>
						</div>
						<div className="flex justify-between items-start">
							<div>
								<p className="font-medium">Smartphone Basics</p>
								<p className="text-sm text-blue-100">Thursday, 2:00 PM</p>
							</div>
							<span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">18 registered</span>
						</div>
						<div className="flex justify-between items-start">
							<div>
								<p className="font-medium">Online Safety Training</p>
								<p className="text-sm text-blue-100">Friday, 11:00 AM</p>
							</div>
							<span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">12 registered</span>
						</div>
					</div>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">Quick Actions</h4>
					<div className="space-y-3">
						<button className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
							📊 Generate Monthly Report
						</button>
						<button className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
							🔧 Request Device Maintenance
						</button>
						<button className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
							📅 Schedule New Event
						</button>
						<button className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
							👥 Assign Trainer to Session
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HubManagerHome; 