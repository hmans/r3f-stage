import React, { ReactNode } from "react"

export const Description = ({ children }: { children: ReactNode }) => (
  <div className="panel" style={{ bottom: 0, left: 0 }}>
    {children}
  </div>
)
