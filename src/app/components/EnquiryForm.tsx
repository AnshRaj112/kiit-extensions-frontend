"use client";

import { useState } from "react";

export default function EnquiryForm({ close }: { close: () => void }) {
  const [form, setForm] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    city: "",
    consent: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
      close();
    } else {
      alert("Failed to submit");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-[999] flex justify-center items-center">
      <div className="relative bg-white p-6 rounded-md w-80 shadow-lg space-y-4">
        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-red-600 font-bold text-lg">Enter Your Details & Get Free Counselling</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="fullName"
            onChange={handleChange}
            required
            placeholder="Full Name*"
            className="w-full border p-2 rounded"
          />
          <input
            name="mobileNumber"
            onChange={handleChange}
            required
            placeholder="Mobile Number*"
            className="w-full border p-2 rounded"
          />
          <input
            name="email"
            onChange={handleChange}
            required
            placeholder="Email*"
            className="w-full border p-2 rounded"
          />
          <input
            name="city"
            onChange={handleChange}
            required
            placeholder="Enter City*"
            className="w-full border p-2 rounded"
          />

          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
            />
            <span>I agree to get updates from Academic Counsellor</span>
          </label>

          <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
