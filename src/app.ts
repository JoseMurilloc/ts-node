import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import routes from './routes'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()

      this.middlewares()
      this.database()
      this.routes()
    }

    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
      this.express.use(express.urlencoded({ extended: true }))
    }

    private database (): void {
      mongoose.connect('mongodb://localhost/tsnode', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    }

    private routes (): void {
      this.express.use(routes)
    }
}

export default new App().express
