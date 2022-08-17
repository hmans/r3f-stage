import React, { ReactNode, Suspense } from "react"
import { Link, Redirect, Route } from "wouter"
import { Spinner } from "./Spinner"
import { FlatStage } from "./stages"
import { navigationPortal } from "./ui/UI"

export type ExampleProps = {
  children?: ReactNode
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

      <Route path={url}>
        <Suspense fallback={<Spinner />}>{children}</Suspense>
      </Route>

      {makeDefault && (
        <Route path="/">
          <Redirect to={url} />
        </Route>
      )}
    </>
  )
}
