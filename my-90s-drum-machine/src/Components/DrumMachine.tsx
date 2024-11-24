import React, { useState } from "react";


const DrumMachine: React.FC = () => {
  const [display, setDisplay] = useState("Press a button or a key!");

  const sounds = [
    { key: "Q", sound: "/assets/Q.mp3" },
    { key: "W", sound: "/assets/W.mp3" },
    { key: "E", sound: "/assets/E.mp3" },
    { key: "A", sound: "/assets/A.mp3" },
    { key: "S", sound: "/assets/S.mp3" },
    { key: "D", sound: "/assets/D.mp3" },
    { key: "Z", sound: "/assets/Z.mp3" },
    { key: "X", sound: "/assets/X.mp3" },
    { key: "C", sound: "/assets/C.mp3" },
  ];

  const playSound = (key: string) => {
    const audio = document.getElementById(key) as HTMLAudioElement;
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
    setDisplay(getMessage(key));
  };

  const getMessage = (key: string) => {
    const messages: Record<string, string> = {
      Q: "Totally Rad!",
      W: "Booyah!",
      E: "Awesome!",
      A: "Cool Beans!",
      S: "Gnarly!",
      D: "Tubular!",
      Z: "Groovy!",
      X: "Wicked!",
      C: "Funky!",
    };
    return messages[key] || "Hit it!";
  };

  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      playSound(key);
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <h1 className="title">90s Drum Machine</h1>
      <div className="display">{display}</div>
      <div>
        {sounds.map((sound) => (
          <button
            key={sound.key}
            className="button"
            onClick={() => playSound(sound.key)}
          >
            {sound.key}
            <audio id={sound.key} src={sound.sound}></audio>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
