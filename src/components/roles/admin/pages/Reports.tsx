import React from "react";

const Reports: React.FC = () => {
	// Dummy data for system-wide metrics
	const systemMetrics = [
		{ month: "Jan", learners: 2100, hubs: 18, trainers: 65, satisfaction: 89 },
		{ month: "Feb", learners: 2250, hubs: 20, trainers: 72, satisfaction: 91 },
		{ month: "Mar", learners: 2400, hubs: 22, trainers: 78, satisfaction: 93 },
		{ month: "Apr", learners: 2550, hubs: 23, trainers: 82, satisfaction: 92 },
		{ month: "May", learners: 2700, hubs: 24, trainers: 85, satisfaction: 94 },
		{ month: "Jun", learners: 2847, hubs: 25, trainers: 89, satisfaction: 95 },
	];

	return (
		<div className="space-y-6 text-white">
			<div className="flex justify-between items-center">
				<h3 className="font-semibold mb-3">System-Wide Reports</h3>
				<div className="flex space-x-2">
					<button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors">
						Export PDF
					</button>
					<button className="px-4 py-2 bg-white text-[#08083C] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
						Generate Report
					</button>
				</div>
			</div>

			{/* System Overview Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Total Learners</h4>
					<p className="text-2xl font-bold">2,847</p>
					<p className="text-sm text-green-300">+147 this month</p>
				</div>
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Active Hubs</h4>
					<p className="text-2xl font-bold">25</p>
					<p className="text-sm text-blue-300">+1 this month</p>
				</div>
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Active Trainers</h4>
					<p className="text-2xl font-bold">89</p>
					<p className="text-sm text-purple-300">+4 this month</p>
				</div>
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">System Satisfaction</h4>
					<p className="text-2xl font-bold">95%</p>
					<p className="text-sm text-yellow-300">+2% improvement</p>
				</div>
			</div>

			{/* Performance Charts */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">Learner Growth Trend</h4>
					<div className="h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-end justify-around p-4">
						{systemMetrics.map((data, index) => (
							<div key={index} className="flex flex-col items-center">
								<div 
									className="w-8 bg-white rounded-t" 
									style={{height: `${(data.learners / 3000) * 100}%`}}
								></div>
								<span className="text-xs mt-1">{data.month}</span>
							</div>
						))}
					</div>
					<p className="text-sm text-blue-100 mt-2">Learner count over 6 months</p>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">Hub & Trainer Growth</h4>
					<div className="h-32 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg flex items-end justify-around p-4">
						{systemMetrics.map((data, index) => (
							<div key={index} className="flex flex-col items-center">
								<div 
									className="w-8 bg-white rounded-t" 
									style={{height: `${(data.hubs / 30) * 100}%`}}
								></div>
								<span className="text-xs mt-1">{data.month}</span>
							</div>
						))}
					</div>
					<p className="text-sm text-blue-100 mt-2">Hub count growth trend</p>
				</div>
			</div>

			{/* Detailed Performance Table */}
			<div className="rounded-xl border border-white/20 bg-white/5 overflow-hidden">
				<div className="p-4 border-b border-white/10">
					<h4 className="font-medium">Monthly System Performance</h4>
				</div>
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead className="bg-white/10">
							<tr>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Month</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Total Learners</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Active Hubs</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Active Trainers</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Satisfaction %</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Growth Rate</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-white/10">
							{systemMetrics.map((data, index) => (
								<tr key={index} className="hover:bg-white/5">
									<td className="px-6 py-4 font-medium">{data.month}</td>
									<td className="px-6 py-4">{data.learners.toLocaleString()}</td>
									<td className="px-6 py-4">{data.hubs}</td>
									<td className="px-6 py-4">{data.trainers}</td>
									<td className="px-6 py-4">
										<span className={`px-2 py-1 rounded-full text-xs font-medium ${
											data.satisfaction >= 95 ? 'bg-green-500/20 text-green-300' :
											data.satisfaction >= 90 ? 'bg-blue-500/20 text-blue-300' :
											'bg-yellow-500/20 text-yellow-300'
										}`}>
											{data.satisfaction}%
										</span>
									</td>
									<td className="px-6 py-4">
										<span className={`px-2 py-1 rounded-full text-xs font-medium ${
											index === systemMetrics.length - 1 ? 'bg-green-500/20 text-green-300' :
											'bg-blue-500/20 text-blue-300'
										}`}>
											{index === systemMetrics.length - 1 ? 'Current' : 'Historical'}
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			{/* Regional Performance */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">Regional Performance</h4>
					<div className="space-y-3">
						<div className="flex justify-between items-center">
							<span>Kigali Region</span>
							<span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-sm">1,247 learners</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Eastern Province</span>
							<span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">892 learners</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Western Province</span>
							<span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">708 learners</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Southern Province</span>
							<span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-sm">0 learners</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Northern Province</span>
							<span className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-sm">0 learners</span>
						</div>
					</div>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">System Health Metrics</h4>
					<div className="space-y-3">
						<div className="flex justify-between items-center">
							<span>System Uptime</span>
							<span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-sm">99.8%</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Average Response Time</span>
							<span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">1.2s</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Data Backup Status</span>
							<span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-sm">Up to date</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Security Status</span>
							<span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-sm">Secure</span>
						</div>
						<div className="flex justify-between items-center">
							<span>API Performance</span>
							<span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-sm">Good</span>
						</div>
					</div>
				</div>
			</div>

			{/* Report Types */}
			<div className="p-4 rounded-xl border border-white/20 bg-white/5">
				<h4 className="font-medium mb-4">Available Reports</h4>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<button className="p-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
						📊 Monthly Performance Report
					</button>
					<button className="p-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
						👥 User Activity Report
					</button>
					<button className="p-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
						🏢 Hub Performance Report
					</button>
					<button className="p-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
						📈 Growth Analytics Report
					</button>
					<button className="p-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
						🔧 System Health Report
					</button>
					<button className="p-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
						📋 Financial Summary Report
					</button>
				</div>
			</div>

			{/* Export Options */}
			<div className="p-4 rounded-xl border border-white/20 bg-white/5">
				<h4 className="font-medium mb-4">Export Options</h4>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
					<button className="p-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
						📄 Export as PDF
					</button>
					<button className="p-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
						📊 Export as Excel
					</button>
					<button className="p-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
						📈 Export as CSV
					</button>
					<button className="p-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
						🖨️ Print Report
					</button>
				</div>
			</div>
		</div>
	);
};

export default Reports; 