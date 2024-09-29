import React from 'react';
import C1 from "@/utilities/test";
import C2 from "@/utilities/test";

interface C1Props {
    imagePath: string[];
  }

export default function PortfolioGallery({ imagePath }) {
    return (
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-14 py-10 md:py-14 px-10 md:px-20">
                <div className="grid-flow-row ">
                    <C1 imagePath={imagePath} />
                </div>
                <div className="grid-flow-row gap-3 md:gap-14">
                    <C2 imagePath={imagePath} />
                </div>
            </div>
    )
};