const paths = {
  mail: 'M3 5.5h18v13H3z M3.5 6l8.5 7 8.5-7',
  file: 'M6 2.5h8l4 4v15H6z M14 2.5v5h4 M9 12h6 M9 15.5h6',
  pin: 'M18.5 10c0 5-6.5 11-6.5 11S5.5 15 5.5 10a6.5 6.5 0 1 1 13 0z M14.2 10a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0z',
  layers: 'm12 3 9 5-9 5-9-5 9-5z M3 12l9 5 9-5 M3 16l9 5 9-5',
  grid: 'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z',
  code: 'm8 7-5 5 5 5 M16 7l5 5-5 5 M14 4l-4 16',
  menu: 'M3 7h18 M3 12h18 M3 17h18',
  close: 'm5 5 14 14 M19 5 5 19',
  download: 'M12 3v12 m-5-5 5 5 5-5 M4 16v5h16v-5',
  book: 'M3 4h6q3 0 3 3 0-3 3-3h6v14h-6q-3 0-3 3 0-3-3-3H3z M12 7v14',
  play: 'm7 4 13 8-13 8z',
  step: 'm4 5 12 7-12 7z M20 5v14',
  reset: 'M3 4v6h6 M3.5 10a8.5 8.5 0 1 1 1 7',
  network: 'M4 5h4v4H4z M16 5h4v4h-4z M10 16h4v4h-4z M8 7h8 M6 9l5 7 M18 9l-5 7',
} as const

export default function Icon({ name }: { name: keyof typeof paths }) {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  )
}
