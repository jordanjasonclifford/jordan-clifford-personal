import { useEffect, useState } from "react";

export default function Footer() {
  const [snakeCursorEnabled, setSnakeCursorEnabled] = useState(false);

  useEffect(() => {
    const savedPreference = localStorage.getItem("snake-cursor") === "true";
    setSnakeCursorEnabled(savedPreference);
    document.body.classList.toggle("snake-cursor", savedPreference);
  }, []);

  function toggleSnakeCursor() {
    const nextValue = !snakeCursorEnabled;
    setSnakeCursorEnabled(nextValue);
    localStorage.setItem("snake-cursor", String(nextValue));
    document.body.classList.toggle("snake-cursor", nextValue);
  }

  return (
    <footer className="py-10 bg-black border-t border-orange-300/10 text-center text-base text-white">
      <img
        src="/jordancliffordwebsitelogo.png"
        alt="Jordan Clifford logo"
        className="mx-auto mb-5 h-32 w-auto opacity-95"
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

      <p className="text-sm text-white">
        Hero background video courtesy of Pixabay (creator: FlickrVideos)
      </p>

      <button
        type="button"
        aria-pressed={snakeCursorEnabled}
        onClick={toggleSnakeCursor}
        className="mt-5 hidden rounded-md bg-orange-600 px-4 py-1.5 font-mono text-xs tracking-wide text-white transition hover:bg-orange-500 md:inline-block"
      >
        {snakeCursorEnabled ? "Disable Snake Cursor" : "Hsssssssss"}
      </button>
    </footer>
  );
}
