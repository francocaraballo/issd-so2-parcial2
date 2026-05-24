// Helper to show modern Cinnamon system notification toasts
export function showToast(message) {
  let container = document.getElementById('system-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'system-toast-container';
    container.className = 'fixed bottom-16 right-4 flex flex-col gap-2 z-[999999] pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'bg-slate-900/95 dark:bg-slate-950/95 text-white text-xs px-4 py-3 rounded-lg shadow-2xl border border-white/10 dark:border-white/5 flex items-center gap-2.5 pointer-events-auto transition-all duration-300 transform translate-y-4 opacity-0';
  toast.style.borderLeft = '4px solid var(--mint-accent)';
  toast.innerHTML = `
    <svg class="w-4 h-4 text-mint flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
    <span class="font-medium">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('opacity-0', 'translate-y-4');
    toast.classList.add('opacity-100', 'translate-y-0');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-4');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}
