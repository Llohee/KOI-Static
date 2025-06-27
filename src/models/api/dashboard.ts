import { ENUM_DASHBOARD_STATUS } from '@/constants/dashboard'
import { z } from 'zod'

export const GetDashboardSchema = z.object({
  id: z.string(),
  name: z.string(),
  mode: z.string(),
  image: z.string(),
  createdAt: z.string(),
  time: z.string(),
  status: z.enum(ENUM_DASHBOARD_STATUS),
  currentCycle: z.string().optional(), //chu trình giặt
  remainingTime: z.number().optional(), //thời gian còn lại
  progress: z.number().min(0).max(100).optional(), //tiến độ
  temperature: z.number().optional(), //nhiệt độ
  spinSpeed: z.number().optional(), //tốc độ quay
  detergentLevel: z.number().min(0).max(100).optional(), //mức độ xà phòng
  fabricType: z.string().optional(), //loại vải
  loadSize: z.enum(['small', 'medium', 'large']).optional(), //kích thước tải
  machineNumber: z.string(), //số máy
  pricePerLoad: z.number().positive(), //đơn giá mỗi lần giặt
  currency: z.string().default('VND'), //đơn vị tiền tệ
})

export type GetDashboardResponse = z.infer<typeof GetDashboardSchema>