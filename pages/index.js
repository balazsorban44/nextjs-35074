import { useState, useEffect } from "react"
import TextTransition, { presets } from "react-text-transition"

const titleTexts = ["Test", "Test2", "Test3", "Test4", "Test5"]

const Example = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1 * 1000
    )

    return () => clearTimeout(intervalId)
  }, [])

  return (
    <TextTransition
      text={titleTexts[index % titleTexts.length]}
      springConfig={presets.gentle}
      inline={true}
    />
  )
}

export default Example
