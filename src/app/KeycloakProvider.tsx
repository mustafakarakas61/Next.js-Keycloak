"use client";

import React, { useEffect, useState } from 'react';
import keycloak from '../lib/keycloak';

export default function KeycloakProvider({ children }: { children: React.ReactNode }) {
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        keycloak.init({ onLoad: 'login-required', checkLoginIframe: false }).then((authenticated) => {
            if (!authenticated) {
                console.log("User is not authenticated!");
            }
            setInitialized(true);
        });
    }, []);

    if (!initialized) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
                <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-t-transparent"></div>
                <p className="text-gray-700 mt-4">Lütfen bekleyin...</p>
            </div>
        );
    }

    return <>{children}</>;
}
