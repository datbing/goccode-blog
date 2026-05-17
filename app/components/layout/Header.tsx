'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Search, User, Sun, Moon, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Bài viết', href: '/post' },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          setIsVisible(false);
          setIsMobileMenuOpen(false);
        } 
        else setIsVisible(true);
        setLastScrollY(currentScrollY);
      }
    };
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header className={`sticky top-0 z-50 transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'} 
      bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800`}
    >
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* LOGO GOCCODE */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/icon.png"}
            alt="GocCode"
            width={193}
            height={193}
            className="h-12 w-auto"
          />
          <span className="text-4xl md:text-5xl tracking-wide text-slate-900 dark:text-slate-200">
            <span className="font-bold">Goc</span>
            <span className="font-extrabold">Code</span>
          </span>
        </Link>

        {/* 2. MENU TRÊN PC (Tự động lặp dựa vào mảng NAV_LINKS) */}
        <nav className="hidden md:flex gap-6 text-lg font-bold text-slate-600 dark:text-slate-300">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CỤM NÚT BÊN PHẢI */}
        <div className="flex gap-2 sm:gap-4 items-center">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 sm:p-2.5 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          <Link href="/login" className="hidden sm:block p-2 sm:p-2.5 text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-full transition-colors">
            <User size={20} />
          </Link>

          {/* NÚT HAMBURGER CHỈ HIỆN TRÊN MOBILE */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 3. MENU XỔ XUỐNG DÀNH CHO MOBILE (Tự động lặp lại y chang PC) */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 ${
          isMobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-4 font-bold text-slate-600 dark:text-slate-300">
          
          {/* Map mảng NAV_LINKS ra cho Mobile */}
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Dòng kẻ ngang phân cách */}
          <div className="h-px bg-slate-100 dark:bg-slate-800 w-full my-1"></div>
          
          <Link 
            href="/login" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <User size={20} /> Đăng nhập
          </Link>
        </div>
      </div>
    </header>
  );
}