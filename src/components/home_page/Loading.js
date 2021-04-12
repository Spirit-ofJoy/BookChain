import React, { useEffect, useState } from "react";
import "./Loading.css";
import m from './images/ether.gif'

function Loading({ time, confirmation }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, (time + 1) * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (loading)
    return (
      <div className="loader " style={{ animation: `fadeOut 0.3s`, animationDelay: `${time}s`}} >
        <img src={m} alt="bh" height={800} width={600} style={{ animation: `fadeOut 2s`, animationDelay: `${time}s` }} id='bh' />
      </div>
    );
  return null;
}

export default Loading;
