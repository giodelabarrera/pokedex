import {useEffect, useState} from 'react'
import 'intersection-observer'

export default function useIntersection({target, root, rootMargin, threshold}) {
  const [intersectionObserverEntry, setIntersectionObserverEntry] = useState(
    null
  )

  useEffect(() => {
    const element = target && target.current
    if (!element) return

    function handler(entries) {
      setIntersectionObserverEntry(entries[0])
    }

    const observer = new IntersectionObserver(handler, {
      root: root && root.current,
      rootMargin,
      threshold
    })

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [root, rootMargin, target, threshold])

  return intersectionObserverEntry
}
