import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          
          {/* Back Button */}
          <button
            onClick={() => navigate('/')} 
            className="flex items-center cursor-pointer text-[#08083C] mb-6 hover:text-[#08083C]/80 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
           
          </button>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#08083C] mb-2">Welcome Back</h1>
            <p className="text-gray-600">Please sign in to your account</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white/70 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg p-8 space-y-6"
          >
            {/* Email Input */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-[#08083C] mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md py-3 pl-12 pr-4 bg-transparent backdrop-blur-sm focus:border-[#08083C] focus:outline-none focus:ring-2 focus:ring-[#08083C]/20 transition-all duration-200 placeholder-gray-500"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-[#08083C] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-md py-3 pl-12 pr-12 bg-transparent backdrop-blur-sm focus:border-[#08083C] focus:outline-none focus:ring-2 focus:ring-[#08083C]/20 transition-all duration-200 placeholder-gray-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#08083C] transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-[#08083C] focus:ring-[#08083C]/20 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-[#08083C] hover:text-[#08083C]/80 transition-colors duration-200">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full cursor-pointer bg-[#08083C] text-white py-3 rounded-md hover:bg-[#08083C]/90 focus:outline-none focus:ring-2 focus:ring-[#08083C]/20 transition-all duration-200 font-medium backdrop-blur-sm"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Video (only on large screens) */}
      <div className="hidden lg:flex flex-1 relative">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Blender.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 bg-[#08083C]/20 flex items-center justify-center p-12">
          <div className="text-center text-white max-w-lg">
            <h2 className="text-3xl font-bold mb-4 text-[#08083C] ">Become a Volunteer Trainer</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Share your skills, inspire others, and make an impact by training as a volunteer. 
              Join our mission to empower learners and create meaningful change through education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
