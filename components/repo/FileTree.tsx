"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowLeftIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  FileIcon,
  FolderIcon,
  SidebarIcon,
} from "@/components/site/Icons";

type TreeItem = {
  slug: string;
  files: { label: string; href: string }[];
};

export default function FileTree({
  label,
  backHref,
  items,
  currentSlug,
  currentFile,
}: {
  label: string;
  backHref: string;
  items: TreeItem[];
  currentSlug: string;
  currentFile: string;
}) {
  const pathname = usePathname();

  // Folder toggles are keyed to the current company, so a navigation starts
  // fresh with the current company open.
  const [folders, setFolders] = useState<{
    forSlug: string;
    open: Record<string, boolean>;
  }>({ forSlug: currentSlug, open: {} });
  const openFolders = folders.forSlug === currentSlug ? folders.open : {};
  const isFolderOpen = (slug: string) =>
    openFolders[slug] ?? slug === currentSlug;
  const toggleFolder = (slug: string) =>
    setFolders({
      forSlug: currentSlug,
      open: { ...openFolders, [slug]: !isFolderOpen(slug) },
    });

  // Below 980px the tree sits behind a "Browse" bar. Keying the open state to
  // the pathname closes it again after a pick.
  const [browsingPath, setBrowsingPath] = useState<string | null>(null);
  const browsing = browsingPath === pathname;

  return (
    <nav
      aria-label={label}
      className="min-w-0 flex-[1_1_260px] overflow-hidden rounded-md border"
    >
      <div className="flex items-center justify-between gap-2 border-b bg-surface px-3 py-2.5">
        <span className="flex items-center gap-2 text-[15px] font-semibold">
          <SidebarIcon />
          {label}
        </span>
        <Link
          href={backHref}
          className="inline-flex min-h-7 items-center gap-1 rounded-md border px-2 text-xs font-semibold text-fg"
        >
          <ArrowLeftIcon size={14} stroke="currentColor" />
          All
        </Link>
      </div>

      <button
        type="button"
        onClick={() => setBrowsingPath(browsing ? null : pathname)}
        aria-expanded={browsing}
        className="flex min-h-11 w-full items-center gap-2 px-3 text-left text-fg min-[980px]:hidden"
      >
        <FileIcon className="shrink-0" />
        <span className="min-w-0 flex-1 truncate">
          <span className="text-fg-muted">{currentSlug} / </span>
          {currentFile}
        </span>
        <span className="whitespace-nowrap text-xs text-fg-muted">
          {browsing ? "Close" : "Browse"}
        </span>
        <ChevronDownIcon
          size={14}
          className={`shrink-0 motion-safe:transition-transform ${
            browsing ? "rotate-180" : ""
          }`}
        />
      </button>

      <ul
        className={`p-2 max-[979px]:border-t ${
          browsing ? "" : "max-[979px]:hidden"
        }`}
      >
        {items.map((item) => {
          const isOpen = isFolderOpen(item.slug);
          return (
            <li key={item.slug}>
              <button
                type="button"
                onClick={() => toggleFolder(item.slug)}
                aria-expanded={isOpen}
                className="flex min-h-8.5 w-full items-center gap-1.5 rounded-md px-2 text-left text-fg"
              >
                <ChevronRightIcon
                  size={14}
                  className={`shrink-0 motion-safe:transition-transform ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
                <FolderIcon className="shrink-0" />
                <span className="truncate">{item.slug}</span>
              </button>
              {isOpen ? (
                <ul>
                  {item.files.map((file) => {
                    const current =
                      item.slug === currentSlug && file.label === currentFile;
                    return (
                      <li key={file.href}>
                        <Link
                          href={file.href}
                          aria-current={current ? "page" : undefined}
                          className={`flex min-h-8.5 w-full items-center gap-2 rounded-md pl-11 pr-2 text-fg ${
                            current
                              ? "bg-btn font-semibold shadow-[inset_3px_0_0_var(--color-link)]"
                              : ""
                          }`}
                        >
                          <FileIcon className="shrink-0" />
                          <span className="truncate">{file.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
