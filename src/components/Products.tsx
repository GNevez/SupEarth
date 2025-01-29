import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Frutas Orgânicas",
    description: "Frutas frescas cultivadas sem agrotóxicos, direto da nossa fazenda para sua mesa. Sabor autêntico e qualidade garantida.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    link: "#",
  },
  {
    title: "Verduras Frescas",
    description: "Verduras colhidas diariamente de nossa fazenda, mantendo todos os nutrientes e o sabor que só os orgânicos têm.",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
    link: "#",
  },
  {
    title: "Cereais Integrais",
    description: "Grãos integrais ricos em nutrientes, cultivados de forma sustentável e processados com o máximo cuidado.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    link: "#",
  },
];

export const Products = () => {
  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">
          Nossos Produtos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-0">
                <div
                  className="h-48 bg-cover bg-center transform transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600">{product.description}</p>
                  <Button
                    className="w-full bg-primary hover:bg-primary-light text-white transition-colors group"
                    onClick={() => window.location.href = product.link}
                  >
                    Saiba mais
                    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};