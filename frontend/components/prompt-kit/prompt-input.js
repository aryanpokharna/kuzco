"use client";

import React from "react";

export function PromptInput({
  className = "",
  children,
  isLoading,
  value,
  onValueChange,
  onSubmit,
}) {
  return <div className={className}>{children}</div>;
}

export function PromptInputTextarea({ className = "", placeholder }) {
  return <div className={className} data-placeholder={placeholder} />;
}

export function PromptInputActions({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

export function PromptInputAction({ className = "", children, tooltip }) {
  return <div className={className}>{children}</div>;
}
