import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1501854140801-50d01698950b")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Alimentos Orgânicos para uma Vida Melhor
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in">
            Descubra o sabor autêntico dos alimentos orgânicos cultivados com amor
            e respeito à natureza.
          </p>
          <Button
            className="bg-primary hover:bg-primary-light text-white px-8 py-6 text-lg rounded-full transition-all duration-300 animate-fade-in"
            onClick={() => window.location.href = "#produtos"}
          >
            Conheça Nossos Produtos
          </Button>
        </div>
      </div>
    </div>
  );
};