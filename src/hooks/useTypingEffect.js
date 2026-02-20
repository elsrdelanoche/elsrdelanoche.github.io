import { useState, useEffect } from 'react'

export function useTypingEffect(texts, speed = 60, pause = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]

    let timeout
    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), speed)
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), speed / 2)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setTextIndex(i => (i + 1) % texts.length)
    }

    setDisplayText(currentText.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts, speed, pause])

  return displayText
}
