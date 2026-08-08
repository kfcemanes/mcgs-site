import { useEffect } from 'react'

/**
 * Shared behaviour for full-screen overlays (gallery lightbox, service detail
 * modal): Escape to close, optional arrow-key navigation, and locking the
 * background page from scrolling while the overlay is open.
 *
 * Pass memoized callbacks (useCallback) so the listener isn't rebound on every
 * render.
 */
export default function useOverlay(isOpen, { onClose, onPrev, onNext } = {}) {
  useEffect(() => {
    if (!isOpen) return

    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
      else if (e.key === 'ArrowRight') onNext?.()
      else if (e.key === 'ArrowLeft') onPrev?.()
    }
    window.addEventListener('keydown', onKey)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, onClose, onPrev, onNext])
}
