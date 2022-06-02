import { Router } from "express"

export default () => {
  const router = Router()

  router.get("/hello-world", (req, res) => {
    res.json({
      message: "Welcome to Medusa!"
    })
  })

  router.get("/hello-product", async (req, res) => {
    const productService = req.scope.resolve("productService")

    const [product] = await productService.list({}, { take: 1 })

    res.json({
      message: `Welcome to ${product.title}!`
    })
  })
  router.use(session({
    name: 'someAuth',
    secret: 'somesecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: (1000 * 60 * 100)
    }
  }));


  return router;
}

