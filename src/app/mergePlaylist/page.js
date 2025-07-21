import PlaylistCardHolder from "@/components/PlaylistCardHolder";
import { getServerSession } from "next-auth";

export default function mergePlaylist() {
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold text-center">Merge Playlists</h1>
      <main className="flex flex-col gap-[32px] row-start-2  sm:items-start">
          <PlaylistCardHolder />
      </main>
    </div>
  );
}
