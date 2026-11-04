"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { CheckCircleIcon, CloseIcon } from "@/components/site/Icons";

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

const variantBorder: Record<ToastVariant, string> = {
  success: "border-[rgba(63,185,80,0.45)]",
  error: "border-[rgba(248,81,73,0.5)]",
  info: "border-border",
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

// Pinned 16px from the bottom-right corner.
function ToastViewport({
  toasts,
  onDismiss,
}: {
  toasts: Toast[];
  onDismiss: (id: string) => void;
}) {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-9999 flex w-[340px] max-w-[calc(100%-32px)] flex-col gap-3">
      {toasts.map((toast) => (
        <ToastCard key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  );
}

function ToastIcon({ variant }: { variant: ToastVariant }) {
  if (variant === "success") {
    return (
      <CheckCircleIcon
        size={18}
        stroke="#3fb950"
        className="mt-px shrink-0"
      />
    );
  }
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 16 16"
      fill="none"
      stroke={variant === "error" ? "#f85149" : "#9198a1"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-px shrink-0"
    >
      <circle cx="8" cy="8" r="6.25" />
      <path d="M8 4.75v4M8 11.25v.01" />
    </svg>
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

  return (
    <div
      role={variant === "error" ? "alert" : "status"}
      className={`pointer-events-auto flex items-start gap-3 rounded-[10px] border bg-surface py-3.5 pl-4 pr-3 shadow-[0_8px_24px_rgba(1,4,9,0.6)] ${variantBorder[variant]}`}
    >
      <ToastIcon variant={variant} />
      <div className="min-w-0 flex-1">
        {title ? <p className="font-semibold text-fg">{title}</p> : null}
        {description ? (
          <p className="mt-0.5 text-[13px] text-fg-muted">{description}</p>
        ) : null}
        {action ? (
          <button
            type="button"
            onClick={action.onClick}
            className="mt-2 inline-flex min-h-7 items-center rounded-md border bg-btn px-2.5 text-xs font-semibold text-fg"
          >
            {action.label}
          </button>
        ) : null}
      </div>
      <button
        type="button"
        aria-label="Dismiss notification"
        onClick={() => onDismiss(id)}
        className="-my-1 flex size-7 shrink-0 items-center justify-center rounded-md text-fg-muted"
      >
        <CloseIcon size={14} stroke="currentColor" />
      </button>
    </div>
  );
}
