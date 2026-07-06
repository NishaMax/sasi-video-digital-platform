import { getAdminProducts } from "./actions";
import { getAdminCategories } from "../categories/actions";
import { deleteProduct } from "./actions";
import { DeleteButton } from "@/components/admin/DeleteButton";
import { Package, Plus, Pencil } from "lucide-react";
import Link from "next/link";

export default async function AdminProductsPage() {
  const [products, categories] = await Promise.all([
    getAdminProducts(),
    getAdminCategories(),
  ]);

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Products</h1>
          <p className="text-gray-500 text-sm mt-1">{products.length} products in your store</p>
        </div>
        <Link
          href="/admin/products/new"
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-all shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_25px_rgba(220,38,38,0.35)] active:scale-[0.98]"
        >
          <Plus className="w-4 h-4" />
          Add Product
        </Link>
      </div>

      {/* Table */}
      <div className="bg-[#111111] border border-gray-800/60 rounded-2xl overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-[40px_1fr_140px_100px_120px_80px_80px_130px] gap-4 px-5 py-3 border-b border-gray-800/60 bg-[#0D0D0D]">
          <div />
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Name</span>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Category</span>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Price</span>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Badge</span>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider text-center">KLW</span>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider text-center">RTP</span>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider text-right">Actions</span>
        </div>

        {/* Rows */}
        <div className="divide-y divide-gray-800/40">
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-gray-600 gap-3">
              <Package className="w-10 h-10 text-gray-800" />
              <p className="text-sm">No products yet.</p>
              <Link href="/admin/products/new" className="text-red-500 text-xs hover:underline">Add your first product →</Link>
            </div>
          ) : (
            products.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-[40px_1fr_140px_100px_120px_80px_80px_130px] gap-4 px-5 py-4 hover:bg-[#1A1A1A] transition-colors items-center"
              >
                {/* Thumbnail */}
                <div className="w-9 h-9 rounded-lg bg-[#1A1A1A] border border-gray-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <Package className="w-4 h-4 text-gray-600" />
                  )}
                </div>

                {/* Name */}
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-200 truncate">{product.name}</p>
                  <p className="text-[10px] text-gray-600 mt-0.5 truncate">{product.description || "—"}</p>
                </div>

                {/* Category */}
                <span className="text-xs text-gray-400 bg-[#1A1A1A] border border-gray-800 px-2 py-1 rounded-lg truncate">{product.category.name}</span>

                {/* Price */}
                <span className="text-sm font-bold text-red-500">
                  {product.price ? `Rs. ${product.price.toLocaleString()}` : "—"}
                </span>

                {/* Badge */}
                {product.badge ? (
                  <span className={`${product.badgeColor || "bg-red-600"} text-white text-[9px] font-bold px-2 py-0.5 rounded-md uppercase w-fit`}>
                    {product.badge}
                  </span>
                ) : <span className="text-gray-700 text-xs">—</span>}

                {/* Kalawana */}
                <span className={`text-[10px] font-bold text-center ${product.availableKalawana ? "text-green-400" : "text-gray-700"}`}>
                  {product.availableKalawana ? "✓" : "✗"}
                </span>

                {/* Ratnapura */}
                <span className={`text-[10px] font-bold text-center ${product.availableRatnapura ? "text-green-400" : "text-gray-700"}`}>
                  {product.availableRatnapura ? "✓" : "✗"}
                </span>

                {/* Actions */}
                <div className="flex items-center gap-2 justify-end">
                  <Link
                    href={`/admin/products/${product.id}/edit`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-gray-700 text-gray-300 text-xs font-semibold hover:text-white hover:border-gray-600 transition-colors"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                    Edit
                  </Link>
                  <DeleteButton
                    label={product.name}
                    onConfirm={async () => {
                      "use server";
                      await deleteProduct(product.id);
                    }}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
