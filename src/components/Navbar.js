import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 glass-header transition-all duration-300">
            <div className="flex items-center gap-3 cursor-pointer">
                <Image src="/icon.png" width={36} height={36} alt="Dayflow Logo" className="rounded-xl shadow-sm" />
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
