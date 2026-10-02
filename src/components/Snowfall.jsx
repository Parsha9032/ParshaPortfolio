const FLAKES = Array.from({ length: 24 }, (_, index) => ({
  left: `${(index * 47) % 100}%`,
  size: `${8 + (index % 5)}px`,
  duration: `${14 + ((index * 7) % 20)}s`,
  rotationDuration: `${6 + (index % 8)}s`,
  delay: `${-((index * 11) % 30)}s`,
  drift: `${((index % 7) - 3) * 9}px`,
  type: index % 2 === 0 ? 'star' : 'dendrite',
}));

const BRANCH_ROTATIONS = [0, 60, 120, 180, 240, 300];

export default function Snowfall() {
  return (
    <div className="snowfall" aria-hidden="true">
      {FLAKES.map((flake, index) => (
        <span
          key={index}
          className="snowfall-flake"
          style={{
            '--snow-left': flake.left,
            '--snow-size': flake.size,
            '--snow-duration': flake.duration,
            '--snow-rotation-duration': flake.rotationDuration,
            '--snow-delay': flake.delay,
            '--snow-drift': flake.drift,
          }}
        >
          <svg
            className={`snowfall-crystal snowfall-crystal--${flake.type}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {flake.type === 'star' ? (
              <path d="M12 2v20M3.34 7l17.32 10M3.34 17 20.66 7" />
            ) : (
              BRANCH_ROTATIONS.map((rotation) => (
                <g key={rotation} transform={`rotate(${rotation} 12 12)`}>
                  <path d="M12 2v10M12 5 9 2M12 5l3-3M12 8l-2-2M12 8l2-2" />
                </g>
              ))
            )}
          </svg>
        </span>
      ))}
    </div>
  );
}
