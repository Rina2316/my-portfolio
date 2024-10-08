// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Проверяем, если пользователь на корневом маршруте "/"
  if (pathname === '/') {
    // Перенаправляем на локаль "/ru"
    const url = new URL('/ru', request.url);
    return NextResponse.redirect(url);
  }

  // Продолжаем обработку для всех остальных маршрутов
  return NextResponse.next();
}

// Конфигурация, чтобы применять middleware только к корневому маршруту
export const config = {
  matcher: '/', // Применяется только к корневому маршруту "/"
};
