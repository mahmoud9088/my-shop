import { validateEmail } from '@/utils/validation'
import nc from 'next-connect'

const handler = nc()

handler.post(async (req, res) => {
  try {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'fill all fields...' })
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'invalid email...' })
    }
    return res.status(200).json({ message: 'done' })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

export default handler
