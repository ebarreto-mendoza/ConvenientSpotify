import useSpotify from "@/hooks/useSpotify";
import { mergePlaylists } from "@/lib/spotifyActions";
import { useState } from "react";


function MergePlaylistButton({ selectedPlaylists, newPlaylistName, setSelectedPlaylists}) {
    const [merging, setMerging] = useState(false);
    const spotifyAPI = useSpotify();
    return (
        <button
            disabled= {selectedPlaylists.length < 2 || merging}
            onClick={() => {
                console.log("Selected Playlists:", selectedPlaylists);
                console.log("New Playlist Name:", newPlaylistName);
                setMerging(true);
                mergePlaylists(spotifyAPI, newPlaylistName, selectedPlaylists);
                setSelectedPlaylists([]);
                setMerging(false);
            }}
            className= {`transition duration-300 px-4 py-2 rounded ${selectedPlaylists.length > 1 || merging? 'cursor-pointer bg-spotify-green text-white hover:bg-green-300' : 'bg-gray-300 text-spotify-black'}`}
        >
            Merge Playlists
        </button>
    );
}

export default MergePlaylistButton;