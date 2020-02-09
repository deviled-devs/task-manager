import { createClient } from 'react-fetching-library'

import { requestHostInterceptor } from './requestInterceptors/requestHostInterceptor'

const HOST = 'http://localhost:3001'

export const Client = createClient({
	requestInterceptors: [requestHostInterceptor(HOST)]
})
