'use client'

import { useEffect } from 'react'

export function DisableLinks() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (href === '#' || (href && href.startsWith('#'))) return

      e.preventDefault()
      e.stopPropagation()
      e.stopImmediatePropagation()
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  return null
}
