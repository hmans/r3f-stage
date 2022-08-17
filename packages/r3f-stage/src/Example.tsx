import React, { ReactNode } from "react"
import { uiPortal } from "./ui/UI"
import { useRoute, Route } from "wouter"

export type ExampleProps = {
  children: ReactNode
  path: string
  title?: string
}

export const Example = ({ children, path, title }: ExampleProps) => {
  return <Route path={`/examples/${path}`}>{children}</Route>
}

export type DescriptionProps = { children: React.ReactNode }

export const Description = ({ children }: DescriptionProps) => {
  return (
    <uiPortal.Add>
      <div className="panel" style={{ bottom: 0, left: 0 }}>
        {children}
      </div>
    </uiPortal.Add>
  )
}
