"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
const ContactPage = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
                <div className="w-full max-w-3xl bg-white p-8 rounded shadow-md">
                    <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
                    <p className="text-center text-gray-600 mb-8">
                        Have a question or feedback? Fill out the form below and we'll get back
                        to you as soon as possible.
                    </p>
                    <form className="space-y-4">
                        <div>
                            <label className="block mb-1 font-semibold">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Message</label>
                            <textarea
                                name="message"
                                rows={5}
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="mt-8 text-center text-gray-600">
                        <p>Email: <a href="mailto:support@yourwebsite.com" className="underline">support@yourwebsite.com</a></p>
                        <p>Phone: <a href="tel:+84000000000" className="underline">+84 XXX XXX XXX</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;
