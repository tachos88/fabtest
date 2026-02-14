
import React from 'react';

export const HollmanLogo: React.FC<{ className?: string, dark?: boolean }> = ({ className = "h-10", dark = false }) => (
  <div className={`flex flex-col items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5L85 40V60L50 95L15 60V40L50 5Z" fill={dark ? "#FFFFFF" : "#1B263B"} />
      <path d="M35 35H45V45H55V35H65V65H55V55H45V65H35V35Z" fill={dark ? "#1B263B" : "#FFFFFF"} />
    </svg>
    <div className={`mt-2 flex flex-col items-center tracking-[0.2em] font-light ${dark ? "text-white" : "text-[#1B263B]"}`}>
      <span className="text-sm font-bold tracking-[0.3em] uppercase">HOLLMAN</span>
      <span className="text-[8px] uppercase">CONSULTANCY</span>
    </div>
  </div>
);
