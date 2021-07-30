import { useEffect, useState, useRef } from 'react'

export default function useNearScreen () {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef<HTMLElement>() as React.MutableRefObject<HTMLInputElement>

  useEffect(() => {
    let observer: any
    const element = fromRef.current

    const onChange = (entries: any, observer: any) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: '100px'
      })

      if (element) observer.observe(element)
    })

    return () => observer && observer.disconnect()
  })

  return { isNearScreen, fromRef }
}