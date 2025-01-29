import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const benefits = [
  {
    title: "Saúde em Primeiro Lugar",
    description: "Alimentos livres de agrotóxicos e pesticidas, cultivados com todo cuidado para preservar seus nutrientes naturais.",
    link: "#saude"
  },
  {
    title: "Sustentabilidade",
    description: "Práticas agrícolas que respeitam o meio ambiente, preservando o solo e a biodiversidade para as futuras gerações.",
    link: "#sustentabilidade"
  },
  {
    title: "Sabor Autêntico",
    description: "O verdadeiro sabor dos alimentos naturais, cultivados com respeito ao seu tempo de crescimento e maturação.",
    link: "#sabor"
  },
];

export const WhyOrganic = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary to-primary-dark" id="por-que-organico">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in">
            Por que Orgânico?
          </h2>
          <p className="text-lg text-green-100 leading-relaxed animate-fade-in">
            Descubra os benefícios de escolher produtos orgânicos para sua alimentação
            e para o planeta.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-white/95 backdrop-blur hover:bg-white transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {benefit.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white group"
                >
                  <span>Saiba mais</span>
                  <ChevronRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};