import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Search, Bell, User } from "lucide-react";

const AdminLayout: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="flex h-full overflow-hidden">
			{/* Sidebar */}
			<aside className="fixed left-0 top-0 h-screen w-64 p-4 border-r border-white/20 bg-[#08083C]/80 backdrop-blur-xl z-10">
				<div className="mb-4">
					<NavLink to="/admin" className="block px-3 py-2 rounded-lg text-white font-extrabold text-xl tracking-wide">
						Digitus
					</NavLink>
				</div>
				<nav>
					<ul className="space-y-2">
						<li>
							<NavLink to="/admin" end className={({ isActive }) => `block px-3 py-2 rounded-lg font-bold ${isActive ? 'bg-white text-[#08083C]' : 'text-white hover:bg-white/10 border border-white/10'}`}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/admin/users" className={({ isActive }) => `block px-3 py-2 rounded-lg font-bold ${isActive ? 'bg-white text-[#08083C]' : 'text-white hover:bg-white/10 border border-white/10'}`}>
								Users
							</NavLink>
						</li>
						<li>
							<NavLink to="/admin/hubs" className={({ isActive }) => `block px-3 py-2 rounded-lg font-bold ${isActive ? 'bg-white text-[#08083C]' : 'text-white hover:bg-white/10 border border-white/10'}`}>
								Hubs
							</NavLink>
						</li>
						<li>
							<NavLink to="/admin/reports" className={({ isActive }) => `block px-3 py-2 rounded-lg font-bold ${isActive ? 'bg-white text-[#08083C]' : 'text-white hover:bg-white/10 border border-white/10'}`}>
								Reports
							</NavLink>
						</li>
					</ul>
				</nav>
				<button onClick={() => navigate('/login')} className="mt-4 w-full px-3 py-2 rounded-lg border border-white/20 hover:bg-white/10 cursor-pointer text-white font-bold">
					Logout
				</button>
			</aside>

			{/* Main Content Area */}
			<div className="ml-64 flex-1 flex flex-col">
				{/* Header */}
				<header className="h-16 bg-[#08083C]/60 backdrop-blur-xl border-b border-white/20 flex items-center justify-between px-6">
					{/* Search Bar */}
					<div className="flex-1 max-w-md">
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
							<input
								type="text"
								placeholder="Search users, hubs, reports..."
								className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
							/>
						</div>
					</div>
					
					{/* Right side - Notifications and Profile */}
					<div className="flex items-center space-x-4">
						{/* Notification Icon */}
						<button className="relative p-2 rounded-lg hover:bg-white/10 transition-colors">
							<Bell className="w-5 h-5 text-white" />
							<span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">8</span>
						</button>
						
						{/* Profile */}
						<button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 transition-colors">
							<div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
								<User className="w-4 h-4 text-white" />
							</div>
							<span className="text-white font-medium">Admin</span>
						</button>
					</div>
				</header>

				{/* Content */}
				<section className="flex-1 p-6 overflow-y-auto bg-[#08083C]/60 backdrop-blur-xl">
					<Outlet />
				</section>
			</div>
		</div>
	);
};

export default AdminLayout; 