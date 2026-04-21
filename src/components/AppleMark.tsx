export function AppleMark({
  className = "",
  size = 28,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M20 10.5c1.6-3.5 4.3-5.4 7.2-5.6-.2 2.9-2 5.4-5 6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M28 12.5c3.8 0 7 3.4 7 8.4 0 6.8-4.5 14.1-9 14.1-1.7 0-3-0.8-6-0.8s-4.3 0.8-6 0.8c-4.5 0-9-7.3-9-14.1 0-5 3.2-8.4 7-8.4 2.6 0 4 1.2 8 1.2s5.4-1.2 8-1.2Z"
        fill="currentColor"
      />
    </svg>
  );
}
