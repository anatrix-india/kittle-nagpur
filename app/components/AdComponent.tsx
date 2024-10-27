"use client";

import { useEffect } from 'react';

const AdsenseComponent = () => {

    useEffect(() => {
        try {
            // @ts-expect-error - Suppress error for 'adsbygoogle' property
            (window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (err) {
            console.error(err)
        }
    }, [])

    return (
        <div className="overflow-hidden m-4">
            <div className="text-sm text-gray-500 mb-2">Advertisement</div>
            <div>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3089469944509509"
                    crossOrigin="anonymous"></script>
                <ins className="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-format="fluid"
                    data-ad-layout-key="-fz+v-4r-a6+10v"
                    data-ad-client="ca-pub-3089469944509509"
                    data-ad-slot="7622569290"></ins>
            </div>
        </div>
    );
};

export default AdsenseComponent;

