import React, { ReactNode, useLayoutEffect } from "react"
import { makeStore, useStore } from "statery"

export default function portal() {
  const store = makeStore({
    version: 0 as number,
    children: new Array<ReactNode>()
  })

  /**
   * Render the accumulated children.
   */
  const View = () => {
    const { children } = useStore(store)
    return <>{children}</>
  }

  /**
   * Add children to the portal.
   */
  const Add = ({ children: reactChildren }: { children: ReactNode }) => {
    const { version } = useStore(store)

    /* On first mount, bump the version. This way we signal the portal that
    something new has been added. */
    useLayoutEffect(() => {
      store.set(({ version }) => ({ version: version + 1 }))
    }, [])

    /* Every time either the children or the version change, update the store.
    We do this on a version change because this way children will retain the
    correct rendering order. */
    useLayoutEffect(() => {
      store.set(({ children }) => ({
        children: [...children, reactChildren]
      }))

      return () => {
        store.set(({ children }) => ({
          children: children.filter((c) => c !== reactChildren)
        }))
      }
    }, [reactChildren, version])

    /* The Add component doesn't render anything. */
    return null
  }

  return { View, Add }
}
