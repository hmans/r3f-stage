import React from "react"
import { useApplicationContext } from "../Application"
import { Description } from "./Description"
import { Navigation } from "./Navigation"

export const UI = () => {
  const { examples, currentExample } = useApplicationContext()

  return (
    <>
      {examples && <Navigation examples={examples} />}
      {currentExample && <Description example={currentExample} />}
    </>
  )
}
