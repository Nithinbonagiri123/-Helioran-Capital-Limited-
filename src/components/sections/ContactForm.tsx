"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ContactSchema = z.object({
  name: z.string().min(2, "Please share your full name."),
  email: z.string().email("Please enter a valid email."),
  organisation: z.string().optional(),
  mandate: z.enum([
    "Strategic Advisory",
    "Corporate Finance",
    "M&A",
    "Venture / Startup",
    "Property",
    "Other",
  ]),
  message: z.string().min(20, "A short paragraph helps us route your enquiry."),
});

type ContactValues = z.infer<typeof ContactSchema>;

const mandateOptions: ContactValues["mandate"][] = [
  "Strategic Advisory",
  "Corporate Finance",
  "M&A",
  "Venture / Startup",
  "Property",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue,
  } = useForm<ContactValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      mandate: "Strategic Advisory",
    },
  });

  const selectedMandate = watch("mandate");

  async function onSubmit(values: ContactValues) {
    // Mock submission — log + delay + success state.
    // To wire up later: POST to /api/contact or a service like Resend.
    await new Promise((r) => setTimeout(r, 900));
    // eslint-disable-next-line no-console
    console.log("[Helioran] contact submission:", values);
    setSubmitted(true);
    reset({ mandate: "Strategic Advisory" } as ContactValues);
    setTimeout(() => setSubmitted(false), 6000);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Full name" error={errors.name?.message}>
          <Input placeholder="Aoife Doyle" {...register("name")} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <Input
            type="email"
            placeholder="you@company.com"
            {...register("email")}
          />
        </Field>
      </div>

      <Field label="Organisation (optional)">
        <Input placeholder="Company or fund" {...register("organisation")} />
      </Field>

      <div>
        <Label>Mandate type</Label>
        <div className="mt-3 flex flex-wrap gap-2">
          {mandateOptions.map((m) => {
            const active = selectedMandate === m;
            return (
              <button
                key={m}
                type="button"
                onClick={() => setValue("mandate", m, { shouldValidate: true })}
                className={cn(
                  "rounded-full border px-4 py-2 text-[13px] tracking-tight transition-all",
                  active
                    ? "border-white/30 bg-white text-ink-950"
                    : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/20 hover:text-white"
                )}
              >
                {m}
              </button>
            );
          })}
        </div>
      </div>

      <Field label="How can we help?" error={errors.message?.message}>
        <Textarea
          placeholder="A few lines on the situation, the timing, and the outcome you're working toward."
          rows={5}
          {...register("message")}
        />
      </Field>

      <div className="flex flex-wrap items-center justify-between gap-6 pt-2">
        <p className="max-w-md text-[12px] leading-relaxed text-white/40">
          Your enquiry is treated as confidential. We respond personally within
          two business days.
        </p>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting || submitted}
        >
          <AnimatePresence mode="wait" initial={false}>
            {submitted ? (
              <motion.span
                key="sent"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="inline-flex items-center gap-2"
              >
                <Check className="h-4 w-4" /> Enquiry received
              </motion.span>
            ) : isSubmitting ? (
              <motion.span
                key="sending"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="inline-flex items-center gap-2"
              >
                <Loader2 className="h-4 w-4 animate-spin" /> Sending
              </motion.span>
            ) : (
              <motion.span
                key="send"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="inline-flex items-center gap-2"
              >
                Send enquiry <ArrowUpRight className="h-4 w-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="mt-3">{children}</div>
      {error && (
        <p className="mt-2 text-[12px] text-rose-300">{error}</p>
      )}
    </div>
  );
}
