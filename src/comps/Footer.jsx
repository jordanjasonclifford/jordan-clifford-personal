export default function Footer() {
  return (
    <footer className="py-8 bg-[#140a07] border-t border-[#2a140f] text-center text-sm text-gray-400">

      <img
        src="/hand_sun_2.png"
        alt="Sun"
        className="mx-auto mb-4 h-16 w-auto opacity-90 animate-delay-100 animate-spin-slow"
      />

      <p className="mb-1">
        © 2026 Jordan Clifford.
      </p>

      <p className="text-xs text-gray-500">
        Hero background video courtesy of Pixabay (creator: FlickrVideos)
      </p>
    </footer>
  );
}