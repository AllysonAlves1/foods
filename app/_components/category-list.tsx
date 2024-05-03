import { db } from "../_lib/prisma";
import CategoryItem from "./category-item";

export default async function CategoryList() {
  const categories = await db.category.findMany({});
  // pegar as categorias do banco de dados
  // renderizar um item para cada categoria
  // server-component
  return (
    <div className="grid grid-cols-2 gap-3">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
