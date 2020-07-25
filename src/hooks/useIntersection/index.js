import {useState, useEffect} from 'react'

export default function useIntersection({ref, options}) {
  const [intersectionObserverEntry, setIntersectionObserverEntry] = useState(
    null
  )

  useEffect(() => {
    if (ref.current) {
      Promise.resolve(() =>
        typeof IntersectionObserver !== 'undefined'
          ? IntersectionObserver
          : import('intersection-observer')
      ).then(() => {
        function handler(entries) {
          setIntersectionObserverEntry(entries[0])
        }

        const observer = new IntersectionObserver(handler, options)
        observer.observe(ref.current)

        return () => {
          setIntersectionObserverEntry(null)
          observer.disconnect()
        }
      })
    }
    return () => {}
  }, [options, ref])

  return intersectionObserverEntry
}
