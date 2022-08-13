import React, { FC } from "react"
import { Examples } from "./Example"
import { Navigation } from "./Navigation"

export const UI: FC<{ examples?: Examples }> = ({ examples }) => {
  return <>{examples && <Navigation examples={examples} />}</>
}
