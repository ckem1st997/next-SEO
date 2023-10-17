
import React from 'react';
export const metadata = {
    title: 'Mantine Next.js template1',
    description: 'I am using Mantine with Next.js!',
};
// có thể viết các component con trong các thư mục router và chỉ định 
// 'use client' cho các phần mà sẽ xử lý thuần js
// có thể đưa component client-side vào component server-side và ngược lại
// quan trọng phải định nghĩa
export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <p>ddddddddddddsadddd</p>
            {children}
        </section>
    );
}
