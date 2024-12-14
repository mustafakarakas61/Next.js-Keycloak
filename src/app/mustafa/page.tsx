"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import keycloak from '@/lib/keycloak';
import Link from "next/link";

export default function HomePage() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (keycloak.authenticated) {
            // Keycloak token içinden username ve name çekme
            const tokenParsed = keycloak.tokenParsed as Record<string, any>;
            console.log(tokenParsed)
            setUsername(tokenParsed?.preferred_username || 'Kullanıcı');
            setName(tokenParsed?.name || 'İsim');
        }
    }, []);

    const handleLogout = () => {
        keycloak.logout({
            redirectUri: window.location.origin
        });
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Üst Menü */}
            <header className="flex justify-between items-center py-4 px-8 bg-blue-600 text-white">
                <div className="flex items-center gap-2">
                    <Image src="https://mustafakarakas.vercel.app/trabzonspor.svg" alt="Logo" width={30} height={30} />
                    <Link href="/" className="font-semibold text-lg">
                        Ana Sayfa
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <span>Hoşgeldin, {username}</span>
                    <button
                        onClick={handleLogout}
                        className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-100 transition">
                        Çıkış Yap
                    </button>
                </div>
            </header>

            {/* İçerik */}
            <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <h1 className="text-3xl font-bold mb-4">Diğer Ana Sayfa</h1>
                <p className="text-gray-700 max-w-md mb-8">
                    Merhaba <strong>{name}</strong>. Burası örnek bir Next.js + Keycloak entegreli sayfa taslağıdır.
                    İstediğiniz gibi özelleştirip geliştirebilirsiniz.
                </p>

                <div className="flex gap-4">
                    <a
                        href="#"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Özellik 1
                    </a>
                    <a
                        href="#"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Özellik 2
                    </a>
                </div>
            </main>

            {/* Alt Bilgi */}
            <footer className="py-4 px-8 bg-gray-100 text-gray-600 text-sm text-center">
                © {new Date().getFullYear()} MyApp. Tüm hakları saklıdır.
            </footer>
        </div>
    );
}
