import { LocationId, locations } from '../../data/events'
import vietnamMapImg from '../../assets/map/ban-do-viet-nam-22.jpg'

const markers: { id: LocationId; x: number; y: number }[] = [
  { id: 'dienbienphu', x: 155, y: 310 },
  { id: 'biengioi', x: 670, y: 190 },
  { id: 'vietbac', x: 545, y: 250 },
  { id: 'hanoi', x: 545, y: 420 },
]

interface Props {
  selected: LocationId | null
  onSelect: (id: LocationId) => void
  activeLocations?: LocationId[]
}

export default function InteractiveMap({ selected, onSelect, activeLocations }: Props) {
  return (
    <svg viewBox="0 0 1000 605" className="w-full h-auto max-h-[480px]">
      <defs>
        <filter id="map-tone">
          <feColorMatrix type="saturate" values="0.3" />
          <feComponentTransfer>
            <feFuncR type="linear" slope="0.7" intercept="0.05" />
            <feFuncG type="linear" slope="0.65" intercept="0.04" />
            <feFuncB type="linear" slope="0.55" intercept="0.03" />
          </feComponentTransfer>
        </filter>
      </defs>
      <image
        href={vietnamMapImg}
        x="0" y="0" width="1000" height="605"
        preserveAspectRatio="xMidYMid slice"
        filter="url(#map-tone)"
        opacity={0.85}
      />
      {markers.map(m => {
        const active = selected === m.id
        const isActivePeriod = !activeLocations || activeLocations.includes(m.id)
        return (
          <g
            key={m.id}
            onClick={() => onSelect(m.id)}
            className="cursor-pointer"
            role="button"
            aria-label={locations[m.id].name}
            opacity={isActivePeriod ? 1 : 0.3}
          >
            {active && <circle cx={m.x} cy={m.y} r={35} className="fill-amber-400/20 animate-ping-slow" />}
            <circle cx={m.x} cy={m.y} r={18} className={active ? 'fill-amber-400' : 'fill-amber-600'} stroke="#0c0a08" strokeWidth={5} />
            <text
              x={m.x}
              y={m.y - 35}
              textAnchor="middle"
              className={`text-[28px] font-bold uppercase tracking-wide ${active ? 'fill-amber-300' : 'fill-stone-300'}`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {locations[m.id].name}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
