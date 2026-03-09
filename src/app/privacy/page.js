import Navbar from "@/components/Navbar";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen relative selection:bg-[#1ba485]/30 bg-[#f8f9f8]">
            <Navbar />

            <main className="pt-32 pb-24 px-6 sm:px-12 md:px-24 max-w-4xl mx-auto flex flex-col">
                <h1 className="text-4xl md:text-5xl font-sans font-bold text-[#1f2924] tracking-tight leading-[1.1] mb-8">
                    Privacy Policy
                </h1>

                <div className="prose prose-lg text-[#1f2924]/80 text-base md:text-lg leading-relaxed flex flex-col gap-6">
                    <p>
                        Welcome to Dayflow. We value your privacy and are committed to protecting your personal data.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1f2924] mt-4">1. Information We Collect</h2>
                    <p>
                        When you use Dayflow, we may collect information that you provide to us directly, such as your email address and authentication data when you create an account. We also collect usage data to help improve the application.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1f2924] mt-4">2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to operate, maintain, and provide the features of Dayflow. We may also use it to communicate with you, such as sending updates and notifications.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1f2924] mt-4">3. Data Security</h2>
                    <p>
                        We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1f2924] mt-4">4. Changes to This Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date.
                    </p>

                    <p className="mt-8 text-sm text-[#1f2924]/50">
                        Last updated: March 2026
                    </p>
                </div>
            </main>
        </div>
    );
}
