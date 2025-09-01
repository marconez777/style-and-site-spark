# Como Criar Nova Página

## Template Base

Para criar uma nova página, use o template `PageTemplate.tsx` como base. Ele já inclui todos os metadados SEO necessários.

## Exemplo de uso:

```tsx
import PageTemplate from "@/templates/PageTemplate";

const MinhaNovaPageina = () => {
  return (
    <PageTemplate
      title="Título SEO da Página | Ar Play Digital"
      description="Descrição meta para SEO, máximo 160 caracteres"
      keywords="palavra-chave1, palavra-chave2, palavra-chave3"
      canonicalUrl="https://arplaydigital.com/minha-pagina"
      currentPage="Nome na Breadcrumb"
      h1Title="Título H1 da Página"
      subtitle="Subtítulo opcional"
    >
      {/* Conteúdo personalizado da página */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Seu conteúdo aqui */}
        </div>
      </section>
    </PageTemplate>
  );
};

export default MinhaNovaPageina;
```

## Metadados Incluídos Automaticamente:

- ✅ Title tag otimizado
- ✅ Meta description 
- ✅ Meta keywords
- ✅ Meta author
- ✅ Open Graph (Facebook/LinkedIn)
- ✅ Twitter Cards
- ✅ Canonical URL
- ✅ Estrutura responsiva
- ✅ Header e Footer
- ✅ Breadcrumb navigation

## Lembrete:

1. Sempre adicione a nova rota no `App.tsx`
2. NÃO linke a página em menus/footer se for apenas para SEO
3. Use títulos únicos e descritivos
4. Mantenha descriptions entre 150-160 caracteres
5. Use keywords relevantes e específicas