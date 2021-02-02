import { Router } from 'express'
import { reverseString } from '../controllers/iecho'

export default Router()
  .get('/', (req, res, next) => {
    const { text } = req.query
    if (!text) return next({ status: 400, message: 'no text' })

    const reversedString = reverseString(text)

    res.status(200).json({
      text: reversedString,
      palindrome: text === reversedString
    })
  })
