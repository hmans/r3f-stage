import React, { ReactNode } from "react"
import { Link, Redirect, Route } from "wouter"
import { navigationPortal } from "./ui/UI"

export type ExampleProps = {
  children: ReactNode
  path: string
  title?: string
  makeDefault?: boolean
}

export const Example = ({ children, path, title, makeDefault = false }: ExampleProps) => {
  const url = `/examples/${path}`

  return (
    <>
      <navigationPortal.Add>
        <Link to={url}>{title || path}</Link>
      </navigationPortal.Add>

      <Route path={url}>{children}</Route>

      {makeDefault && (
        <Route path="/">
          <Redirect to={url} />
        </Route>
      )}
    </>
  )
}
