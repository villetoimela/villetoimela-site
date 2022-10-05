export interface BgProps {}

export function Bg(props: BgProps) {
  return (
    <div className="fixed -z-50 h-screen w-screen bg-gradient-to-tr from-black to-gray-900 opacity-95"></div>
  )
}
