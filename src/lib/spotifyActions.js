

export async function mergePlaylists(spotifyAPI, newPlaylistName, selectedPlaylists) {
    if (!spotifyAPI || !newPlaylistName || selectedPlaylists.length < 2) {
        console.error("Invalid parameters for merging playlists.");
        return;
    }


    const track_uris = []
    
    const fetchPlaylists = selectedPlaylists.map(async (playlist) => {
        const playlistTrackNum = playlist.tracks.total

        console.log("Total Playlist Tracks:", playlistTrackNum);
        console.log("Selected Playlist ID:", playlist.id);

        for(let offset = 0; offset < playlistTrackNum; offset += 100) {
            const data = await spotifyAPI.getPlaylistTracks(playlist.id, { offset: offset })
            const uris = data.body.items.map(item => item.track.uri);
            track_uris.push(...uris);
            console.log(`Fetched ${uris.length} tracks from playlist ${playlist.name} at offset ${offset}`);

        }
    })

    await Promise.all(fetchPlaylists);

    console.log("Track URIs to merge:",track_uris.length);
    console.log("Track URIs:", track_uris);

    const newPlaylist = await spotifyAPI.createPlaylist(newPlaylistName, {
        description: `Merged playlist from ${selectedPlaylists.map(p => p.name).join(', ')}`,
        public: false
    });


    console.log("New Playlist Created:", newPlaylist.body.id);

    for(let offset = 0; offset < track_uris.length; offset += 100) {
        const data = await spotifyAPI.addTracksToPlaylist(newPlaylist.body.id, track_uris.slice(offset, offset + 100));
        console.log('Adding tracks to new playlist at offset:', offset);

    }

    return;
}
