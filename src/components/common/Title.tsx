import React from "react";

export default function Title({ title }: { title: string }) {
  return (
    <div className="text-[#64BDFF] text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
      {title}
    </div>
  );
}
