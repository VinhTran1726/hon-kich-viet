export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display:"inline-flex", alignItems:"center", padding:"7px 12px", borderRadius:999,
      border:"1px solid var(--line)", background:"rgba(212,175,55,.08)",
      color:"var(--gold)", fontSize:12.5, letterSpacing:0.5, fontWeight:600
    }}>
      {children}
    </span>
  );
}
