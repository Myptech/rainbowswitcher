import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const themes = ["light", "dark", "purple", "green", "orange"];
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    document.body.className = `${themes[themeIndex]}-mode`;
  }, [themeIndex]);

  const changeTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);
  const [error, setError] = useState("");

  const generateRandom = () => {
    const min = Math.min(Number(n1), Number(n2));
    const max = Math.max(Number(n1), Number(n2));

    if (isNaN(min) || isNaN(max)) {
      setError("Введите корректные числа!");
      setRandomNumber(null);
      return;
    }

    if (min === max) {
      setError("Числа не должны быть одинаковыми!");
      setRandomNumber(null);
      return;
    }

    setError("");
    setRandomNumber(Math.floor(Math.random() * (max - min + 1)) + min);
  };

  return (
    <div className="container">
      <button className="theme-toggle" onClick={changeTheme}>
        🌈 Сменить тему ({themes[themeIndex]})
      </button>

      <div className="card">
        <h1>🎲 Генератор случайных чисел</h1>

        <input
          type="number"
          placeholder="Введите N1"
          value={n1}
          onChange={(e) => setN1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Введите N2"
          value={n2}
          onChange={(e) => setN2(e.target.value)}
        />

        <button onClick={generateRandom}>Сгенерировать</button>

        {error && <div className="error">{error}</div>}
        {randomNumber !== null && <div className="random-number">{randomNumber}</div>}
      </div>
    </div>
  );
}
