'use client';
import { useEffect } from 'react';

declare global {
    interface Window {
        adsbygoogle: Array<Record<string, unknown>>;
    }
}

export default function AdComponent() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Initialize window.adsbygoogle if it's undefined
            window.adsbygoogle = window.adsbygoogle || [];

            // Load the adsbygoogle.js script dynamically if not already loaded
            if (!document.querySelector('script[src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')) {
                const script = document.createElement('script');
                script.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
                script.async = true;
                script.onload = () => {
                    window.adsbygoogle.push({});
                };
                document.head.appendChild(script);
            } else {
                try {
                    window.adsbygoogle.push({});
                } catch (e) {
                    console.error('AdSense error:', e);
                }
            }
        }
    }, []);

    return (
        <div>
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-format="fluid"
                data-ad-layout-key="-fz+v-4r-a6+10v"
                data-ad-client="ca-pub-3089469944509509"
                data-ad-slot="7622569290"
            ></ins>
        </div>
    );
}
