"use client";

import { Mail, Phone, User, Building2 } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    city: "",
    courseInterested: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Submitted successfully!");
    } else {
      alert("Failed to submit");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md">
        <div className="bg-green-400 rounded-xl p-6 mb-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Interested in Learning with Us?
          </h2>
        </div>

        <p className="text-center text-green-700 mb-8">
          Please share your information below, and we&apos;ll be in touch soon!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <User className="absolute left-3 top-2.5 h-5 w-5 text-green-500" />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-green-500" />
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="relative">
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={form.mobileNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <Phone className="absolute left-3 top-2.5 h-5 w-5 text-green-500" />
            </div>
          </div>

          {/* City */}
          <div className="space-y-2">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <div className="relative">
              <input
                type="text"
                id="city"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Enter your City*"
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <Building2 className="absolute left-3 top-2.5 h-5 w-5 text-green-500" />
            </div>
          </div>

          {/* Program */}
          <div className="space-y-2">
            <label htmlFor="courseInterested" className="block text-sm font-medium text-gray-700">
              Program of Interest
            </label>
            <input
              type="text"
              id="courseInterested"
              name="courseInterested"
              value={form.courseInterested}
              onChange={handleChange}
              placeholder="Enter program name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
