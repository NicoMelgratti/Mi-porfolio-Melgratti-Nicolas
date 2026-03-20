import React from 'react';
import { User, BrainCircuit, Terminal, GraduationCap, Mail, Phone, Github, Linkedin } from 'lucide-react';

const navItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'skills', label: 'Skills', icon: BrainCircuit },
    { id: 'projects', label: 'Projects', icon: Terminal },
    { id: 'education', label: 'Education', icon: GraduationCap },
];

export default function Sidebar() {
    return (
        <aside className="h-screen w-64 fixed left-0 top-0 bg-slate-950 flex flex-col border-r border-slate-800 shadow-2xl z-40 hidden md:flex">
            <div className="p-8 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary/20 p-1">
                    {/* Aquí hemos integrado tu foto de perfil */}
                    <img
                        src="/perfil.jpg"  // El "/" apunta directamente a la carpeta public
                        alt="Nicolás Melgratti"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
                <h1 className="text-lg font-black text-white font-headline leading-tight">Nicolás Melgratti</h1>
                <p className="text-xs text-slate-500 font-sans tracking-widest mt-1 uppercase">Systems Architect</p>
            </div>

            <nav className="flex-1 mt-4">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="group text-slate-500 hover:text-white hover:bg-slate-900 flex items-center gap-3 px-6 py-4 transition-all duration-300 ease-in-out font-sans text-sm tracking-wide border-r-4 border-transparent hover:border-primary"
                    >
                        <item.icon size={18} className="group-hover:text-primary transition-colors" />
                        {item.label}
                    </a>
                ))}
            </nav>

            <div className="p-6 space-y-4 border-t border-slate-900">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                    <Mail size={14} />
                    <span className="truncate">nicomelgratti@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                    <Phone size={14} />
                    <span>3497657247</span>
                </div>
                <button className="w-full py-3 bg-primary text-white font-bold rounded-lg text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20">
                    Hire Me
                </button>
            </div>
        </aside>
    );
}