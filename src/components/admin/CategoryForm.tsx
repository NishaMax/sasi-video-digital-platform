"use client";

import { useActionState, useEffect } from "react";
import { ICON_OPTIONS } from "@/lib/adminConstants";

export function CategoryForm({
  action,
  defaultValues,
  submitLabel,
  onCancel,
}: {
  action: (prevState: any, formData: FormData) => Promise<any>;
  defaultValues?: Record<string, any>;
  submitLabel: string;
  onCancel: () => void;
}) {
  const [state, formAction, pending] = useActionState(action, undefined);

  useEffect(() => {
    if (state?.success) {
      onCancel(); // Close form on success
    }
  }, [state, onCancel]);

  const dv = defaultValues || {};

  return (
    <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">
      <h2 className="text-lg font-bold text-white mb-6">{defaultValues ? "Edit Category" : "Add New Category"}</h2>
      
      <form action={formAction} className="flex flex-col gap-4">
        {state?.error && (
          <div className="bg-red-950/40 border border-red-800/50 text-red-400 text-sm rounded-xl px-4 py-3">
            {state.error}
          </div>
        )}

        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Name *</label>
          <input name="name" defaultValue={dv.name} required
            placeholder="e.g. Mobile Accessories"
            className="w-full bg-[#1A1A1A] border border-gray-700/60 rounded-xl px-4 py-2.5 text-white placeholder:text-gray-600 text-sm outline-none focus:border-red-600/60 focus:ring-1 focus:ring-red-600/20 transition-all" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Icon *</label>
            <select name="icon" defaultValue={dv.icon || ""} required
              className="w-full bg-[#1A1A1A] border border-gray-700/60 rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:border-red-600/60 focus:ring-1 focus:ring-red-600/20 transition-all">
              <option value="">Select icon...</option>
              {ICON_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Display Order</label>
            <input name="order" type="number" defaultValue={dv.order ?? 0} required
              className="w-full bg-[#1A1A1A] border border-gray-700/60 rounded-xl px-4 py-2.5 text-white placeholder:text-gray-600 text-sm outline-none focus:border-red-600/60 focus:ring-1 focus:ring-red-600/20 transition-all" />
          </div>
        </div>

        <div className="flex gap-3 pt-2 mt-2">
          <button type="button" onClick={onCancel}
            className="flex-1 py-2.5 rounded-xl border border-gray-700 text-gray-400 text-sm font-semibold hover:text-white hover:border-gray-600 transition-colors">
            Cancel
          </button>
          <button type="submit" disabled={pending}
            className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-bold text-sm transition-all">
            {pending ? "Saving..." : submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
}
