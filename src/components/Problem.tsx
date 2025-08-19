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
					className="mx-auto max-w-6xl"
				>
					<div className=" items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900  mb-6 text-center mb-20">
								A World Left Behind
							</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 '>
            <div className='flex flex-col justify-center items-center'>
							
              <p className="text-xl text-gray-600  leading-relaxed mb-4">
								Millions of people remain cut off from opportunities because they lack basic digital skills. From applying for jobs online to accessing government services, digital illiteracy creates barriers that widen inequality.
							</p>
							<p className='text-xl text-gray-600  leading-relaxed'>This is not just a challenge—it’s a call to action. And that’s where we come in.</p>
              
							
						</div>
            <div>
            <div className="relative overflow-hidden rounded-xl shadow-lg w-130">
							<img
								src="../../img/problemBlack.jpg"
								alt="Bridging the digital divide"
								className=" h-80 lg:h-90 object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
						</div>
            </div>
            

            </div>
						
						
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default Problem
