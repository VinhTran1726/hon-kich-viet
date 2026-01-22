export function WavyDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{ width: '100%', height: '24px' }}
    >
      <path
        d="M0 12C50 6 100 18 150 12C200 6 250 18 300 12C350 6 400 18 450 12C500 6 550 18 600 12"
        stroke="var(--teal)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M0 18C40 15 80 21 120 18C160 15 200 21 240 18C280 15 320 21 360 18C400 15 440 21 480 18C520 15 560 21 600 18"
        stroke="var(--teal)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

export function CloudDecor({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{ width: '100%', height: '40px' }}
    >
      <path
        d="M10 20C20 12 35 8 50 15C65 22 75 28 95 25C115 22 130 18 150 20C170 22 185 28 205 25C225 22 240 15 260 18C280 21 295 28 320 26C345 24 365 18 390 20C415 22 435 28 460 25C485 22 505 15 530 18C555 21 575 28 590 25"
        stroke="var(--teal)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M5 32C15 26 28 24 42 30C56 36 68 38 85 36C102 34 118 30 135 32C152 34 168 38 185 36C202 34 218 28 235 30C252 32 268 38 290 36C312 34 330 28 352 30C374 32 392 38 415 36C438 34 458 28 480 30C502 32 522 38 545 36C568 34 585 30 595 32"
        stroke="var(--teal)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

export function FishDecor({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="80"
      height="60"
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Fish body */}
      <path
        d="M10 30C10 20 20 15 30 15C40 15 50 20 55 30C50 40 40 45 30 45C20 45 10 40 10 30Z"
        stroke="var(--ink-beige)"
        strokeWidth="2"
        fill="none"
      />
      {/* Tail */}
      <path
        d="M55 30L65 20L70 30L65 40L55 30Z"
        stroke="var(--ink-beige)"
        strokeWidth="2"
        fill="none"
      />
      {/* Top fin */}
      <path
        d="M30 15L35 5L40 15"
        stroke="var(--ink-beige)"
        strokeWidth="2"
        fill="none"
      />
      {/* Bottom fin */}
      <path
        d="M30 45L35 55L40 45"
        stroke="var(--ink-beige)"
        strokeWidth="2"
        fill="none"
      />
      {/* Eye */}
      <circle cx="25" cy="28" r="2" fill="var(--ink-beige)" />
      {/* Waves around fish */}
      <path
        d="M5 25C8 23 12 23 15 25"
        stroke="var(--ink-beige)"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M5 35C8 37 12 37 15 35"
        stroke="var(--ink-beige)"
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  );
}
