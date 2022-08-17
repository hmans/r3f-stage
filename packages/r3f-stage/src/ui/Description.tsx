import React from "react"
import { uiPortal } from "./UI"

export type DescriptionProps = { children: React.ReactNode }

export const Description = ({ children }: DescriptionProps) => {
  return (
    <uiPortal.In>
      <div className="panel" style={{ bottom: 0, left: 0 }}>
        {children}
      </div>
    </uiPortal.In>
  )
}
