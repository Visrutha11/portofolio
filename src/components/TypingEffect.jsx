import { useState, useEffect } from 'react'

const TypingEffect = ({ text, speed = 50, onComplete = () => {} }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1))
      }, speed)
      return () => clearTimeout(timeout)
    } else {
      if (!isComplete) {
        setIsComplete(true)
        onComplete()
      }
    }
  }, [displayedText, text, speed, isComplete, onComplete])

  return (
    <span>
      {displayedText}
      {!isComplete && <span className="typing-cursor">|</span>}
    </span>
  )
}

export default TypingEffect
