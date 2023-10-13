import {useEffect, useState} from 'react'

export default function useIntersectionObserver(
  elementRef,
  {root, threshold = 1.0, rootMargin = '0px', enabled = true}
) {
  const [entry, setEntry] = useState()

  useEffect(() => {
    if (!enabled) return

    const element = elementRef && elementRef.current
    if (!element) return

    function updateEntry([entry]) {
      setEntry(entry)
    }

    const observer = new IntersectionObserver(updateEntry, {
      root: root && root.current,
      rootMargin,
      threshold
    })

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [elementRef, enabled, root, rootMargin, threshold])

  return entry
}
