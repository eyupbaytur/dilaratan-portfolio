import React from 'react';
import C1 from "@/utilities/kestanemevsimi/c1";
import C2 from "@/utilities/kestanemevsimi/c2";

export default function Gallery() {
    return (
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-14 py-10 md:py-14 px-10 md:px-20">
                <div className="grid-flow-row ">
                    <C1 />
                </div>
                <div className="grid-flow-row gap-3 md:gap-14">
                    <C2 />
                </div>
            </div>
    )
};