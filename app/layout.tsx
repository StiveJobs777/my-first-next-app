import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'My First Next App',
    description: 'Практическая работа №1.2 — первое приложение на Next.js'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body>{children}</body>
        </html>
    );
}
