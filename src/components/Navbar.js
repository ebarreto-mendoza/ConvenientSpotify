"use client";
import React from "react";
import Link from "next/link";
import LoginButton from "./LoginButton";
import { SessionProvider } from "next-auth/react";

const Navbar = () => {
    return (
        <nav className="bg-spotify-black p-4">
            <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-white text-lg font-bold">
                Convenient Features <span className="text-xs">for Spotify</span>
            </Link>
            <div className="space-x-4">
                <Link href="/transferPlaylist" className="text-gray-300 hover:text-white">
                Transfer Playlist
                </Link>
                <Link href="/convertPlaylist" className="text-gray-300 hover:text-white">
                Convert Playlist
                </Link>
                <Link href="/mergePlaylist" className="text-gray-300 hover:text-white">
                Merge Playlist
                </Link>
                <SessionProvider><LoginButton /></SessionProvider>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;

