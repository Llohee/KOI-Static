import axios from 'axios'
import type { GetDashboardResponse } from '@/models/api/dashboard'

const dashboardApi = {
  getDashboard(): Promise<GetDashboardResponse> {
    const url = '/dashboard'
    return axios.get(url)
  },
}

export default dashboardApi