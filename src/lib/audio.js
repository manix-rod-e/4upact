// Audio utility for Zen sound cues

class AudioController {
  constructor() {
    if (typeof window !== 'undefined') {
      // Light bamboo/wood stick click generated synthetically using Web Audio API
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playZenClick() {
    if (!this.audioContext) return;
    
    // Synthesize a very gentle 'marimba/bongo' sound
    const osc = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, this.audioContext.currentTime); // Wood knock frequency
    osc.frequency.exponentialRampToValueAtTime(100, this.audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.5, this.audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.15); // Quick decay
    
    osc.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    osc.start();
    osc.stop(this.audioContext.currentTime + 0.2);
  }

  playZenSuccess() {
    if (!this.audioContext) return;
    
    // Synthesize a soft flute/chime sound
    const osc = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(523.25, this.audioContext.currentTime); // C5
    osc.frequency.setValueAtTime(659.25, this.audioContext.currentTime + 0.1); // E5
    
    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, this.audioContext.currentTime + 0.1);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 1.2); // Long tail
    
    osc.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    osc.start();
    osc.stop(this.audioContext.currentTime + 1.2);
  }
}

export const audioCues = new AudioController();
