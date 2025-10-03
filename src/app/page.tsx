'use client';

import { AppProvider } from '@/context/AppContext';
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
