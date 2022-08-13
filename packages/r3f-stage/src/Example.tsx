import React from "react"
import { Redirect, useRoute } from "wouter"
import { useApplicationContext } from "./Application"

export type Example = {
  title?: string
  Description?: React.FunctionComponent
  Example: React.FunctionComponent
}

export type Examples = Record<string, Example>

export function Example() {
  const { examples } = useApplicationContext()
  if (!examples) return null

  const [match, params] = useRoute("/examples/:slug")

  if (!match || !examples[params.slug]) {
    const firstExampleSlug = Object.entries(examples)[0][0]
    return <Redirect to={`/examples/${firstExampleSlug}`} />
  }

  const Component = examples[params.slug].Example
  return <Component />
}
