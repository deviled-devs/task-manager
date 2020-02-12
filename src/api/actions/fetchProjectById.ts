import { Action } from 'react-fetching-library'

export const fetchProjectById: Action = (id: number) => ({
	method: 'GET',
	endpoint: `/projects/${id}`,
})
