"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
  label: string;
  href: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ label, href }) => {
  return (
    <Button className="font-normal" size="sm" variant="link" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
