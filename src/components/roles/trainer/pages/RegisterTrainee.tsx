import React, { useState } from "react";

const RegisterTrainee: React.FC = () => {
	const [form, setForm] = useState({
		firstName: "",
		secondName: "",
		age: "",
		address: "",
		city: ""
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Registering trainee:", form);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};

	return (
		<div className="max-w-md mx-auto text-white">
			<h3 className="font-semibold mb-6">Register New Trainee</h3>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label className="block mb-1 text-sm text-blue-100">First Name</label>
					<input
						type="text"
						name="firstName"
						value={form.firstName}
						onChange={handleChange}
						className="w-full px-3 py-2 rounded-md bg-transparent border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/40"
						required
					/>
				</div>
				<div>
					<label className="block mb-1 text-sm text-blue-100">Second Name</label>
					<input
						type="text"
						name="secondName"
						value={form.secondName}
						onChange={handleChange}
						className="w-full px-3 py-2 rounded-md bg-transparent border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/40"
						required
					/>
				</div>
				<div>
					<label className="block mb-1 text-sm text-blue-100">Age</label>
					<input
						type="number"
						name="age"
						value={form.age}
						onChange={handleChange}
						className="w-full px-3 py-2 rounded-md bg-transparent border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/40"
						required
					/>
				</div>
				<div>
					<label className="block mb-1 text-sm text-blue-100">Address</label>
					<input
						type="text"
						name="address"
						value={form.address}
						onChange={handleChange}
						className="w-full px-3 py-2 rounded-md bg-transparent border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/40"
						required
					/>
				</div>
				<div>
					<label className="block mb-1 text-sm text-blue-100">City</label>
					<input
						type="text"
						name="city"
						value={form.city}
						onChange={handleChange}
						className="w-full px-3 py-2 rounded-md bg-transparent border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/40"
						required
					/>
				</div>
				<button
					type="submit"
					className="w-full px-4 py-2 bg-white text-[#08083C] font-semibold rounded-lg hover:bg-gray-100 cursor-pointer"
				>
					Register
				</button>
			</form>
		</div>
	);
};

export default RegisterTrainee; 