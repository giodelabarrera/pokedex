import '@testing-library/jest-dom/extend-expect'
import {server} from 'test/server'

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
