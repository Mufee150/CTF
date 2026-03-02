#!/usr/bin/env python3
"""
Morse Code Audio Generator for CTF Challenge
Generates a WAV file with morse code for "bruteforceme"
"""

import wave
import struct
import math

# Morse code dictionary
MORSE_CODE = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
    '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.', ' ': ' '
}

def text_to_morse(text):
    """Convert text to morse code"""
    morse = []
    for char in text.upper():
        if char in MORSE_CODE:
            morse.append(MORSE_CODE[char])
    return ' '.join(morse)

def generate_tone(frequency, duration, sample_rate=44100):
    """Generate a sine wave tone"""
    num_samples = int(sample_rate * duration)
    samples = []
    for i in range(num_samples):
        sample = int(32767 * math.sin(2 * math.pi * frequency * i / sample_rate))
        samples.append(sample)
    return samples

def generate_silence(duration, sample_rate=44100):
    """Generate silence"""
    num_samples = int(sample_rate * duration)
    return [0] * num_samples

def morse_to_audio(morse_code, output_file='morse.wav'):
    """Convert morse code to audio WAV file"""
    # Timing units (in seconds)
    DOT_DURATION = 0.1      # Duration of a dot
    DASH_DURATION = 0.3     # Duration of a dash (3x dot)
    SYMBOL_GAP = 0.1        # Gap between dots/dashes
    LETTER_GAP = 0.3        # Gap between letters
    WORD_GAP = 0.7          # Gap between words
    
    FREQUENCY = 800         # Tone frequency in Hz
    SAMPLE_RATE = 44100     # Sample rate
    
    # Generate audio samples
    audio_samples = []
    
    for i, char in enumerate(morse_code):
        if char == '.':
            audio_samples.extend(generate_tone(FREQUENCY, DOT_DURATION, SAMPLE_RATE))
            audio_samples.extend(generate_silence(SYMBOL_GAP, SAMPLE_RATE))
        elif char == '-':
            audio_samples.extend(generate_tone(FREQUENCY, DASH_DURATION, SAMPLE_RATE))
            audio_samples.extend(generate_silence(SYMBOL_GAP, SAMPLE_RATE))
        elif char == ' ':
            # Check if next char is also space (word boundary)
            if i + 1 < len(morse_code) and morse_code[i + 1] == ' ':
                audio_samples.extend(generate_silence(WORD_GAP, SAMPLE_RATE))
            else:
                audio_samples.extend(generate_silence(LETTER_GAP, SAMPLE_RATE))
    
    # Write to WAV file
    with wave.open(output_file, 'w') as wav_file:
        # Set parameters: nchannels, sampwidth, framerate, nframes, comptype, compname
        wav_file.setparams((1, 2, SAMPLE_RATE, len(audio_samples), 'NONE', 'not compressed'))
        
        # Write audio data
        for sample in audio_samples:
            wav_file.writeframes(struct.pack('h', sample))
    
    print(f"✅ Morse code audio generated: {output_file}")
    print(f"   Message: {text}")
    print(f"   Morse: {morse_code}")
    print(f"   Duration: {len(audio_samples) / SAMPLE_RATE:.2f} seconds")

if __name__ == '__main__':
    # Generate morse code for "bruteforceme"
    text = "bruteforceme"
    morse = text_to_morse(text)
    
    print(f"Converting '{text}' to morse code...")
    print(f"Morse: {morse}")
    print()
    
    # Generate audio file
    output_path = '../frontend/public/audio/circe.wav'
    
    try:
        morse_to_audio(morse, output_path)
        print(f"\n🎵 Audio file ready for Circe challenge!")
        print(f"   Path: {output_path}")
        print(f"\n💡 Players need to:")
        print(f"   1. Inspect page source")
        print(f"   2. Find hidden audio element")
        print(f"   3. Download/listen to morse code")
        print(f"   4. Decode to get: {text}")
    except Exception as e:
        print(f"❌ Error generating audio: {e}")
        print(f"\n📝 Manual morse code: {morse}")
        print(f"   Use online morse code generator if needed")
