"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

// Root wrapper
export function Dialog({ children, ...props }: DialogPrimitive.DialogProps) {
  return (
    <DialogPrimitive.Root modal {...props}>
      {children}
    </DialogPrimitive.Root>
  );
}

export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

// Content
export function DialogContent({
  className,
  children,
  ...props
}: DialogPrimitive.DialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      {/* Overlay with reduced motion check */}
      <DialogPrimitive.Overlay
        className={cn(
          "fixed inset-0 bg-black/40 data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut",
          "motion-reduce:animate-none"
        )}
      />
      <DialogPrimitive.Content
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        className={cn(
          "fixed top-1/2 left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-background p-6 rounded-lg shadow-lg focus:outline-none",
          "data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut motion-reduce:animate-none",
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          className="absolute top-3 right-3 rounded-full p-1 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

// Header
export function DialogHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-4">{children}</div>;
}

export function DialogTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 id="dialog-title" className="text-lg font-semibold">
      {children}
    </h2>
  );
}

export function DialogDescription({ children }: { children: React.ReactNode }) {
  return (
    <p id="dialog-description" className="text-sm text-muted-foreground">
      {children}
    </p>
  );
}
