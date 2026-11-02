import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-300">
      <div className="glass-panel px-5 py-3 rounded-2xl shadow-apple-glass border border-sky-400/30 flex items-center gap-3 backdrop-blur-2xl">
        <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0" />
        <span className="text-xs sm:text-sm font-semibold text-navy-950 dark:text-slate-100">{message}</span>
      </div>
    </div>
  );
};
