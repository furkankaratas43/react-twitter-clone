import {Link} from "react-router-dom";
import {Popover} from "@headlessui/react";

export default function Footer() {
    return(
        <>
            <footer className="mb-4 px-4 flex flex-wrap gap-2 text-[0.813rem]">
                <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 hover:underline">Hizmet Şartları</Link>
                <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 hover:underline">Gizlilik Politikası</Link>
                <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 hover:underline">Çerez Politikası</Link>
                <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 hover:underline">Imprint</Link>
                <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 hover:underline">Erişebilirlik</Link>
                <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 hover:underline">Reklam Bilgisi</Link>
                <div className="inline-flex flex-wrap gap-2">
                    <Popover className="relative inline-flex leading-4">
                        <Popover.Button className="text-[color:var(--color-base-secondary)] outline-none leading-4 hover:underline inline-flex items-center">Daha fazla
                            <svg viewBox="0 0 24 24" className="h-[1em] px-0.5">
                                <path fill="currentColor" d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                            </svg>
                        </Popover.Button>
                        <Popover.Panel className="w-[9.375rem] max-w-[24rem] shadow-box bg-[color:var(--background-primary)] rounded-xl absolute right-0 bottom-0 grid overflow-hidden">
                            <Link to="/" className="px-4 py-3 leading-5 hover:bg-[color:var(--background-secondary)] font-bold transition-colors">Hakkında</Link>
                            <Link to="/" className="px-4 py-3 leading-5 hover:bg-[color:var(--background-secondary)] font-bold transition-colors">Durum</Link>
                            <Link to="/" className="px-4 py-3 leading-5 hover:bg-[color:var(--background-secondary)] font-bold transition-colors">İşletmeler İçin X</Link>
                            <Link to="/" className="px-4 py-3 leading-5 hover:bg-[color:var(--background-secondary)] font-bold transition-colors">Geliştiriciler</Link>
                        </Popover.Panel>
                    </Popover>
                    <div className="text-[color:var(--color-base-secondary)] leading-4">&copy; 2023 Codedev.</div>
                </div>


            </footer>

        </>
    )
}