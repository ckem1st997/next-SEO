'use client'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import {
  startNavigationProgress,
  completeNavigationProgress,
  NavigationProgress,
  nprogress
} from '@mantine/nprogress';

export default function RouterTransition() {
  nprogress.start();
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    console.log(url);
    nprogress.start();
  }, [pathname, searchParams])

  return <NavigationProgress  />;
}