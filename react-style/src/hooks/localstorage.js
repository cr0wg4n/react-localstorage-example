import { useEffect, useState } from "react"
import { encryptedLocalStorage } from "../utils/secureLocalStorage"


const decode = (value) => {
  return JSON.stringify(value)
}

const encode = (value) => {
  return JSON.parse(value)
}

const useLocalStorage = (key, defaultState) => {
  const [value, setValue] = useState(
    encode(localStorage.getItem(key)||null) || defaultState
  )

  useEffect(() => {
    localStorage.setItem(key, decode(value))
  },  [value])

  return [value, setValue]
}

const useSecureLocalStorage = (key, defaultState) => {
  const [value, setValue] = useState(
    encode(encryptedLocalStorage.getItem(key)||null) || defaultState
  )

  useEffect(() => {
    encryptedLocalStorage.setItem(key, decode(value))
  },  [value])

  return [value, setValue]
}


export {
  useLocalStorage,
  useSecureLocalStorage
}