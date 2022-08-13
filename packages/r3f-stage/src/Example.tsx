import React from "react"
import { Redirect, useRoute } from "wouter"

export type Example = {
  title?: string
  description?: string
  render: React.FunctionComponent
}

export type Examples = Record<string, Example>

export function Example({ examples }: { examples: Examples }) {
  const [match, params] = useRoute("/examples/:slug")

  if (!match || !examples[params.slug]) {
    const firstExampleSlug = Object.entries(examples)[0][0]
    return <Redirect to={`/examples/${firstExampleSlug}`} />
  }

  const Component = examples[params.slug].render
  return <Component />
}
