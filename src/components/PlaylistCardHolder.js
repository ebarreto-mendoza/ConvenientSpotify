'use client'
import PlaylistCard from "./ PlaylistCard";
import MergePlaylistButton from "./MergePlaylistButton";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";

function PlaylistCardHolder() {
    const [selectedPlaylists, setSelectedPlaylists] = useState([]);
    const [newPlaylistName, setNewPlaylistName] = useState("Merged Playlist");


    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Select Playlists to Merge: {selectedPlaylists.length}</h2>
            <div>
                <SessionProvider>
                    <PlaylistCard selectedPlaylists = {selectedPlaylists} setSelectedPlaylists = {setSelectedPlaylists}/>
                </SessionProvider>
            </div>
            <h2 className="text-2xl font-bold mt-4 mb-4">New Playlist Name:</h2>
            <input className="outline-2 outline-spotify-green" type="text" value={newPlaylistName} onChange={(e) => setNewPlaylistName(e.target.value)}/>
            <div className="mt-4">
                <SessionProvider>
                    <MergePlaylistButton selectedPlaylists= {selectedPlaylists} newPlaylistName={newPlaylistName} setSelectedPlaylists={setSelectedPlaylists}/>
                </SessionProvider>
            </div>
        </div>
    );
}


export default PlaylistCardHolder;