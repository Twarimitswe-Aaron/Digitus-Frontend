import React from "react";

const Card: React.FC<{ title: string; children?: React.ReactNode }> = ({ title, children }) => (
	<div className="p-4 rounded-lg border border-white/20 bg-white/5">
		<h3 className="font-semibold mb-2">{title}</h3>
		{children}
	</div>
);

const SkeletonGraph: React.FC = () => (
	<div className="h-40 w-full rounded-md bg-gradient-to-r from-white/10 via-white/20 to-white/10 animate-pulse" />
);

const TrainerHome: React.FC = () => {
	return (
		<div className="space-y-6 text-white">
			<h3 className="font-semibold mb-3">Dashboard</h3>
			
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Upcoming Sessions</h4>
					<p className="text-2xl font-bold">12</p>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Assigned Communities</h4>
					<p className="text-2xl font-bold">8</p>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Attendance (Last 4 weeks)</h4>
					<p className="text-2xl font-bold">87%</p>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Average Progress</h4>
					<p className="text-2xl font-bold">73%</p>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Active Trainees</h4>
					<p className="text-2xl font-bold">45</p>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-2">Recent Activity</h4>
					<p className="text-sm text-blue-100">5 new registrations this week</p>
				</div>
			</div>
			
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">Attendance Graph</h4>
					<div className="h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-end justify-around p-4">
						<div className="w-8 bg-white/30 rounded-t"></div>
						<div className="w-8 bg-white/50 rounded-t" style={{height: '60%'}}></div>
						<div className="w-8 bg-white/70 rounded-t" style={{height: '80%'}}></div>
						<div className="w-8 bg-white/90 rounded-t" style={{height: '90%'}}></div>
						<div className="w-8 bg-white rounded-t" style={{height: '75%'}}></div>
					</div>
				</div>
				
				<div className="p-4 rounded-xl border border-white/20 bg-white/5">
					<h4 className="font-medium mb-4">Progress Overview</h4>
					<div className="space-y-3">
						<div className="flex justify-between">
							<span>Beginner Level</span>
							<span>15 trainees</span>
						</div>
						<div className="flex justify-between">
							<span>Intermediate</span>
							<span>22 trainees</span>
						</div>
						<div className="flex justify-between">
							<span>Advanced</span>
							<span>8 trainees</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TrainerHome; 