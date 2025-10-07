"use client";

import React from "react";

export function Sidebar({ children }) {
  return <aside>{children}</aside>;
}

export function SidebarHeader({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

export function SidebarContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

export function SidebarGroup({ children }) {
  return <div>{children}</div>;
}

export function SidebarGroupLabel({ children }) {
  return <div>{children}</div>;
}

export function SidebarMenu({ children }) {
  return <div>{children}</div>;
}

export function SidebarMenuButton({ children }) {
  return <button className="w-full text-left">{children}</button>;
}

export function SidebarProvider({ children }) {
  return <div className="flex">{children}</div>;
}

export function SidebarInset({ children }) {
  return <div className="flex-1">{children}</div>;
}

export function SidebarTrigger({ className = "" }) {
  return <button className={className} aria-label="Toggle sidebar" />;
}
