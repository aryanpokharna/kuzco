"use client";

import React from "react";

export function Message({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

export function MessageContent({ className = "", children, markdown }) {
  return <div className={className}>{children}</div>;
}

export function MessageActions({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

export function MessageAction({
  className = "",
  children,
  tooltip,
  delayDuration,
}) {
  return <div className={className}>{children}</div>;
}
