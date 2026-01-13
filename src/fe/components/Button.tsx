"use client";
import React from "react";

export function Button({
  variant = "ghost",
  full,
  style,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" | "danger"; full?: boolean }) {
  const base: React.CSSProperties = {
    borderRadius: 999,
    padding: "11px 16px",
    border: "1px solid var(--line)",
    background: "transparent",
    color: "var(--text)",
    cursor: "pointer",
    fontWeight: 600,
    letterSpacing: 0.3,
    width: full ? "100%" : undefined,
    transition: "all 0.2s ease",
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: { background: "linear-gradient(180deg, var(--red2), var(--red))", borderColor: "rgba(212,175,55,.20)", boxShadow: "0 10px 32px var(--redGlow)" },
    ghost: { background: "rgba(212,175,55,.04)", borderColor: "var(--line)" },
    danger: { background: "rgba(184,46,46,.15)", borderColor: "rgba(184,46,46,.40)" },
  };

  return <button {...props} style={{ ...base, ...variants[variant], ...style }} />;
}
