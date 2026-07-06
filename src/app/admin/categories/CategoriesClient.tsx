"use client";

import { useState } from "react";
import { CategoryForm } from "@/components/admin/CategoryForm";
import { createCategory, updateCategory, deleteCategory } from "./actions";
import { DeleteButton } from "@/components/admin/DeleteButton";
import { Plus, Pencil, FolderOpen } from "lucide-react";
import { getIcon } from "@/lib/icons";

export default function CategoriesClient({ initialCategories }: { initialCategories: any[] }) {
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Categories</h1>
          <p className="text-gray-500 text-sm mt-1">{initialCategories.length} categories defined</p>
        </div>
        {!isAdding && !editingId && (
          <button
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-all shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_25px_rgba(220,38,38,0.35)]"
          >
            <Plus className="w-4 h-4" />
            Add Category
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left Side: Forms */}
        {(isAdding || editingId) && (
          <div className="lg:col-span-1">
            {isAdding && (
              <CategoryForm
                action={createCategory}
                submitLabel="Create Category"
                onCancel={() => setIsAdding(false)}
              />
            )}
            
            {editingId && (
              <CategoryForm
                action={updateCategory.bind(null, editingId)}
                defaultValues={initialCategories.find((c) => c.id === editingId)}
                submitLabel="Save Changes"
                onCancel={() => setEditingId(null)}
              />
            )}
          </div>
        )}

        {/* Right Side / Full Width: Grid */}
        <div className={isAdding || editingId ? "lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4" : "lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"}>
          {initialCategories.length === 0 ? (
            <div className="col-span-full py-16 text-center text-gray-500">No categories found.</div>
          ) : (
            initialCategories.map((cat) => {
              const Icon = getIcon(cat.icon) || FolderOpen;
              return (
                <div key={cat.id} className="bg-[#111111] border border-gray-800/60 rounded-2xl p-5 hover:border-gray-700 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] flex items-center justify-center text-red-500 border border-gray-800/60">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] text-gray-500 font-bold uppercase">Order: {cat.order}</span>
                    </div>
                    <h3 className="text-base font-bold text-white leading-tight mb-1">{cat.name}</h3>
                    <p className="text-xs text-gray-500">{cat._count.products} products attached</p>
                  </div>
                  
                  <div className="flex gap-2 mt-5 pt-4 border-t border-gray-800/60">
                    <button
                      onClick={() => {
                        setIsAdding(false);
                        setEditingId(cat.id);
                      }}
                      className="flex items-center justify-center gap-1.5 flex-1 py-1.5 rounded-lg bg-[#1A1A1A] border border-gray-700 text-gray-300 text-xs font-semibold hover:text-white hover:border-gray-600 transition-colors"
                    >
                      <Pencil className="w-3.5 h-3.5" /> Edit
                    </button>
                    {cat._count.products === 0 ? (
                      <DeleteButton
                        label={cat.name}
                        onConfirm={async () => {
                          if (editingId === cat.id) setEditingId(null);
                          await deleteCategory(cat.id);
                        }}
                      />
                    ) : (
                      <button disabled className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900/30 border border-gray-800/40 text-gray-600 text-xs font-semibold cursor-not-allowed" title="Cannot delete: has products">
                        Has Products
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
