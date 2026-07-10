"use client";

import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    txt_firstname: "",
    txt_lastname: "",
    txt_username: "",
    txt_password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-8">
          <h1 className="text-4xl font-bold">
            สมัครสมาชิก
          </h1>
          <p className="mt-2 text-blue-100">
            กรอกข้อมูลเพื่อสร้างบัญชีผู้ใช้งาน
          </p>
        </div>

        {/* Form */}
        <form className="p-8 space-y-5" onSubmit={handleSubmit}>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              ชื่อ
            </label>
            <input
              type="text"
              name="txt_firstname"
              value={form.txt_firstname}
              onChange={handleChange}
              placeholder="กรอกชื่อ"
              className="w-full px-4 py-3 border rounded-xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-200 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              นามสกุล
            </label>
            <input
              type="text"
              name="txt_lastname"
              value={form.txt_lastname}
              onChange={handleChange}
              placeholder="กรอกนามสกุล"
              className="w-full px-4 py-3 border rounded-xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-200 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              name="txt_username"
              value={form.txt_username}
              onChange={handleChange}
              placeholder="กรอก Username"
              className="w-full px-4 py-3 border rounded-xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-200 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="txt_password"
              value={form.txt_password}
              onChange={handleChange}
              placeholder="กรอก Password"
              className="w-full px-4 py-3 border rounded-xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-200 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg shadow-lg hover:scale-[1.02] hover:shadow-xl transition duration-300"
          >
            สมัครสมาชิก
          </button>
        </form>
      </div>
    </div>
  );
}