'use client';
import { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import spotifyAPI from "@/lib/spotify";
import SpotifyWebApi from "spotify-web-api-node";

// const spotifyAPI = new SpotifyWebApi({
//     clientId: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
// });

function useSpotify() {
    const {data: session, status} = useSession();

    useEffect(() => {
        console.log("useSpotify hook initialized");
        console.log("Session object:", session);

        if(!session){
            console.log("No session found, user not authenticated");
            return;
        }

        if(session){
            if(session.error === "RefreshAccessTokenError") {
                signIn();
            }
        }

        if(session.user?.accessToken){
        spotifyAPI.setAccessToken(session.user.accessToken);

        }

    }, [session]);

    return spotifyAPI;
}

export default useSpotify;