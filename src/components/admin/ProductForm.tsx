"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ICON_OPTIONS, BADGE_COLOR_OPTIONS } from "@/lib/adminConstants";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Category = { id: string; name: string };

export function ProductForm({
  action,
  categories,
  defaultValues,
  title,
  submitLabel,
}: {
  action: (prevState: any, formData: FormData) => Promise<any>;
  categories: Category[];
  defaultValues?: Record<string, any>;
  title: string;
  submitLabel: string;
}) {
  const [state, formAction, pending] = useActionState(action, undefined);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) router.push("/admin/products");
  }, [state, router]);

  const dv = defaultValues || {};

  return (
    <div className="p-8 max-w-2xl">
      {/* Back */}
      <Link href="/admin/products" className="flex items-center gap-2 text-gray-500 hover:text-white text-sm mb-6 transition-colors w-fit">
        <ArrowLeft className="w-4 h-4" /> Back to Products
      </Link>

      <h1 className="text-2xl font-extrabold text-white mb-8">{title}</h1>

      <form action={formAction} className="flex flex-col gap-5">
        {/* Error */}
        {state?.error && (
          <div className="bg-red-950/40 border border-red-800/50 text-red-400 text-sm rounded-xl px-4 py-3">
            {state.error}
          </div>
        )}

        {/* Name */}
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Product Name *</label>
          <input name="name" defaultValue={dv.name} required
            placeholder="e.g. Samsung 55&quot; 4K Smart TV"
            className="w-full bg-[#1A1A1A] border border-gray-700/60 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 text-sm outline-none focus:border-red-600/60 focus:ring-1 focus:ring-red-600/20 transition-all" />
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Description</label>
          <textarea name="description" defaultValue={dv.description || ""} rows={3}
            placeholder="Brief product description..."
            className="w-full bg-[#1A1A1A] border border-gray-700/60 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 text-sm outline-none focus:border-red-600/60 focus:ring-1 focus:ring-red-600/20 transition-all resize-none" />
        </div>

        {/* Price + Category */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Price (Rs.)</label>
            <input name="price" type="number" defaultValue={dv.price || ""} step="0.01" min="0"
              placeholder="e.g. 125000"
              className="w-full bg-[#1A1A1A] border border-gray-700/60 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 text-sm outline-none focus:border-red-600/60 focus:ring-1 focus:ring-red-600/20 transition-all" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Category *</label>
            <select name="categoryId" defaultValue={dv.categoryId || ""} required
              className="w-full bg-[#1A1A1A] border border-gray-700/60 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-red-600/60 focus:ring-1 focus:ring-red-600/20 transition-all">
              <option value="">Select category...</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Icon */}
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Icon *</label>
          <select name="icon" defaultValue={dv.icon || ""} required
            className="w-full bg-[#1A1A1A] border border-gray-700/60 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-red-600/60 focus:ring-1 focus:ring-red-600/20 transition-all">
            <option value="">Select icon...</option>
            {ICON_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        {/* Badge text + color */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Badge Text</label>
            <input name="badge" defaultValue={dv.badge || ""}
              placeholder="e.g. In Stock"
              className="w-full bg-[#1A1A1A] border border-gray-700/60 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 text-sm outline-none focus:border-red-600/60 focus:ring-1 focus:ring-red-600/20 transition-all" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Badge Color</label>
            <select name="badgeColor" defaultValue={dv.badgeColor || ""}
              className="w-full bg-[#1A1A1A] border border-gray-700/60 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-red-600/60 focus:ring-1 focus:ring-red-600/20 transition-all">
              <option value="">No badge</option>
              {BADGE_COLOR_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Image URL</label>
          <input name="imageUrl" defaultValue={dv.imageUrl || ""}
            placeholder="https://... (leave blank to use icon)"
            className="w-full bg-[#1A1A1A] border border-gray-700/60 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 text-sm outline-none focus:border-red-600/60 focus:ring-1 focus:ring-red-600/20 transition-all" />
        </div>

        {/* Branch availability */}
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Available At</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2.5 cursor-pointer group">
              <input type="checkbox" name="availableKalawana" defaultChecked={dv.availableKalawana ?? true}
                className="w-4 h-4 rounded border-gray-700 bg-[#1A1A1A] accent-red-600" />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Kalawana Branch</span>
            </label>
            <label className="flex items-center gap-2.5 cursor-pointer group">
              <input type="checkbox" name="availableRatnapura" defaultChecked={dv.availableRatnapura ?? true}
                className="w-4 h-4 rounded border-gray-700 bg-[#1A1A1A] accent-red-600" />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Ratnapura Branch</span>
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="flex gap-3 pt-2">
          <Link href="/admin/products"
            className="flex-1 py-3 rounded-xl border border-gray-700 text-gray-400 text-sm font-semibold hover:text-white hover:border-gray-600 transition-colors text-center">
            Cancel
          </Link>
          <button type="submit" disabled={pending}
            className="flex-2 min-w-[160px] bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all active:scale-[0.98]">
            {pending ? "Saving..." : submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
}
