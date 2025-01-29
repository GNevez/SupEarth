export const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">SupEarth</h3>
            <p className="text-gray-300 leading-relaxed">
              Alimentos orgânicos para uma vida mais saudável e sustentável. 
              Comprometidos com a qualidade e o meio ambiente.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contato</h3>
            <div className="space-y-2 text-gray-300">
              <p className="hover:text-white transition-colors">
                Email: contato@supearth.com.br
              </p>
              <p className="hover:text-white transition-colors">
                Tel: (11) 99999-9999
              </p>
              <p className="hover:text-white transition-colors">
                WhatsApp: (11) 99999-9999
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Endereço</h3>
            <div className="space-y-2 text-gray-300">
              <p>Rua dos Orgânicos, 123</p>
              <p>Jardim Sustentável</p>
              <p>São Paulo - SP</p>
              <p>CEP: 01234-567</p>
            </div>
          </div>
        </div>
        <div className="py-6 border-t border-gray-700">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} SupEarth. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};