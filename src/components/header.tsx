"use client";

import { useEffect, useState } from "react";

const getTime = () => new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata" }).format(new Date());

export default function Header() {
  const [time, setTime] = useState("--:--");
  useEffect(() => { setTime(getTime()); const id = window.setInterval(() => setTime(getTime()), 30_000); return () => window.clearInterval(id); }, []);
  return (
    <time className="local-time" dateTime={time} aria-label="Local time in New Delhi">
      {time}
    </time>
  );
}
