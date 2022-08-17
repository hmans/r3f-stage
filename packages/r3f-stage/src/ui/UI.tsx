import React from "react"
import portal from "../lib/portal"

export const uiPortal = portal()
export const navigationPortal = portal()

export const UI = () => {
  return (
    <>
      <div className="panel" style={{ top: 0, left: 0 }}>
        <navigationPortal.View />
      </div>

      <uiPortal.View />
    </>
  )
}
