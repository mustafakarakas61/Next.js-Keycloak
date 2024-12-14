"use client";
import keycloak from '@/lib/keycloak';

export default function LogoutButton() {
    const handleLogout = () => {
        keycloak.logout({
            redirectUri: window.location.origin
        });
    };

    return (
        <button
            onClick={handleLogout}
            style={{
                backgroundColor: '#800000',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '4px'
            }}
        >
            Çıkış Yap
        </button>
    );
}
