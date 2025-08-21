import React, { useMemo, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyTrainees } from "../data/dummyTrainees";

const inputClass = "w-full px-3 py-2 rounded-md bg-transparent border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/40";

type SavedTrainee = {
	profile: {
		firstName: string;
		secondName: string;
		age: number;
		city: string;
		address: string;
	};
	courses: Array<{ name: string; hours: string; progress: string; level: string }>;
	updatedAt: string;
};

type Overrides = Record<string, SavedTrainee>;

const STORAGE_KEY = "trainer:traineeOverrides";

const TraineeDetail: React.FC = () => {
	const { traineeId } = useParams();
	const navigate = useNavigate();

	const base = useMemo(() => dummyTrainees.find(t => t.id === traineeId) ?? { firstName: "", secondName: "", age: 0, city: "", address: "" }, [traineeId]);
	const [form, setForm] = useState({ ...base });
	const [course, setCourse] = useState({ name: "", hours: "", progress: "", level: "" });
	const [existingCourses, setExistingCourses] = useState<Array<{ name: string; hours: string; progress: string; level: string }>>([]);

	// preload saved data if exists
	useEffect(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (!raw || !traineeId) return;
			const overrides: Overrides = JSON.parse(raw);
			const saved = overrides[traineeId];
			if (saved) {
				setForm({ ...saved.profile });
				setExistingCourses(saved.courses ?? []);
			}
		} catch {}
	}, [traineeId]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

	const onSave = () => {
		if (!traineeId) return;
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			const overrides: Overrides = raw ? JSON.parse(raw) : {};
			const prevCourses = overrides[traineeId]?.courses ?? existingCourses;
			const newCourses = course.name ? [...prevCourses, { ...course }] : prevCourses;
			overrides[traineeId] = {
				profile: {
					firstName: form.firstName,
					secondName: form.secondName,
					age: Number(form.age) || 0,
					city: form.city,
					address: form.address,
				},
				courses: newCourses,
				updatedAt: new Date().toISOString(),
			};
			localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
			navigate("/trainer/trainees");
		} catch (e) {
			console.error("Failed saving trainee", e);
		}
	};

	const onClose = () => navigate("/trainer/trainees");

	return (
		<div className="space-y-6">
			<div className="flex items-start justify-between">
				<h3 className="font-semibold mb-3">Trainee Profile</h3>
				<div className="space-x-2">
					<button onClick={onClose} className="px-3 py-2 rounded-lg border border-white/30 hover:bg-white/10 cursor-pointer">Close</button>
					<button onClick={onSave} className="px-3 py-2 rounded-lg bg-white text-[#08083C] font-semibold cursor-pointer">Save</button>
				</div>
			</div>

			<div className="grid md:grid-cols-2 gap-4">
				<div>
					<label className="block mb-1 text-sm text-blue-100">First Name</label>
					<input className={inputClass} name="firstName" value={form.firstName} onChange={onChange} />
				</div>
				<div>
					<label className="block mb-1 text-sm text-blue-100">Second Name</label>
					<input className={inputClass} name="secondName" value={form.secondName} onChange={onChange} />
				</div>
				<div>
					<label className="block mb-1 text-sm text-blue-100">Age</label>
					<input className={inputClass} type="number" name="age" value={form.age} onChange={onChange} />
				</div>
				<div>
					<label className="block mb-1 text-sm text-blue-100">Address</label>
					<input className={inputClass} name="address" value={form.address} onChange={onChange} />
				</div>
				<div>
					<label className="block mb-1 text-sm text-blue-100">City</label>
					<input className={inputClass} name="city" value={form.city} onChange={onChange} />
				</div>
			</div>

			<div>
				<h3 className="font-semibold mb-3">Courses & Progress</h3>
				<div className="grid md:grid-cols-4 gap-4">
					<input className={inputClass} placeholder="Course name" value={course.name} onChange={e => setCourse({ ...course, name: e.target.value })} />
					<input className={inputClass} placeholder="Hours" value={course.hours} onChange={e => setCourse({ ...course, hours: e.target.value })} />
					<input className={inputClass} placeholder="Progress %" value={course.progress} onChange={e => setCourse({ ...course, progress: e.target.value })} />
					<input className={inputClass} placeholder="Level (e.g. Beginner)" value={course.level} onChange={e => setCourse({ ...course, level: e.target.value })} />
				</div>
				{existingCourses.length > 0 && (
					<div className="mt-4">
						<h4 className="font-medium mb-2">Existing Courses</h4>
						<ul className="list-disc list-inside text-blue-100 space-y-1">
							{existingCourses.map((c, i) => (
								<li key={i}>{c.name} — {c.hours}h — {c.progress}% — {c.level}</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default TraineeDetail; 