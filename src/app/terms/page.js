import Navbar from "@/components/Navbar";

export default function TermsOfService() {
    return (
        <div className="min-h-screen relative selection:bg-[#1ba485]/30 bg-[#f8f9f8]">
            <Navbar />

            <main className="pt-32 pb-24 px-6 sm:px-12 md:px-24 max-w-4xl mx-auto flex flex-col">
                <h1 className="text-4xl md:text-5xl font-sans font-bold text-[#1f2924] tracking-tight leading-[1.1] mb-8">
                    Terms of Service
                </h1>

                <div className="prose prose-lg text-[#1f2924]/80 text-base md:text-lg leading-relaxed flex flex-col gap-6">
                    <p>
                        Welcome to Dayflow. By accessing or using our application, you agree to be bound by these Terms of Service.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1f2924] mt-4">1. Acceptance of Terms</h2>
                    <p>
                        By creating an account or using Dayflow, you confirm that you have read, understood, and agreed to these terms. If you do not agree, please do not use our services.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1f2924] mt-4">2. User Accounts</h2>
                    <p>
                        You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1f2924] mt-4">3. Prohibited Conduct</h2>
                    <p>
                        You agree not to use the application for any unlawful purpose, to solicit others to perform or participate in any unlawful acts, or to violate any international, federal, or state regulations, rules, or laws.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1f2924] mt-4">4. Modifications to Service</h2>
                    <p>
                        We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1f2924] mt-4">5. Governing Law</h2>
                    <p>
                        These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of your jurisdiction.
                    </p>

                    <p className="mt-8 text-sm text-[#1f2924]/50">
                        Last updated: March 2026
                    </p>
                </div>
            </main>
        </div>
    );
}
