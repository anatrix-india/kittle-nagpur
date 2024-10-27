// "use client";

// import { useEffect } from 'react';

// const AdsenseComponent = () => {
//     useEffect(() => {
//         // @ts-expect-error - Suppress error for 'adsbygoogle' property
//         if (typeof window !== "undefined" && window.adsbygoogle) {
//             try {
//                 // @ts-expect-error - Suppress error for 'adsbygoogle' property
//                 window.adsbygoogle.push({});
//             } catch (err) {
//                 console.error(err);
//             }
//         }
//     }, []);

//     return (
//         <div className="overflow-hidden m-4">
//             <div className="text-sm text-gray-500 mb-2">Advertisement</div>
//             <div>
//                 <ins className="adsbygoogle"
//                     style={{ display: "block", minWidth: "250px", height: "250px" }}
//                     data-ad-format="fluid"
//                     data-ad-layout-key="-fz+v-4r-a6+10v"
//                     data-ad-client="ca-pub-3089469944509509"
//                     data-ad-slot="7622569290"></ins>
//             </div>
//         </div>
//     );
// };

// export default AdsenseComponent;

"use client";

import { useEffect } from 'react';

declare global {
    interface Window {
        adsbygoogle: unknown[];
    }
}

const AdsenseComponent = () => {
    useEffect(() => {
        const loadAdsenseScript = () => {
            const script = document.createElement("script");
            script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3089469944509509";
            script.async = true;
            script.crossOrigin = "anonymous";
            document.body.appendChild(script);

            // Initialize AdSense after the script loads
            script.onload = () => {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            };
        };

        // Load the script only if it hasn't been loaded yet
        if (!window.adsbygoogle) {
            loadAdsenseScript();
        } else {
            (window.adsbygoogle as unknown[]).push({});
        }
    }, []);

    return (
        <div className="overflow-hidden m-4">
            <div className="text-sm text-gray-500 mb-2">Advertisement</div>
            <div>
                <ins className="adsbygoogle"
                    style={{ display: "block", minWidth: "250px", height: "250px" }}
                    data-ad-format="fluid"
                    data-ad-layout-key="-fz+v-4r-a6+10v"
                    data-ad-client="ca-pub-3089469944509509"
                    data-ad-slot="7622569290"></ins>
            </div>
        </div>
    );
};

export default AdsenseComponent;
