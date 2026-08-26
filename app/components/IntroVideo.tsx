"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

// Click-to-load YouTube embed for the Verana introduction video. The poster
// frame is served from this site, so no request leaves for YouTube until the
// visitor actually presses play; the iframe then loads via the no-cookie host.
const VIDEO_ID = "qymbOJ753aw";
const VIDEO_TITLE = "Verana Introduction";

export default function IntroVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="card overflow-hidden">
      <div className="relative aspect-video w-full bg-surface-2">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
            title={VIDEO_TITLE}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${VIDEO_TITLE}`}
            className="group absolute inset-0 h-full w-full cursor-pointer"
          >
            <img
              src="/images/verana-intro-poster.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/10" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
              <FontAwesomeIcon icon={faPlay} className="ml-1 h-6 w-6 sm:h-7 sm:w-7" />
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
