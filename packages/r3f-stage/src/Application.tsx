import React, { createContext, FC, useContext } from "react"
import "../styles.css"
import { Examples } from "./Example"
import { ThreeApplication, ThreeApplicationProps } from "./ThreeApplication"
import { UI } from "./ui/UI"

export const ApplicationContext = createContext<{ examples?: Examples }>({})

export const useApplicationContext = () => useContext(ApplicationContext)

export type ApplicationProps = {
  examples?: Examples
} & ThreeApplicationProps

export const Application: FC<ApplicationProps> = ({ examples, ...props }) => {
  return (
    <ApplicationContext.Provider value={{ examples }}>
      <UI />
      <ThreeApplication {...props} />
    </ApplicationContext.Provider>
  )
}
