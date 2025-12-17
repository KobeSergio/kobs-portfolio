"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ToastVariant = "success" | "error" | "info";

type Toast = {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  durationMs?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
};

type ToastContextValue = {
  showToast: (toast: Omit<Toast, "id"> & { id?: string }) => string;
  dismissToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

const variantStyles: Record<ToastVariant, string> = {
  success:
    "border border-emerald-400/30 bg-emerald-500/15 text-emerald-50 " +
    "shadow-lg shadow-emerald-500/20 backdrop-blur-md " +
    "ring-1 ring-emerald-400/20",

  error:
    "border border-rose-400/30 bg-rose-500/15 text-rose-50 " +
    "shadow-lg shadow-rose-500/25 backdrop-blur-md " +
    "ring-1 ring-rose-400/25",

  info:
    "border border-white/15 bg-slate-900/70 text-slate-50 " +
    "shadow-xl shadow-amber-400/10 backdrop-blur-md " +
    "ring-1 ring-white/10",
};

const defaultDuration = 4_000;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (toastInput: Omit<Toast, "id"> & { id?: string }) => {
      const id =
        toastInput.id ??
        (typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : Math.random().toString(36).slice(2));
      const toast: Toast = {
        id,
        variant: toastInput.variant ?? "info",
        durationMs: toastInput.durationMs ?? defaultDuration,
        ...toastInput,
      };
      setToasts((prev) => [...prev, toast]);
      if (toast.durationMs && toast.durationMs > 0) {
        window.setTimeout(() => dismissToast(id), toast.durationMs);
      }
      return id;
    },
    [dismissToast]
  );

  const value = useMemo(
    () => ({
      showToast,
      dismissToast,
    }),
    [dismissToast, showToast]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastViewport toasts={toasts} onDismiss={dismissToast} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used inside ToastProvider");
  }
  return ctx;
}

function ToastViewport({
  toasts,
  onDismiss,
}: {
  toasts: Toast[];
  onDismiss: (id: string) => void;
}) {
  return (
    <div className="pointer-events-none fixed inset-0 z-9999 flex flex-col items-end gap-3 px-4 py-6 sm:items-end sm:px-6 sm:py-8">
      <div className="flex w-full flex-col items-end gap-3 sm:max-w-sm">
        {toasts.map((toast) => (
          <ToastCard key={toast.id} toast={toast} onDismiss={onDismiss} />
        ))}
      </div>
    </div>
  );
}

function ToastCard({
  toast,
  onDismiss,
}: {
  toast: Toast;
  onDismiss: (id: string) => void;
}) {
  const { id, title, description, variant = "info", action } = toast;
  const style = variantStyles[variant] ?? variantStyles.info;
  const icon = {
    success: (
      <svg
        aria-hidden
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-emerald-300"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
    error: (
      <svg
        aria-hidden
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-rose-300"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    ),
    info: (
      <svg
        aria-hidden
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-amber-300"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
  }[variant];

  return (
    <div
      className={`pointer-events-auto w-full rounded-xl border px-4 py-3 shadow-lg shadow-black/40 ${style}`}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5">
          {icon}
        </span>
        <div className="flex-1 space-y-1">
          {title && <p className="text-sm font-semibold">{title}</p>}
          {description && (
            <p className="text-xs leading-5 text-slate-200/80">{description}</p>
          )}
        </div>
        <button
          type="button"
          aria-label="Dismiss toast"
          onClick={() => onDismiss(id)}
          className="rounded-md p-1 text-slate-200 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          <svg
            aria-hidden
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-current"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      {action && (
        <button
          type="button"
          onClick={action.onClick}
          className="mt-2 inline-flex items-center justify-center rounded-md bg-white/10 px-3 py-1 text-xs font-semibold text-slate-50 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
