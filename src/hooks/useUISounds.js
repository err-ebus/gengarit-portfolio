import useSound from 'use-sound';

// Direct MP3 links for subtle UI sound effects
const HOVER_SOUND_URL = 'https://www.soundjay.com/buttons/sounds/button-50.mp3'; // Subtle Tick
const CLICK_SOUND_URL = 'https://www.soundjay.com/mechanical/sounds/mechanical-clonk-1.mp3'; // Mechanical Lock

export const useUISounds = () => {
  const [playHover] = useSound(HOVER_SOUND_URL, { volume: 0.15 });
  const [playClick] = useSound(CLICK_SOUND_URL, { volume: 0.2 });

  return { playHover, playClick };
};
