import prisma from "@/lib/prisma";
import { Package, FolderOpen, Wrench, MapPin, TrendingUp } from "lucide-react";

async function getStats() {
  const [productCount, categoryCount, serviceCount] = await Promise.all([
    prisma.product.count(),
    prisma.category.count(),
    prisma.service.count(),
  ]);

  const recentProducts = await prisma.product.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    include: { category: true },
  });

  return { productCount, categoryCount, serviceCount, recentProducts };
}

export default async function AdminDashboardPage() {
  const { productCount, categoryCount, serviceCount, recentProducts } = await getStats();

  const stats = [
    { label: "Total Products", value: productCount, icon: Package, color: "text-red-500", bg: "bg-red-600/10 border-red-600/20" },
    { label: "Categories", value: categoryCount, icon: FolderOpen, color: "text-blue-400", bg: "bg-blue-600/10 border-blue-600/20" },
    { label: "Services", value: serviceCount, icon: Wrench, color: "text-yellow-400", bg: "bg-yellow-600/10 border-yellow-600/20" },
    { label: "Branches", value: 2, icon: MapPin, color: "text-green-400", bg: "bg-green-600/10 border-green-600/20" },
  ];

  return (
    <div className="p-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-white">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back. Here's an overview of your store.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map(({ label, value, icon: Icon, color, bg }) => (
          <div
            key={label}
            className={`bg-[#111111] border ${bg} rounded-2xl p-5 flex flex-col gap-3`}
          >
            <div className={`w-10 h-10 rounded-xl border ${bg} flex items-center justify-center`}>
              <Icon className={`w-5 h-5 ${color}`} />
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">{value}</p>
              <p className="text-gray-500 text-xs font-medium mt-0.5">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Products Table */}
      <div className="bg-[#111111] border border-gray-800/60 rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800/60">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-gray-500" />
            <h2 className="text-sm font-bold text-white">Recently Added Products</h2>
          </div>
          <a
            href="/admin/products"
            className="text-xs text-red-500 font-semibold hover:text-red-400 transition-colors"
          >
            View all →
          </a>
        </div>

        <div className="divide-y divide-gray-800/40">
          {recentProducts.length === 0 ? (
            <div className="px-6 py-10 text-center text-gray-600 text-sm">
              No products yet. <a href="/admin/products/new" className="text-red-500 hover:underline">Add your first product →</a>
            </div>
          ) : (
            recentProducts.map((product) => (
              <div key={product.id} className="flex items-center gap-4 px-6 py-4 hover:bg-[#1A1A1A] transition-colors">
                {/* Icon placeholder / image */}
                <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-gray-800/60 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <Package className="w-4 h-4 text-gray-600" />
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-200 truncate">{product.name}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{product.category.name}</p>
                </div>

                {/* Badge */}
                {product.badge && (
                  <span className={`hidden sm:block ${product.badgeColor || "bg-red-600"} text-white text-[9px] font-bold px-2 py-0.5 rounded-md uppercase`}>
                    {product.badge}
                  </span>
                )}

                {/* Branches */}
                <div className="flex gap-1.5 flex-shrink-0">
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md uppercase ${product.availableKalawana ? "bg-green-900/40 text-green-400" : "bg-gray-800 text-gray-600"}`}>
                    KLW
                  </span>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md uppercase ${product.availableRatnapura ? "bg-green-900/40 text-green-400" : "bg-gray-800 text-gray-600"}`}>
                    RTP
                  </span>
                </div>

                {/* Price */}
                <p className="text-sm font-bold text-red-500 flex-shrink-0 w-24 text-right">
                  {product.price ? `Rs. ${product.price.toLocaleString()}` : "—"}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
