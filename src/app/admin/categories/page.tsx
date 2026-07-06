import CategoriesClient from "./CategoriesClient";
import { getAdminCategories } from "./actions";

export default async function AdminCategoriesPage() {
  const categories = await getAdminCategories();
  
  return <CategoriesClient initialCategories={categories} />;
}
