"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function Button({
  className = "",
  children,
  variant = "default",
  size = "md",
  ...props
}) {
  return (
    <button className={cn(className)} {...props}>
      {children}
    </button>
  );
}
