import React from "react"
import { useApplicationContext } from "./Application"

export type Example = {
  title?: string
  Description?: React.FunctionComponent
  Example: React.FunctionComponent
}

export type Examples = Record<string, Example>

export function Example() {
  const { currentExample } = useApplicationContext()

  if (!currentExample) return null

  const { Example } = currentExample
  return <Example />
}
