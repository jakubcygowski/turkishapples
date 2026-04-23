export function TurkishFlag({
  className = "",
  width = 22,
  height = 15,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 20"
      role="img"
      aria-label="Flag of Türkiye"
      className={`rounded-[2px] shadow-sm ${className}`}
    >
      <rect width="30" height="20" fill="#E30A17" />
      <circle cx="11.5" cy="10" r="4.5" fill="#FFFFFF" />
      <circle cx="13" cy="10" r="3.6" fill="#E30A17" />
      <polygon
        points="17.5,8.2 17.905,9.444 19.212,9.444 18.153,10.212 18.558,11.456 17.5,10.688 16.442,11.456 16.847,10.212 15.788,9.444 17.095,9.444"
        fill="#FFFFFF"
      />
    </svg>
  );
}
