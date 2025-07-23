# Convenient Spotify Features

A web app that aims to simplify and speed up time consuming playlist management tasks on Spotify.

## Features

- Spotify login wiht OAuth (utilizing NextAuth)
- Merge selected playlists from user's playlists
- Transfer songs from one playlist to another
- Convert an Apple Music playlist file to a Spotify Playlist

## Getting Started

### Prerequisites

- Node.js >= 18
- Spotify Developer Account

### Installation

1. Clone the repo:
   ```
   bash
   git clone https://github.com/ebarreto-mendoza/ConvenientSpotify.git
   cd ConvenientSpotify
   ```
2. Install Dependencies:
   ```
   npm install
   ```
3. Create a .env.local file and add your credentials:

   ```
   CLIENT_ID=your_spotify_client_id
   CLIENT_SECRET=your_spotify_client_secret

   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_secret
   ```

4. Run the app:
   ```
   npm run dev
   ```

### Environment Variables

| Key             | Description                    |
| --------------- | ------------------------------ |
| CLIENT_ID       | Your Spotify App Client ID     |
| CLIENT_SECRET   | Your Spotify App Client Secret |
| NEXTAUTH_URL    | Required by NextAuth           |
| NEXTAUTH_SECRET | Used to Sign NextAuth Tokens   |

## Tech Stack

- Next.js (15.3.4)
- NextAuth.js (4.24.11)
- Spotify Web API
- Spotify Web API Node (5.0.2)
- Tailwind CSS

## Folder Structure

- `components/` – UI components like `PlaylistCard`
- `hooks/` – Custom hooks (`useSpotify`)
- `lib/` – Spotify client and helper functions
- `pages/api/` – NextAuth and Spotify-related API routes

## Known Issues

- Playlist merging is capped at 10,000 tracks (Spotify API limit)

## Future Improvements

- UI feedback while merging (e.g., loading spinners)
- Deduplication of tracks before merging
- Implementing song transfer between playlists
- Implementing Apple Music playlist file conversion to Spotify playlist

<!-- First, run the development server: -->

<!-- ```bash
npm run dev
# or
yarn dev
# orz
pnpm dev
# or
bun dev
``` -->

<!-- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->
