import { useQuery } from '@tanstack/react-query'
import dashboardApi from '@/apis/dashboard'

export const dashboardKeys = {
  all: ['getDashboard'] as const,
  get: () => [...dashboardKeys.all, 'getDashboard'] as const,
}

export function useGetDashboard() {
  return useQuery({
    queryKey: dashboardKeys.get(),
    queryFn: () => dashboardApi.getDashboard(),
  })
}
