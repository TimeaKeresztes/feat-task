import type { Feature } from './feature'

export type User = {
    first_name: string
    last_name: string
    job_tile: string
    features: Feature[]
}
