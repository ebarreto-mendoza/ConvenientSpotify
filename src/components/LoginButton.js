
import React from "react";
import {useSession, signIn, signOut } from "next-auth/react";


function LoginButton() {
    const { data: session, status } = useSession();
    console.log("Session data:", session);

    if (!session) {
        return (
            <button
                onClick={() => signIn("spotify", { callbackUrl: "/" })}
                className="bg-spotify-green text-white px-4 py-2 rounded hover:bg-spotify-dark-green transition duration-300"
            >
                Login with Spotify
            </button>
        );
    }

    return (
        <div className="flex items-center space-x-4">
            <img
                src={session.user.image}
                alt={session.user.name}
                className="w-10 h-10 rounded-full"
            />
            <span className="text-white">{session.user.name}</span>
            <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="bg-spotify-red text-white px-4 py-2 rounded hover:bg-spotify-dark-red transition duration-300"
            >
                Logout
            </button>
        </div>
    );
}

export default LoginButton;
