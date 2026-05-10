import { useEffect, useState } from "react";
import s from "./EffectBox.module.css";

export const EffectBox = () => {
  const [count, setCount] = useState<number>(0);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (msg: string) => {
    setLogs((prev) =>
      [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev].slice(0, 5),
    );
  };

  const changeCount = () => setCount((prev) => prev + 1);

  useEffect(() => {
    const timer = setTimeout(() => {
      addLog("✅ componentDidMount: Компонент монтировался в DOM");
    }, 0);

    return () => {
      clearTimeout(timer);
      alert("❌ componentWillUnmount: Выполняется очистка!");
    };
  }, []);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        addLog(`🔄 componentDidUpdate: Состояние изменилось на ${count}`);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div className={s.wrapper}>
      <div className={s.controls}>
        <p className={s.text}>
          Counter: <strong>{count}</strong>
          <button className={s.updateBtn} onClick={changeCount}>
            Update
          </button>
        </p>
      </div>
      <div className={s.logWindow}>
        <p className={s.logTitle}>Log events:</p>
        {logs.map((log, i) => (
          <div key={i} className={s.logEntry}>
            {log}
          </div>
        ))}
      </div>
    </div>
  );
};
