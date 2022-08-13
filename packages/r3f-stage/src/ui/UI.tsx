import { Leva } from "leva"
import React from "react"
import { useApplicationContext } from "../Application"
import { Navigation } from "./Navigation"

export const UI = () => {
  const { examples } = useApplicationContext()
  return (
    <>
      <Leva />
      {examples && <Navigation examples={examples} />}
    </>
  )
}
