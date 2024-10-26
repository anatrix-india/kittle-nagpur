"use client";

import { useEffect, useCallback, useState } from 'react';

declare global {
    interface Window {
        adsbygoogle: {
            push: (params: object) => void;
        }[];
    }
}

const ADSENSE_SCRIPT_ID = 'google-adsense-script';
const ADSENSE_CLIENT_ID = 'ca-pub-3089469944509509';
const ADSENSE_SCRIPT_URL = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

const AdsenseComponent = () => {
    const [isClient, setIsClient] = useState(false);

    const pushAd = useCallback(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error('Error pushing ad:', err);
        }
    }, []);

    const loadAdScript = useCallback(() => {
        try {
            const existingScript = document.getElementById(ADSENSE_SCRIPT_ID);

            if (!existingScript) {
                const script = document.createElement('script');
                script.id = ADSENSE_SCRIPT_ID;
                script.src = ADSENSE_SCRIPT_URL;
                script.async = true;
                script.crossOrigin = "anonymous";
                script.setAttribute('data-ad-client', ADSENSE_CLIENT_ID);

                // Create a promise to handle script loading
                const scriptLoadPromise = new Promise((resolve, reject) => {
                    script.onload = () => {
                        console.log('AdSense script loaded successfully');
                        resolve('success');
                    };

                    script.onerror = (error) => {
                        console.error('Initial AdSense script load error:', error);
                        reject(error);
                    };
                });

                document.head.appendChild(script);

                // Handle the script loading
                scriptLoadPromise
                    .then(() => {
                        setTimeout(pushAd, 100);
                    })
                    .catch((error) => {
                        console.error('Error in script loading promise:', error);
                    });
            } else {
                setTimeout(pushAd, 100);
            }
        } catch (error) {
            console.error('Error in loadAdScript:', error);
        }
    }, [pushAd]);

    // Set isClient to true once component mounts
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Only run the ad script loading logic on the client side
    useEffect(() => {
        if (!isClient) return;

        const timeoutId = setTimeout(() => {
            loadAdScript();
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isClient, loadAdScript]);

    // Show a placeholder during SSR
    if (!isClient) {
        return (
            <div className="overflow-hidden m-4">
                <div className="text-sm text-gray-500 mb-2">Advertisement</div>
                <div 
                    className="bg-gray-100" 
                    style={{
                        minWidth: '300px',
                        minHeight: '250px'
                    }}
                />
            </div>
        );
    }

    return (
        <div className="overflow-hidden m-4">
            <div className="text-sm text-gray-500 mb-2">Advertisement</div>
            <ins
                className="adsbygoogle"
                style={{
                    display: 'block',
                    minWidth: '300px',
                    minHeight: '250px',
                    backgroundColor: '#f1f1f1'
                }}
                data-ad-client={ADSENSE_CLIENT_ID}
                data-ad-slot="2259567560"
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </div>
    );
};

export default AdsenseComponent;