"use client";

import { useEffect, useRef, useState } from "react";

export function MusicPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [needsStart, setNeedsStart] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.play().then(() => setNeedsStart(false)).catch(() => setNeedsStart(true));
  }, []);

  async function startMusic() {
    const audio = audioRef.current;
    if (!audio) return;
    await audio.play();
    setNeedsStart(false);
  }

  return (
    <>
      <audio ref={audioRef} src={src} autoPlay loop preload="auto" onPlay={() => setNeedsStart(false)} />
      {needsStart && (
        <button className="music-button" type="button" onClick={startMusic} aria-label="Play wedding music">
          ♫ Play music
        </button>
      )}
    </>
  );
}
