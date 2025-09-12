import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
const teamMembers = [
    { name: "Nguyen Van A", role: "CEO" },
    { name: "Tran Thi B", role: "CTO" },
    { name: "Le Van C", role: "Marketing Manager" },
];
const AboutUsPage = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
                    <p className="text-gray-700">
                        Founded in 2025, [Your Company Name] aims to provide the best online shopping experience for customers worldwide. Our mission is to combine quality, affordability, and convenience.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Mission & Vision</h2>
                    <p className="text-gray-700">
                        <strong>Mission:</strong> Deliver high-quality products with excellent customer service.<br />
                        <strong>Vision:</strong> Become a trusted global brand for online shopping.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {teamMembers.map((member, idx) => (
                            <div key={idx} className="border rounded-lg p-4 text-center">
                                <div className="h-24 w-24 bg-gray-200 rounded-full mx-auto mb-2"></div>
                                <h3 className="font-semibold">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default AboutUsPage
