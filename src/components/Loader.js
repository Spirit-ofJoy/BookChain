import React, { useEffect, useState } from "react";
import "./Loader.css";
import m from '../images/ether.gif'



function Loader({ time, confirmation }) {
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
      <div
        className="load d-flex align-items-center justify-content-center"
        style={{ animation: `fadeOut 2s`, animationDelay: `${time}s` }}
      >
        <img src={m} alt="bh" height={400} width={400} style={{ animation: `fadeOut 2s`, animationDelay: `${time}s` }} id='bh' />
        {confirmation && (
          <h3
            className="text-center"
            style={{ color: "white", margin: "auto auto" }}
          >
            Loading ...!
          </h3>
        )}
      </div>
     
    );
  return null;
}

export default Loader;
