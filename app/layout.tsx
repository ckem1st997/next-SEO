
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import LayOutWithSSR from '@/components/LayOutWithSSR';
import Head from 'next/head';
import { RouterTransition } from '@/components/RouterTransition';
import {
  startNavigationProgress,
  completeNavigationProgress,
  NavigationProgress,
} from '@mantine/nprogress';
export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};
// có thể viết các component con trong các thư mục router và chỉ định 
// 'use client' cho các phần mà sẽ xử lý thuần js
// có thể đưa component client-side vào component server-side và ngược lại
// quan trọng phải định nghĩa
export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <Head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>
      <body>

        <MantineProvider theme={theme} >
        <NavigationProgress  />
          <LayOutWithSSR>
            {children}
          </LayOutWithSSR>

        </MantineProvider>

      </body>
    </html>
  );
}
