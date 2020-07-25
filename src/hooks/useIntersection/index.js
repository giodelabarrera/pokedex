import {useEffect, useState} from 'react'
// import 'intersection-observer'

export default function useIntersection({target, root, rootMargin, threshold}) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    function handler(entries) {
      setIsIntersecting(entries[0].isIntersecting)
    }

    const observer = new IntersectionObserver(handler, {
      root: root && root.current,
      rootMargin,
      threshold
    })

    const element = target && target.current
    if (!element) return

    observer.observe(element)

    return () => {
      setIsIntersecting(false)
      observer.unobserve(element)
    }
  }, [root, rootMargin, target, threshold])

  return isIntersecting
}
