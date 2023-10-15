'use client'
import { Skeleton } from '@mantine/core';
import { NavigationProgress, nprogress } from '@mantine/nprogress';
export default function Loading() {
    nprogress.start();

    return (
        <>
            <NavigationProgress />
            <Skeleton height={50} circle mb="xl" />
            <Skeleton height={8} radius="xl" />
            <Skeleton height={8} mt={6} radius="xl" />
            <Skeleton height={8} mt={6} width="70%" radius="xl" />
        </>
    );
}