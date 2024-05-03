const { PrismaClient } = require("@prisma/client");

async function excluirCategoriasEProdutos() {
  const prisma = new PrismaClient();

  try {
    // IDs das categorias que você deseja excluir
    const categoriasParaExcluir = ["569dc48b-77cb-421e-bc80-3dd81728ba22"]; // Substitua pelos IDs reais das categorias

    // Exclua os produtos associados às categorias
    for (const categoryId of categoriasParaExcluir) {
      await prisma.product.deleteMany({
        where: {
          categoryId: categoryId,
        },
      });
    }

    // Em seguida, exclua as categorias
    await prisma.category.deleteMany({
      where: {
        id: { in: categoriasParaExcluir },
      },
    });

    console.log("Categorias e produtos associados excluídos com sucesso.");
  } catch (error) {
    console.error("Erro ao excluir categorias e produtos associados:", error);
  } finally {
    await prisma.$disconnect();
  }
}

excluirCategoriasEProdutos();
