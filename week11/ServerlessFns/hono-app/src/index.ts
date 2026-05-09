import { Hono } from 'hono'

const app = new Hono()

// Auth Middleware
async function authMiddleware(c: any, next: any) {
  const authHeader = c.req.header("Authorization")

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return c.json(
      {
        msg: "Invalid token"
      },
      401
    )
  }
  const token = authHeader.split(" ")[1]
  console.log("Token:", token)
  await next()
}


app.post("/",authMiddleware ,async (c) => {
  const body = await c.req.json()
  console.log(body)
  console.log(
    c.req.header("Authorization")
  )
  console.log(
    c.req.query("Params")
  )
  return c.json({
    msg: "Welcome to Hono!"
  })
})

export default app