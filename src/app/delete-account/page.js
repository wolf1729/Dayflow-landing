"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function DeleteAccount() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        // Simulate a network request
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <div className="min-h-screen relative selection:bg-[#1ba485]/30 bg-[#f8f9f8]">
            <Navbar />

            <main className="pt-32 pb-24 px-6 sm:px-12 md:px-24 max-w-3xl mx-auto flex flex-col items-center justify-center min-h-[80vh]">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[#1f2924]/5 w-full max-w-lg text-center">

                    <div className="w-16 h-16 bg-[#fff0f0] rounded-2xl flex items-center justify-center text-[#e53e3e] mx-auto mb-6">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                    </div>

                    <h1 className="text-3xl font-bold text-[#1f2924] mb-4">
                        Delete Account
                    </h1>

                    {!submitted ? (
                        <>
                            <p className="text-[#1f2924]/60 mb-8 leading-relaxed text-sm md:text-base">
                                We&apos;re sorry to see you go. Enter the email address associated with your Dayflow account to request deletion. Note that all your habits, routines, and data will be permanently removed.
                            </p>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@example.com"
                                    required
                                    className="w-full px-5 py-4 rounded-xl border border-[#1f2924]/10 bg-[#f8f9f8] text-[#1f2924] focus:outline-none focus:border-[#1ba485] focus:ring-1 focus:ring-[#1ba485] transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={loading || !email}
                                    className="w-full py-4 rounded-xl bg-[#e53e3e] text-white font-bold tracking-wide transition-all hover:bg-[#c53030] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center h-14"
                                >
                                    {loading ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        "Request Deletion"
                                    )}
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="flex flex-col items-center animate-in fade-in duration-500">
                            <div className="w-16 h-16 bg-[#e4efe5] rounded-full flex items-center justify-center text-[#1ba485] mb-6 shadow-sm">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <p className="text-[#1f2924] font-medium text-lg mb-2">Request Received</p>
                            <p className="text-[#1f2924]/60 text-sm leading-relaxed mb-8">
                                We&apos;ve received your request to delete the account associated with <strong>{email}</strong>. Our team will process this within 5-7 business days.
                            </p>
                            <button
                                onClick={() => window.location.href = '/'}
                                className="px-8 py-3 rounded-full border border-[#1ba485] text-[#1ba485] font-semibold text-sm hover:bg-[#1ba485] hover:text-white transition-all w-full"
                            >
                                Return to Home
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
