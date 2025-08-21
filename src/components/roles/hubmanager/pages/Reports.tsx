import React from "react";

const Reports: React.FC = () => {
	// Dummy data for performance metrics
	const performanceData = [
		{ month: "Jan", trainees: 145, attendance: 87, events: 12, satisfaction: 92 },
		{ month: "Feb", trainees: 152, attendance: 89, events: 15, satisfaction: 94 },
		{ month: "Mar", trainees: 148, attendance: 91, events: 18, satisfaction: 96 },
		{ month: "Apr", trainees: 156, attendance: 88, events: 14, satisfaction: 93 },
		{ month: "May", trainees: 162, attendance: 90, events: 16, satisfaction: 95 },
		{ month: "Jun", trainees: 158, attendance: 92, events: 20, satisfaction: 97 },
	];

	return (
		<div className="space-y-6 text-white">
			<div className="flex justify-between items-center">
				<h3 className="font-semibold mb-3">Hub Performance Reports</h3>
				<div className="flex space-x-2">
					<button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors">
						Export PDF
					</button>
					<button className="px-4 py-2 bg-white text-[#08083C] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
						Generate Report
					</button>
				</div>
			</div>

			{/* Key Performance Indicators */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Total Trainees</h4>
					<p className="text-2xl font-bold">156</p>
					<p className="text-sm text-green-300">+8% from last month</p>
				</div>
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Average Attendance</h4>
					<p className="text-2xl font-bold">89%</p>
					<p className="text-sm text-blue-300">+2% improvement</p>
				</div>
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Events Conducted</h4>
					<p className="text-2xl font-bold">20</p>
					<p className="text-sm text-purple-300">This month</p>
				</div>
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Satisfaction Rate</h4>
					<p className="text-2xl font-bold">95%</p>
					<p className="text-sm text-yellow-300">Excellent feedback</p>
				</div>
			</div>

			{/* Performance Charts */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">Monthly Trainee Growth</h4>
					<div className="h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-end justify-around p-4">
						{performanceData.map((data, index) => (
							<div key={index} className="flex flex-col items-center">
								<div 
									className="w-8 bg-white rounded-t" 
									style={{height: `${(data.trainees / 200) * 100}%`}}
								></div>
								<span className="text-xs mt-1">{data.month}</span>
							</div>
						))}
					</div>
					<p className="text-sm text-blue-100 mt-2">Trainee count over 6 months</p>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">Attendance Trend</h4>
					<div className="h-32 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg flex items-end justify-around p-4">
						{performanceData.map((data, index) => (
							<div key={index} className="flex flex-col items-center">
								<div 
									className="w-8 bg-white rounded-t" 
									style={{height: `${data.attendance}%`}}
								></div>
								<span className="text-xs mt-1">{data.month}</span>
							</div>
						))}
					</div>
					<p className="text-sm text-blue-100 mt-2">Attendance percentage trend</p>
				</div>
			</div>

			{/* Detailed Performance Table */}
			<div className="rounded-xl border border-white/20 bg-white/5 overflow-hidden">
				<div className="p-4 border-b border-white/10">
					<h4 className="font-medium">Monthly Performance Breakdown</h4>
				</div>
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead className="bg-white/10">
							<tr>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Month</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Total Trainees</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Attendance %</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Events</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Satisfaction %</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-white">Performance</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-white/10">
							{performanceData.map((data, index) => (
								<tr key={index} className="hover:bg-white/5">
									<td className="px-6 py-4 font-medium">{data.month}</td>
									<td className="px-6 py-4">{data.trainees}</td>
									<td className="px-6 py-4">
										<span className={`px-2 py-1 rounded-full text-xs font-medium ${
											data.attendance >= 90 ? 'bg-green-500/20 text-green-300' :
											data.attendance >= 80 ? 'bg-blue-500/20 text-blue-300' :
											'bg-yellow-500/20 text-yellow-300'
										}`}>
											{data.attendance}%
										</span>
									</td>
									<td className="px-6 py-4">{data.events}</td>
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
											index === performanceData.length - 1 ? 'bg-green-500/20 text-green-300' :
											'bg-blue-500/20 text-blue-300'
										}`}>
											{index === performanceData.length - 1 ? 'Current' : 'Historical'}
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			{/* Additional Metrics */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">Top Performing Areas</h4>
					<div className="space-y-3">
						<div className="flex justify-between items-center">
							<span>Digital Literacy</span>
							<span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-sm">96% success</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Smartphone Training</span>
							<span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">92% success</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Online Safety</span>
							<span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">89% success</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Social Media</span>
							<span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-sm">85% success</span>
						</div>
					</div>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">Resource Utilization</h4>
					<div className="space-y-3">
						<div className="flex justify-between items-center">
							<span>Device Usage</span>
							<span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-sm">78%</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Internet Bandwidth</span>
							<span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">65%</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Training Space</span>
							<span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">82%</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Support Staff</span>
							<span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-sm">90%</span>
						</div>
					</div>
				</div>
			</div>

			{/* Report Actions */}
			<div className="p-4 rounded-xl border border-white/20 bg-white/5">
				<h4 className="font-medium mb-4">Report Actions</h4>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<button className="p-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
						📊 Generate Monthly Report
					</button>
					<button className="p-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
						📈 Performance Analytics
					</button>
					<button className="p-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-left">
						📋 Export Data
					</button>
				</div>
			</div>
		</div>
	);
};

export default Reports; 