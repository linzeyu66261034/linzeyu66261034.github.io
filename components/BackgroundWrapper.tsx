"use client";

import { useEffect, useState } from "react";
import { getRandomBackground } from "@/lib/data";

interface BackgroundWrapperProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
}

export default function BackgroundWrapper({
  children,
  className = "",
  backgroundImage,
}: BackgroundWrapperProps) {
  const [bgImage, setBgImage] = useState<string>("");

  useEffect(() => {
    setBgImage(backgroundImage || getRandomBackground());
  }, [backgroundImage]);

  if (!bgImage) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`relative ${className}`}>
      {/* Background image with overlay */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm" />
      </div>
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
