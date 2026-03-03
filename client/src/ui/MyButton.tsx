import * as React from "react";

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  variant: "blue" | "gray";
};

export function MyButton({ onClick, children, variant }: Props) {
  const basedStyles =
    "w-full cursor-pointer py-4.5 font-bold rounded-2xl transition-colors uppercase tracking-wider text-[12px]";

  const variants = {
    blue: "bg-[#2662F3] hover:bg-[#709AFE] active:bg-[#1450E0] text-white",
    gray: "bg-gray-200 hover:bg-gray-100 active:bg-gray-200 text-gray-900",
  };

  return (
    <button onClick={onClick} className={`${basedStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
}
