import { ProductForm } from "@/components/admin/ProductForm";
import { getAdminCategories } from "../../categories/actions";
import { createProduct } from "../actions";

export default async function NewProductPage() {
  const categories = await getAdminCategories();

  return (
    <ProductForm
      action={createProduct}
      categories={categories}
      title="Add New Product"
      submitLabel="Create Product"
    />
  );
}
