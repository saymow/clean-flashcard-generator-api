import app from '@/main/config/app'
import { Request, Response } from 'express'
import request from 'supertest'

describe('Content Type Middleware', () => {
  test('Should return default content type as json', async () => {
    app.get('/test_content_type', (req: Request, res: Response) => { res.send('') })

    await request(app)
      .get('/test_content_type')
      .expect('content-type', /json/)
  })

  test('Should return custom content type if need', async () => {
    app.get('/test_custom_content_type', (req: Request, res: Response) => {
      res.type('xml')
      res.send()
    })

    await request(app)
      .get('/test_custom_content_type')
      .expect('content-type', /xml/)
  })
})
