"use client";

import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EnquiryForm({ close }: { close: () => void }) {
  const [form, setForm] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    city: "",
    courseInterested: "",
    consent: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(0); // in seconds

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setInterval(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [cooldown]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    if (cooldown > 0) return;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cooldown > 0) {
      toast.error("Please wait before submitting again.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Submitted successfully!");
        setForm({
          fullName: "",
          mobileNumber: "",
          email: "",
          city: "",
          courseInterested: "",
          consent: true,
        });
        setCooldown(120); // 2 minutes
        setTimeout(() => {
          close();
        }, 1000);
      } else {
        toast.error("Failed to submit. Please try again.");
      }
    } catch {
      toast.error("An error occurred. Please try later.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-[999] flex justify-center items-center">
      <ToastContainer />
      <div className="relative bg-white p-6 rounded-md w-[400px] shadow-lg space-y-6">
        <button
          onClick={close}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-green-700 font-bold text-2xl text-center">
          Enter Your Details & Get Free Counselling
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
            disabled={cooldown > 0}
            placeholder="Full Name*"
            className="w-full border p-3 rounded disabled:opacity-50"
          />
          <input
            name="mobileNumber"
            value={form.mobileNumber}
            onChange={handleChange}
            required
            disabled={cooldown > 0}
            placeholder="Mobile Number*"
            className="w-full border p-3 rounded disabled:opacity-50"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            disabled={cooldown > 0}
            placeholder="Email*"
            className="w-full border p-3 rounded disabled:opacity-50"
          />
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            required
            disabled={cooldown > 0}
            placeholder="Enter City*"
            className="w-full border p-3 rounded disabled:opacity-50"
          />
          <input
            name="courseInterested"
            value={form.courseInterested}
            onChange={handleChange}
            required
            disabled={cooldown > 0}
            placeholder="Enter Course You are Interested In*"
            className="w-full border p-3 rounded disabled:opacity-50"
          />

          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
              disabled={cooldown > 0}
            />
            <span>I agree to get updates from Academic Counsellor</span>
          </label>

          <button
            type="submit"
            disabled={isSubmitting || cooldown > 0}
            className="bg-gradient-to-r from-[#0097b2] to-[#7ed952] text-white px-6 py-3 rounded w-full disabled:opacity-60 font-semibold"
          >
            {cooldown > 0
              ? `Wait ${cooldown}s`
              : isSubmitting
              ? "Submitting..."
              : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
