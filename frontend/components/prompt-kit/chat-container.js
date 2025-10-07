"use client";

import React from "react";

export function ChatContainerRoot({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

export function ChatContainerContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}
