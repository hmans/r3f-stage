import React from "react"
import tunnel from "../lib/tunnel-rat"

export const uiPortal = tunnel()
export const navigationPortal = tunnel()

export const UI = () => {
  return (
    <>
      <div className="panel" style={{ top: 0, left: 0 }}>
        <navigationPortal.Out />
      </div>

      <uiPortal.Out />
    </>
  )
}
