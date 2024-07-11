import React from 'react';
import Image from 'next/image';
import PortfolioC1 from "@/utilities/portfolioC1";
import PortfolioC2 from "@/utilities/portfolioC2";

export default function PortfolioGallery() {
    return (
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-14 py-10 md:py-14 px-10 md:px-20">
                <div className="grid-flow-row ">
                    <PortfolioC1/>
                </div>
                <div className="grid-flow-row gap-3 md:gap-14">
                    <PortfolioC2/>
                </div>
            </div>
    )
};