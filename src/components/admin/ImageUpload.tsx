"use client";

import { useState, useRef } from "react";
import { UploadCloud, X, Loader2 } from "lucide-react";

export function ImageUpload({ 
  value, 
  onChange 
}: { 
  value: string; 
  onChange: (url: string) => void;
}) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (e.g. 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("File is too large. Max size is 5MB.");
      return;
    }

    // Validate type
    if (!file.type.startsWith("image/")) {
      setError("Please upload a valid image file.");
      return;
    }

    setIsUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Upload failed");
      }

      onChange(data.url);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Reset input
      }
    }
  };

  return (
    <div className="w-full">
      {/* Hidden input to store the actual URL value for the form submission */}
      <input type="hidden" name="imageUrl" value={value} />

      {error && (
        <p className="text-red-400 text-xs font-semibold mb-2">{error}</p>
      )}

      {value ? (
        <div className="relative w-full aspect-video sm:aspect-[21/9] rounded-xl overflow-hidden border border-gray-700/60 bg-[#1A1A1A] group">
          <img src={value} alt="Uploaded preview" className="w-full h-full object-cover opacity-80" />
          
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute top-2 right-2 p-1.5 bg-black/60 hover:bg-red-600 backdrop-blur text-white rounded-lg transition-all opacity-0 group-hover:opacity-100 shadow-xl"
            title="Remove image"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div 
          onClick={() => fileInputRef.current?.click()}
          className={`w-full aspect-video sm:aspect-[21/9] rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors ${
            isUploading ? "border-gray-700 bg-[#1A1A1A]/50" : "border-gray-700 hover:border-red-600/50 hover:bg-[#1A1A1A]/80"
          }`}
        >
          {isUploading ? (
            <>
              <Loader2 className="w-8 h-8 text-red-500 animate-spin" />
              <span className="text-sm font-semibold text-gray-400">Uploading...</span>
            </>
          ) : (
            <>
              <div className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center">
                <UploadCloud className="w-5 h-5 text-gray-400" />
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-white mb-0.5">Click to upload image</p>
                <p className="text-xs text-gray-500">SVG, PNG, JPG or WEBP (max. 5MB)</p>
              </div>
            </>
          )}
        </div>
      )}

      {/* Actual hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png, image/jpeg, image/webp, image/svg+xml"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
