'use client'

import * as React from 'react'

const GOLD = '#D4A843'

const CURVE: [number, number, number, number, number] = [62, 69, 75, 78, 80]
const CURRENT = 62
const PROJECTED = 80

export function VitalityCurve() {
  const ref = React.useRef<HTMLDivElement>(null)
  const [phase, setPhase] = React.useState(0)
  const gradientId = React.useId().replace(/:/g, '')

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          obs.disconnect()
          const timers = [
            setTimeout(() => setPhase(1), 100),
            setTimeout(() => setPhase(2), 400),
            setTimeout(() => setPhase(3), 800),
            setTimeout(() => setPhase(4), 1200),
          ]
          return () => timers.forEach(clearTimeout)
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const W = 420
  const H = 200
  const PL = 40
  const PR = 50
  const PT = 36
  const PB = 40
  const plotW = W - PL - PR
  const plotH = H - PT - PB

  const yMin = Math.max(0, CURRENT - 12)
  const yMax = Math.min(100, PROJECTED + 12)
  const xPos = (i: number) => PL + (i / 4) * plotW
  const yPos = (val: number) => PT + (1 - (val - yMin) / (yMax - yMin)) * plotH

  const pts = CURVE.map((v, i) => ({ x: xPos(i), y: yPos(v) }))

  let linePath = `M${pts[0].x},${pts[0].y}`
  for (let i = 1; i < pts.length; i++) {
    const cpx = (pts[i - 1].x + pts[i].x) / 2
    linePath += ` C${cpx},${pts[i - 1].y} ${cpx},${pts[i].y} ${pts[i].x},${pts[i].y}`
  }
  const areaPath = `${linePath} L${pts[4].x},${yPos(yMin)} L${pts[0].x},${yPos(yMin)} Z`
  const xLabels = ['Start', 'Month 1', 'Month 2', 'Month 3', 'Month 4']

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center h-full w-full px-4 py-6 lg:py-0"
    >
      <p className="text-[13px] font-semibold tracking-wide text-white/60 mb-3 uppercase">
        Vitality change over time
      </p>

      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block', overflow: 'visible', maxWidth: 380 }}>
        <defs>
          <linearGradient id={`${gradientId}-fill`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={GOLD} stopOpacity="0.25" />
            <stop offset="100%" stopColor={GOLD} stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {[0.25, 0.5, 0.75].map(frac => {
          const gridY = PT + frac * plotH
          return (
            <line
              key={frac}
              x1={PL} y1={gridY} x2={W - PR} y2={gridY}
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          )
        })}

        <path
          d={areaPath}
          fill={`url(#${gradientId}-fill)`}
          opacity={phase >= 2 ? 1 : 0}
          style={{ transition: 'opacity 600ms ease-out' }}
        />

        <path
          d={linePath}
          fill="none"
          stroke={GOLD}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={800}
          strokeDashoffset={phase >= 2 ? 0 : 800}
          style={{ transition: 'stroke-dashoffset 1200ms ease-out' }}
        />

        {pts.map((pt, i) => (
          <g key={i}>
            <circle
              cx={pt.x} cy={pt.y}
              r={i === 4 ? 6 : 4.5}
              fill="#FFFFFF"
              stroke={GOLD}
              strokeWidth="2"
              opacity={phase >= 2 ? 1 : 0}
              style={{ transition: `opacity 200ms ease-out ${i * 150}ms` }}
            />
            {i === 4 && phase >= 3 && (
              <circle cx={pt.x} cy={pt.y} r={6} fill="#FFFFFF" stroke={GOLD} strokeWidth="2">
                <animate attributeName="r" values="6;10;6" dur="1.5s" repeatCount="3" />
                <animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="3" />
              </circle>
            )}
          </g>
        ))}

        <text
          x={pts[0].x} y={pts[0].y - 14}
          textAnchor="middle"
          style={{
            fontSize: '13px', fontWeight: 600, fill: 'rgba(255,255,255,0.5)',
            opacity: phase >= 2 ? 1 : 0, transition: 'opacity 200ms ease-out',
          }}
        >
          {CURRENT}%
        </text>

        <text
          x={pts[4].x} y={pts[4].y - 18}
          textAnchor="middle"
          style={{
            fontSize: '15px', fontWeight: 700, fill: '#FFFFFF',
            opacity: phase >= 3 ? 1 : 0, transition: 'opacity 300ms ease-out',
          }}
        >
          {PROJECTED}%
        </text>

        {xLabels.map((label, i) => (
          <text
            key={label}
            x={xPos(i)} y={H - 6}
            textAnchor="middle"
            style={{ fontSize: '11px', fill: 'rgba(255,255,255,0.4)', fontWeight: 500 }}
          >
            {label}
          </text>
        ))}
      </svg>

      <p
        className="text-[13px] text-white/50 mt-4 text-center"
        style={{ opacity: phase >= 4 ? 1 : 0, transition: 'opacity 400ms ease-out' }}
      >
        +{PROJECTED - CURRENT}% projected improvement over 4 months
      </p>
    </div>
  )
}
