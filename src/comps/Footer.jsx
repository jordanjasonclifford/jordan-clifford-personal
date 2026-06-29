export default function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-orange-300/10 text-center text-sm text-white">
      <img
        src="/jordancliffordwebsitelogo.png"
        alt="Jordan Clifford logo"
        className="mx-auto mb-4 h-24 w-auto opacity-95"
      />

      <p className="mb-1">
        <a
          href="mailto:jordanclifford@gmail.com"
          className="text-amber-200 transition hover:text-orange-200"
        >
          jordanclifford@gmail.com
        </a>
      </p>

      <p className="mb-1">&copy; 2026 Jordan Clifford.</p>

      <p className="text-xs text-white">
        Hero background video courtesy of Pixabay (creator: FlickrVideos)
      </p>
    </footer>
  );
}
