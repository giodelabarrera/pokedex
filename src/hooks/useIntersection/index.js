import {useEffect} from 'react'
import 'intersection-observer'

export default function useIntersection({
  target,
  root,
  rootMargin,
  threshold,
  onIntersect
}) {
  useEffect(() => {
    function handler(entries) {
      entries[0].isIntersecting && onIntersect()
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
      observer.unobserve(element)
    }
  }, [onIntersect, root, rootMargin, target, threshold])
}
