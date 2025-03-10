import React, { useEffect, useState } from "react"
import Container from "react-bootstrap/esm/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login_Tailwind_css from "./Login_Tailwind_css";
import User from "./User";
import '../index.css';
import { useNavigate } from "react-router-dom";

const Dashboard1 = () => {

    const navigate = useNavigate();

    return (
        <Container fluid className="bg-gray-100 vw-100 vh-full p-0 ">

            {/* Navbar */}
            <Container fluid className="h-16 flex justify-between bg-white z-2 px-4 py-2 fixed top-0 w-full">

                <div className="w-full md:w-200 lg:w-600 mx-60 relative items-center md:justify-start flex">
                    <input type='text' placeholder='Search' className="form-control placeholder-[#9933ff]" style={{ color: "#9933ff" }}></input>
                    <img
                        src="https://cdn-icons-png.freepik.com/512/3642/3642037.png"
                        className="h-5 w-5 absolute top-4 right-2"
                        alt="search-img"
                    ></img>
                </div>
                <Container className="justify-end flex items-center">
                    <div className="item-center ms-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/7153/7153150.png" alt="user" className="h-8 w-8 ml-[5px] cursor-pointer"
                            onClick={() => window.location.replace("/Login")}>

                        </img>
                        <h5 className="text-[#6600cc]">Ragul</h5>
                    </div>
                </Container>
            </Container>
            <hr className="border-2 border-red-200 dark:border-red-700 w-full m-0 p-0 z-4 top-15 absolute fixed" />

            {/* Sidebar */}
            <div className="flex flex-col items-start w-48 md:20 bg-[#e6ccff] h-screen py-6 absolute top-0 z-3 fixed">
                <h1 className="absolute top-2 w-full px-6 items-center text-[#9933ff]" style={{ color: "#9933ff" }}>Admin</h1>
                <ul className="space-y-4 pt-20 w-full px-6">
                    <li className="bg-[#d9b3ff] text-[#6600cc] px-4 py-2 rounded-lg font-semibold flex flex-row">
                        <img src="https://cdn-icons-png.flaticon.com/512/8751/8751003.png" className="w-7 h-7 justify-center" />
                        Home
                    </li>
                    <li className="li_style flex flex-row" onClick={() => navigate("/User")}>  {/*Extract Component */}
                        <img src="https://cdn-icons-png.flaticon.com/512/10813/10813372.png"
                            className="w-7 h-7"
                            alt="user"

                        /> User</li>
                    <li className="li_style flex flex-row">  {/*Extract Component */}
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-order-icon-download-in-svg-png-gif-file-formats--management-market-store-cart-trolley-business-pack-icons-5450.png"
                            className="w-7 h-7"
                        />Orders</li>
                    <li className="li_style flex flex-row">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/026/991/743/small/3d-render-of-purple-shopping-bag-icon-for-ui-ux-web-mobile-apps-social-media-ads-design-png.png"
                            className="w-7 h-7"
                        />Products</li>
                    <li className="li_style flex flex-row">
                        <img src="https://cdn-icons-png.flaticon.com/512/7382/7382094.png"
                            className="w-7 h-7"
                        />Customer</li>
                    <li className="li_style flex flex-row">
                        <img src="https://cdn-icons-png.freepik.com/256/9475/9475818.png?semt=ais_hybrid"
                            className="w-7 h-7"
                        />Payments</li>
                </ul>
            </div>

            {/* Main Page */}

            <div
                className={`bg-white ml-48 mt-16 px-4 py-2 w-[calc(100vw-12rem)] h-[calc(100vh-4rem)] overflow-y-auto ${window.location.pathname === "/Login" ? "flex justify-center items-center" : ""
                    }`}
            >
                <Routes>
                    <Route path="/" element={<h2 className="text-center text-[#9933ff]">Welcome to Dashboard</h2>} />
                    <Route path="/Login" element={<Login_Tailwind_css />} />
                    <Route path="/User" element={<User />} />
                </Routes>
            </div>

        </Container>

    )
};

export default Dashboard1;
