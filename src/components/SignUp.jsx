import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, password } = formData;

    if (!fullName || !email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("Account created!");
    console.log("Form submitted:", formData);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4 py-10">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-6xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Section */}
        <div className="flex items-center justify-center">
          <img
            src="login_Register.jpeg"
            alt="Register"
            className="w-full h-auto object-contain max-h-[500px]"
          />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-8 md:p-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Create Account</h3>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <span
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(prev => !prev)}
              >
                {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
              </span>
            </div>

            <label className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" className="mt-1 accent-indigo-600" />
              <span>
                I agree to the{' '}
                <Link to="/" className="text-indigo-600 underline">terms of service</Link> and{' '}
                <Link to="/" className="text-indigo-600 underline">privacy policy</Link>.
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-sm hover:bg-indigo-700 transition cursor-pointer"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">Or Sign Up With</div>

          <div className="flex justify-center gap-6 mt-4">
            <button className="hover:scale-105 transition cursor-pointer">
              <img src="google.png" alt="Google" className="w-6 h-6" />
            </button>
            <button className="hover:scale-105 transition cursor-pointer">
              <img src="twitter.png" alt="Twitter" className="w-6 h-6" />
            </button>
            <button className="hover:scale-105 transition cursor-pointer">
              <img src="facebook.png" alt="Facebook" className="w-6 h-6" />
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-600 font-medium hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
