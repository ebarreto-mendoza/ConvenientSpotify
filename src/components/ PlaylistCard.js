'use client'
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useSpotify from "@/hooks/useSpotify";
import spotifyAPI from "@/lib/spotify";

function PlaylistCard({selectedPlaylists, setSelectedPlaylists}) {
    const { data: session } = useSession();
    console.log("Session data in PlaylistCard:", session);
    const spotifyAPI = useSpotify();
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        if (spotifyAPI.getAccessToken()){
            spotifyAPI.getUserPlaylists().then((data) => {
                
                setPlaylists(data.body.items);
            }).catch((error) => {
                console.error("Error fetching playlists:", error);
            });
        }
    }, [session, spotifyAPI]);

    console.log("Playlists fetched:", playlists);

    if (!playlists || playlists.length === 1) {
        return (
            <div className="text-center">
                <p>You have no playlists available.</p>
            </div>
        );  
    }

    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                {
                    playlists.map((playlist) => {
                        const isSelected = selectedPlaylists.includes(playlist)
                        return (
                            <div
                                key={playlist.id}
                                onClick={() => {
                                if (isSelected) {
                                    setSelectedPlaylists(prev => prev.filter(p => p.id !== playlist.id));
                                } else {
                                    setSelectedPlaylists(prev => [...prev, playlist]);
                                }
                                }}
                                className={`cursor-pointer p-4 rounded-lg transition duration-200 ${
                                isSelected
                                    ? 'bg-spotify-white text-black outline-2 outline-spotify-green'
                                    : 'bg-spotify-green text-white'
                                }`}
                            >
                                <p>{playlist.name}</p>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    );
}

export default PlaylistCard;