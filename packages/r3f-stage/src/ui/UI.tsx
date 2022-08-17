import React from "react"
import portal from "../lib/portal"

export const uiPortal = portal()

export const UI = () => {
  return <uiPortal.View />
}
