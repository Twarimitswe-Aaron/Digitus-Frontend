import React from "react";
import { Link } from "react-router-dom";
import { dummyTrainees } from "../data/dummyTrainees";

const Trainees: React.FC = () => {
	return (
		<div className="text-white">
			<h3 className="font-semibold mb-3">All Trainees</h3>
			<ul className="divide-y divide-white/10">
				{dummyTrainees.map(t => (
					<li key={t.id} className="py-3 flex items-center justify-between">
						<div>
							<p className="font-medium">{t.firstName} {t.secondName}</p>
							<p className="text-blue-100 text-sm">Age {t.age} • {t.city}, {t.address}</p>
						</div>
						<Link to={`/trainer/trainees/${t.id}`} className="px-3 py-1 rounded-md border border-white/30 hover:bg-white/10 cursor-pointer">View</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Trainees; 