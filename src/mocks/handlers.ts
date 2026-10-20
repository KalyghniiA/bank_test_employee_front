import { http, HttpResponse } from 'msw'

// Бэкенда кабинета сотрудника ещё нет — все его эндпоинты пока на моках
// (черновик API: ../фронт-банка/требования-к-беку.md, раздел 2).
export const handlers = [
  http.get('/api/staff/clients', () => HttpResponse.json({ items: [], total: 0 })),
]
