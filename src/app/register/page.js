"use client";

import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";


export default function register() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(form);
    try {
      const response = await fetch("https://api.itdev.cmtc.ac.th/users", {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            firstname: form.txt_firstname,
            lastname: form.txt_lastname,
            sername: form.txt_username,
            password: form.txt_password
          }),
      });

      const result = await response.json();

      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: 'สมัครสมาชิกสำเร็จ(status: ${response.status})',
          text: `เพิ่มผู้ใช้งานเรียบร้อยแล้ว`,
          confirmButtonText: 'ตกลง',
          confirmButtonColor: '#3085d6',
        });

      } else if (response.status === 400) {
        await Swal.fire({
          icon: "warning",
          title: 'ข้อมูลไม่ถูกต้อง (status: ${response.status})',
          text: result.message || "เกิดข้อผิดพลาด",
          confirmButtonText: 'ตกลง',
          confirmButtonColor: '#fff700',
        });
      } else if (response.status === 500) {
        await Swal.fire({
          icon: "error",
          title: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์ (status: ${response.status})',
          text: result.message || "เกิดข้อผิดพลาด",
          confirmButtonText: 'ตกลง',
          confirmButtonColor: '#ff0000',
        });
      }  
      
      
      } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error);
        await Swal.fire({
          icon: "warning",
          title: 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้',
          text: 'กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตของคุณและลองใหม่อีกครั้ง',
          confirmButtonText: 'ตกลง',
          confirmButtonColor: '#ff0000',
        });
      }
    }
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
              defaultValue=""
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
              defaultValue=""
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
              defaultValue=""
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
              defaultValue=""
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