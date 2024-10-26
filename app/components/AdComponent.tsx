'use client'
import { useEffect } from 'react';

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        adsbygoogle: any[];
    }
}

export default function AdComponent() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.error("AdSense error:", e);
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
