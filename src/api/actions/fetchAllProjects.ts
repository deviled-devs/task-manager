import { Action } from 'react-fetching-library'

export const fetchAllProjects: Action = {
	method: 'GET',
	endpoint: '/projectList',
}
