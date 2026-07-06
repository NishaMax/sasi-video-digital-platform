"use client";

import { useState } from "react";
import { ServiceForm } from "@/components/admin/ServiceForm";
import { createService, updateService, deleteService } from "./actions";
import { DeleteButton } from "@/components/admin/DeleteButton";
import { Plus, Pencil, Wrench } from "lucide-react";
import { getIcon } from "@/lib/icons";

export default function ServicesClient({ initialServices }: { initialServices: any[] }) {
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Services</h1>
          <p className="text-gray-500 text-sm mt-1">{initialServices.length} active services</p>
        </div>
        {!isAdding && !editingId && (
          <button
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-all shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_25px_rgba(220,38,38,0.35)]"
          >
            <Plus className="w-4 h-4" />
            Add Service
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left Side: Forms */}
        {(isAdding || editingId) && (
          <div className="lg:col-span-1">
            {isAdding && (
              <ServiceForm
                action={createService}
                submitLabel="Create Service"
                onCancel={() => setIsAdding(false)}
              />
            )}
            
            {editingId && (
              <ServiceForm
                action={updateService.bind(null, editingId)}
                defaultValues={initialServices.find((s) => s.id === editingId)}
                submitLabel="Save Changes"
                onCancel={() => setEditingId(null)}
              />
            )}
          </div>
        )}

        {/* Right Side / Full Width: Table */}
        <div className={isAdding || editingId ? "lg:col-span-2" : "lg:col-span-3"}>
          <div className="bg-[#111111] border border-gray-800/60 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-[50px_1fr_120px_160px_130px] gap-4 px-5 py-3 border-b border-gray-800/60 bg-[#0D0D0D]">
              <div />
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Service</span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Badge</span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Turnaround</span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider text-right">Actions</span>
            </div>

            <div className="divide-y divide-gray-800/40">
              {initialServices.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-gray-600 gap-3">
                  <Wrench className="w-10 h-10 text-gray-800" />
                  <p className="text-sm">No services listed yet.</p>
                </div>
              ) : (
                initialServices.map((service) => {
                  const Icon = getIcon(service.icon) || Wrench;
                  return (
                    <div key={service.id} className="grid grid-cols-[50px_1fr_120px_160px_130px] gap-4 px-5 py-4 hover:bg-[#1A1A1A] transition-colors items-center">
                      
                      {/* Icon */}
                      <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-gray-800 flex items-center justify-center flex-shrink-0 text-red-500">
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Name / Desc */}
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-gray-200 truncate">{service.name}</p>
                        <p className="text-[10px] text-gray-600 mt-0.5 truncate">{service.description}</p>
                      </div>

                      {/* Badge */}
                      <div className="flex items-center">
                        {service.badge ? (
                          <span className={`${service.badgeColor || "bg-blue-600"} text-white text-[9px] font-bold px-2 py-0.5 rounded-md uppercase w-fit truncate`}>
                            {service.badge}
                          </span>
                        ) : <span className="text-gray-700 text-xs">—</span>}
                      </div>

                      {/* Turnaround */}
                      <span className="text-[11px] text-gray-400 truncate pr-2">
                        {service.turnaround || "—"}
                      </span>

                      {/* Actions */}
                      <div className="flex items-center gap-2 justify-end">
                        <button
                          onClick={() => {
                            setIsAdding(false);
                            setEditingId(service.id);
                          }}
                          className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-gray-700 text-gray-300 text-xs font-semibold hover:text-white hover:border-gray-600 transition-colors"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <DeleteButton
                          label={service.name}
                          onConfirm={async () => {
                            if (editingId === service.id) setEditingId(null);
                            await deleteService(service.id);
                          }}
                        />
                      </div>

                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
