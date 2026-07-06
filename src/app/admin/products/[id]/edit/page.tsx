import { ProductForm } from "@/components/admin/ProductForm";
import { getAdminCategories } from "../../../categories/actions";
import { getAdminProductById, updateProduct } from "../../actions";
import { notFound } from "next/navigation";

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;

  const [product, categories] = await Promise.all([
    getAdminProductById(resolvedParams.id),
    getAdminCategories(),
  ]);

  if (!product) {
    notFound();
  }

  // Create a bound action that includes the product ID
  const updateProductWithId = updateProduct.bind(null, product.id);

  return (
    <ProductForm
      action={updateProductWithId}
      categories={categories}
      defaultValues={product}
      title="Edit Product"
      submitLabel="Save Changes"
    />
  );
}
