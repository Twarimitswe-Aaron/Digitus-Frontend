import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, MousePointerClick, BookOpen, ShieldCheck, Wifi, Users } from 'lucide-react'

const Problem: React.FC = () => {
	return (
		<section id="problem" className="section-padding bg-white ">
			<div className="container-max">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="mx-auto max-w-4xl"
				>
					

					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
						A World Left Behind
					</h2>
					<p className="text-xl text-gray-600  leading-relaxed">
						Millions of people remain cut off from opportunities because they lack basic digital skills. From applying for jobs online to accessing government services, digital illiteracy creates barriers that widen inequality.
					</p>

					


				</motion.div>
			</div>
		</section>
	)
}

export default Problem
