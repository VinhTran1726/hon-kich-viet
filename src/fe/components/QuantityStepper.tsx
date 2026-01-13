"use client";
import { Button } from "./Button";

export function QuantityStepper({ qty, onChange }: { qty: number; onChange: (next: number) => void }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:8 }}>
      <Button type="button" aria-label="Giảm" onClick={() => onChange(Math.max(1, qty - 1))} style={{ padding:"8px 12px" }}>–</Button>
      <div style={{ minWidth:42, textAlign:"center", padding:"8px 10px", borderRadius:12, border:"1px solid var(--line)", background:"rgba(255,255,255,.02)", fontWeight:900 }}>
        {qty}
      </div>
      <Button type="button" aria-label="Tăng" onClick={() => onChange(Math.min(99, qty + 1))} style={{ padding:"8px 12px" }}>+</Button>
    </div>
  );
}
