"use client";
import React from "react";  
import Image from "next/image";



const Footer = () => {
  return (
    <footer className="bg-spotify-black text-center py-4 text-sm text-spotify-white border-t">
      <p>
        Built by <span className="font-semibold">Eduardo Barreto-Mendoza</span>. This product uses the 
        <span className="font-semibold"> Spotify Web API</span> but is not endorsed, certified, or otherwise approved by Spotify.
      </p>
      <div className="flex justify-center mt-2">
        <Image src="/Full_Logo_Green_RGB.svg" alt="Spotify Full Logo" width={70} height={70} className="w-auto h-10" />
      </div>
    </footer>
  );
}

export default Footer;