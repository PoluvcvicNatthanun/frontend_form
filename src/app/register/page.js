"use client";
import React from 'react'
import { useState } from "react";
export default function Register() {
     const [form, setForm] = useState({
        txt_firstname: "",
        txt_lastname: "",
        txt_username: "",
        txt_password: ""
   });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form.txt_firstname);
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md border">
       
        {/* Header */}
        <div className="border-b px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">
            ฟอร์มสมัครสมาชิก
          </h1>
        </div>
        <form className="p-6 space-y-5" onSubmit={handleSubmit}>
            <label className="text-black">กรุณาระบุ_ชื่อ {form.txt_firstname}</label>
            <input type="text" name='txt_firstname' onChange={handleChange} className="w-full border text-black border-black rounded-md px-4 py-2" placeholder="Firstname" value={form.txt_firstname} onChange={handleChange}/>
            <label className="text-black">กรุณาระบุ_นามสกุล {form.txt_lastname}</label>
            <input type="text" name='txt_lastname' onChange={handleChange} className="w-full border text-black border-black rounded-md px-4 py-2" placeholder="Lastname" value={form.txt_lastname} onChange={handleChange}/>
            <label className="text-black">กรุณาระบุ_  Username {form.txt_username}</label>
            <input type="text" name='txt_username' onChange={handleChange} className="w-full border text-black border-black rounded-md px-4 py-2" placeholder="Username" value={form.txt_username} onChange={handleChange}/>
            <label className="text-black">กรุณาระบุ_Password {form.txt_password}</label>
            <input type="password" name='txt_password' onChange={handleChange} className="w-full border text-black border-black rounded-md px-4 py-2" placeholder="Password" value={form.txt_password} onChange={handleChange}/>
            <button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              บันทึกข้อมูล
            </button>
          </form>
        </div>
      </div>
  )
}
