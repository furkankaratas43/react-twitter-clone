import {Link} from "react-router-dom";
import {Popover} from "@headlessui/react";

export default function Footer() {
    return(
        <>
            <footer className="mb-4 px-4 flex flex-wrap gap-2">
                <Link to="/" className="text-[#71767b] text-[13px] leading-4 hover:underline">Hizmet Şartları</Link>
                <Link to="/" className="text-[#71767b] text-[13px] leading-4 hover:underline">Gizlilik Politikası</Link>
                <Link to="/" className="text-[#71767b] text-[13px] leading-4 hover:underline">Çerez Politikası</Link>
                <Link to="/" className="text-[#71767b] text-[13px] leading-4 hover:underline">Imprint</Link>
                <Link to="/" className="text-[#71767b] text-[13px] leading-4 hover:underline">Erişebilirlik</Link>
                <Link to="/" className="text-[#71767b] text-[13px] leading-4 hover:underline">Reklam Bilgisi</Link>
                <div className="w-full flex gap-2">
                    <Popover className="relative inline-flex leading-4">
                        <Popover.Button className="text-[#71767b] outline-none text-[13px] leading-4 hover:underline inline-flex items-center">Daha fazla
                            <svg viewBox="0 0 24 24" className="h-[1em] px-0.5">
                                <path fill="currentColor" d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                            </svg>
                        </Popover.Button>
                        <Popover.Panel className="w-[150px] max-w-[384px] shadow-box bg-black rounded-xl absolute right-0 bottom-0 grid overflow-hidden">
                            <Link to="/" className="px-4 py-3 text-white leading-5 hover:bg-[#16181c] font-bold text-[15px] transition-colors">Hakkında</Link>
                            <Link to="/" className="px-4 py-3 text-white leading-5 hover:bg-[#16181c] font-bold text-[15px] transition-colors">Durum</Link>
                            <Link to="/" className="px-4 py-3 text-white leading-5 hover:bg-[#16181c] font-bold text-[15px] transition-colors">İşletmeler İçin X</Link>
                            <Link to="/" className="px-4 py-3 text-white leading-5 hover:bg-[#16181c] font-bold text-[15px] transition-colors">Geliştiriciler</Link>
                        </Popover.Panel>
                    </Popover>
                    <div className="text-[#71767b] text-[13px] leading-4">&copy; 2023 Codedev.</div>
                </div>


            </footer>

        </>
    )
}