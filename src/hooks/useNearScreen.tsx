import { useEffect, useState, useRef } from 'react'

export default function useNearScreen () {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    let observer: any
    const element = fromRef.current

    const onChange = (entries: any, observer: any) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        observer = true
      } else {
        setShow(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: '400px'
      })

      if (element) observer.observe(element)
    })

    return () => observer && observer.disconnect()
  })

  return { isNearScreen, fromRef }
}