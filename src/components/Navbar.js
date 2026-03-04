import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 glass-header transition-all duration-300">
            <div className="flex items-center gap-3 cursor-pointer">
                {/* Sprout Logo from the app */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C12 21 16 17 16 11C16 8.5 14.5 7 12 7C9.5 7 8 8.5 8 11C8 17 12 21 12 21Z" fill="#1BA485" />
                    <path d="M12 21C12 21 17 18 19 14C20.5 11 19 8 16 9C13 10 12 15 12 15" fill="#1BA485" />
                    <path d="M12 21C12 21 7 18 5 14C3.5 11 5 8 8 9C11 10 12 15 12 15" fill="#1BA485" />
                </svg>
                <span className="font-sans font-bold text-xl tracking-tight text-[#1F2924] mt-0.5">Dayflow</span>
            </div>

            <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-[#1F2924]/80">
                <Link href="#features" className="hover:text-[#1BA485] transition-colors">Features</Link>
                <Link href="#methodology" className="hover:text-[#1BA485] transition-colors">Methodology</Link>
            </div>

            <div>
                <Link href="#" className="px-8 py-2.5 rounded-full border border-[#1BA485] text-[#1BA485] font-bold text-[13px] tracking-wider uppercase hover:bg-[#1BA485] hover:text-white transition-all duration-300 shadow-sm">
                    Enter
                </Link>
            </div>
        </nav>
    );
}
