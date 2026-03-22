import { useCallback, useRef } from 'react';

// Highly reliable, direct MP3 links from a stable CDN
const HOVER_SOUND_URL = 'https://raw.githubusercontent.com/Shadowdev1174/err-ebus-assets/main/hover.mp3'; 
const CLICK_SOUND_URL = 'https://raw.githubusercontent.com/Shadowdev1174/err-ebus-assets/main/click.mp3';

// Fallback to generic system-like sounds if the above fail
const FALLBACK_HOVER = 'https://www.soundjay.com/buttons/sounds/button-50.mp3';
const FALLBACK_CLICK = 'https://www.soundjay.com/buttons/sounds/button-09.mp3';

export const useUISounds = () => {
  const hoverAudio = useRef(new Audio(HOVER_SOUND_URL));
  const clickAudio = useRef(new Audio(CLICK_SOUND_URL));

  // Set volumes
  hoverAudio.current.volume = 0.15;
  clickAudio.current.volume = 0.2;

  const playHover = useCallback(() => {
    // Clone and play to allow rapid overlapping sounds
    const sound = hoverAudio.current.cloneNode();
    sound.volume = 0.15;
    sound.play().catch(() => {
        // Silent catch for browser autoplay restrictions
        const fallback = new Audio(FALLBACK_HOVER);
        fallback.volume = 0.1;
        fallback.play().catch(() => {});
    });
  }, []);

  const playClick = useCallback(() => {
    const sound = clickAudio.current.cloneNode();
    sound.volume = 0.2;
    sound.play().catch(() => {
        const fallback = new Audio(FALLBACK_CLICK);
        fallback.volume = 0.15;
        fallback.play().catch(() => {});
    });
  }, []);

  return { playHover, playClick };
};
