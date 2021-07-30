import { useState, useRef, useEffect } from "react"

export const useLoaderImg = () => {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef<HTMLImageElement>(null) as React.MutableRefObject<HTMLImageElement>

  const onLoad = () => {
    setLoaded(true)
  }

  useEffect(() => {
    if (ref.current && ref.current?.complete) {
      onLoad()
    }
  })

  return { loaded, ref, onLoad }
}