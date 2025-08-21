import React from "react";

type RoleLayoutProps = {
	children: React.ReactNode;
	title?: string;
	description?: string;
};

const RoleLayout: React.FC<RoleLayoutProps> = ({ children, title, description }) => {
	return (
		<section className="min-h-[calc(100vh-6rem)] bg-[#08083C]/90 backdrop-blur-xl text-white">
			<div className="container-max section-padding">
				{/* Header */}
				<div className="mb-8">
					<h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
					{description && (
						<p className="text-blue-100 mt-2 max-w-2xl">{description}</p>
					)}
				</div>

				{/* Content Card */}
				<div className="backdrop-blur-xl rounded-xl p-6 border border-white/20 bg-white/5">
					{children}
				</div>
			</div>
		</section>
	);
};

export default RoleLayout; 