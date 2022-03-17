export interface NoisyBgProps {}

export function NoisyBg(props: NoisyBgProps) {
  return (
    <div
      className="-z-50 m-0 animate-bgAnimation"
      style={{
        position: "fixed",
        top: "-50%",
        left: "-50%",
        right: "-50%",
        bottom: "-50%",
        width: "200%",
        height: "200vh",
        background:
          "transparent url(http://assets.iceable.com/img/noise-transparent.png) repeat 0 0",
        backgroundRepeat: "repeat",
        opacity: ".9",
        visibility: "visible",
        backgroundColor: "#111111",
      }}
    ></div>
  )
}
