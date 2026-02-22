'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import useSoundLib from 'use-sound';

interface SoundContextType {
  isSoundEnabled: boolean;
  toggleSound: () => void;
  isMusicPlaying: boolean;
  toggleMusic: () => void;
  playSound: (type: 'click' | 'touch' | 'success' | 'pop') => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

// Sound assets - using files from public/sounds/
const SOUND_ASSETS = {
  click: '/sounds/click.mp3',
  touch: '/sounds/touch.mp3',
  success: '/sounds/success.mp3',
  pop: '/sounds/pop.mp3',
  music: '/sounds/lofi.mp3',
};

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  // use-sound hooks from the library
  const [playClick] = useSoundLib(SOUND_ASSETS.click, { volume: 0.4 });
  const [playTouch] = useSoundLib(SOUND_ASSETS.touch, { volume: 0.4 });
  const [playSuccess] = useSoundLib(SOUND_ASSETS.success, { volume: 0.4 });
  const [playPop] = useSoundLib(SOUND_ASSETS.pop, { volume: 0.4 });
  const [playMusic, { stop: stopMusic }] = useSoundLib(SOUND_ASSETS.music, { 
    volume: 0.2,
    loop: true
  });

  useEffect(() => {
    const storedSound = localStorage.getItem('sound-enabled');
    if (storedSound !== null) {
      setIsSoundEnabled(storedSound === 'true');
    }
    
    const storedMusic = localStorage.getItem('music-enabled');
    if (storedMusic === 'true') {
      setIsMusicPlaying(true);
      playMusic();
    }
  }, [playMusic]);

  const playSound = useCallback((type: 'click' | 'touch' | 'success' | 'pop') => {
    if (!isSoundEnabled) return;
    
    switch (type) {
      case 'click': playClick(); break;
      case 'touch': playTouch(); break;
      case 'success': playSuccess(); break;
      case 'pop': playPop(); break;
    }
  }, [isSoundEnabled, playClick, playTouch, playSuccess, playPop]);

  const toggleSound = useCallback(() => {
    setIsSoundEnabled(prev => {
      const newState = !prev;
      localStorage.setItem('sound-enabled', String(newState));
      
      if (newState) {
        playPop();
      } else {
        playTouch();
      }
      return newState;
    });
  }, [playPop, playTouch]);

  const toggleMusic = useCallback(() => {
    setIsMusicPlaying(prev => {
      const newState = !prev;
      localStorage.setItem('music-enabled', String(newState));
      if (newState) {
        playMusic();
      } else {
        stopMusic();
      }
      return newState;
    });
  }, [playMusic, stopMusic]);

  // Site-wide link/button click sound
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      if (!isSoundEnabled) return;
      
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button');
      
      if (interactive) {
        // Skip if it has the data-no-click-sound attribute
        if (interactive.hasAttribute('data-no-click-sound')) {
          return;
        }
        playSound('click');
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [isSoundEnabled, playSound]);

  return (
    <SoundContext.Provider value={{ isSoundEnabled, toggleSound, isMusicPlaying, toggleMusic, playSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};
