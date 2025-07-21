import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyAPI, { LOGIN_URL } from "@/lib/spotify";
import { access } from "fs";

async function refreshAccessToken(token) {
    try {
        spotifyAPI.setAccessToken(token.accessToken);
        spotifyAPI.setRefreshToken(token.refreshToken);
        const { body: refreshedToken } = await spotifyAPI.refreshAccessToken();

        return {
            ...token,
            accessToken: refreshedToken.access_token,
            accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
            refreshToken: refreshedToken.refresh_token ?? token.refreshToken, 
        }
    }
    catch (error) {
        console.error("Error refreshing access token:", error);
        return {
            ...token,
            error: "RefreshAccessTokenError"
        };
    }
}


const handler = NextAuth({
    providers: [
        SpotifyProvider({
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        authorization: LOGIN_URL 
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    },
    callbacks: {
        async jwt({ token, account, user }) {
            if (account && user) {
                return {
                    ...token,
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    expires: account.expires_at * 1000,
                    username: account.providerAccountId,
                };
            }
            if (Date.now() < token.expires) {
            return token;
            }
            return await refreshAccessToken(token);
        },
        async session({ session, token }) {
            session.user.accessToken = token.accessToken;
            session.user.refreshToken = token.refreshToken;
            session.user.username = token.username;
            return session;
        }
    },
});

export { handler as GET, handler as POST };