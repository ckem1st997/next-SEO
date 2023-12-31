
import React, { Suspense } from 'react';
import { MantineProvider, ColorSchemeScript, LoadingOverlay } from '@mantine/core';
import { theme } from '../theme';
import LayOutWithSSR from '@/components/LayOutWithSSR';
import { Notifications } from '@mantine/notifications';
import Head from 'next/head';
import {
  startNavigationProgress,
  completeNavigationProgress,
  NavigationProgress,
} from '@mantine/nprogress';
import Loading from './loading';
import { NavigationEvents } from '@/components/navigation-events';
import '@mantine/notifications/styles.css';
export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};
// có thể viết các component con trong các thư mục router và chỉ định 
// 'use client' cho các phần mà sẽ xử lý thuần js
// có thể đưa component client-side vào component server-side và ngược lại
// quan trọng phải định nghĩa
export default function RootLayout(props: { children: React.ReactNode, auth: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>

        <MantineProvider theme={theme} >
          {/* <NavigationEvents /> */}
          <Notifications />
          <LayOutWithSSR>
            {props.children}
            {props.auth}
          </LayOutWithSSR>
        </MantineProvider>

      </body>
    </html >
  );
}
