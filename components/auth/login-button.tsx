"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton: React.FC<LoginButtonProps> = ({
  children,
  mode = "redirect",
  asChild,
}) => {
  const router = useRouter();

  const handleClickBtn = (): void => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO; Implement modal</span>;
  }

  return (
    <span className="cursor-pointer" onClick={handleClickBtn}>
      {children}
    </span>
  );
};
