"use client";

import { useEffect, useState } from "react";

const formatTime = () => new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata" }).format(new Date());

export default function Header() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    setTime(formatTime());
    const timer = window.setInterval(() => setTime(formatTime()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  return <header className="topbar" aria-label="Portfolio status"><span>New Delhi, India</span><span className="topbar-time"><i />{time}</span></header>;
}
