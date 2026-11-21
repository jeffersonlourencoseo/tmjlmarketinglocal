/** Perfis no Google gerenciados pela TMJL (só nome e local, sem números). */
export const perfis = [
  { name: 'Casa do Brincar', segment: 'Colônia de férias', place: 'Irajá, Rio de Janeiro' },
  { name: 'Sabor que Sustenta', segment: 'Restaurante', place: 'Irajá, Rio de Janeiro' },
  { name: 'Barbearia Black Jack', segment: 'Barbearia', place: 'Itaim Bibi, São Paulo' },
  { name: 'URUS Barbershop', segment: 'Barbearia', place: 'Joinville, SC' },
  { name: 'Over Barber Conceito', segment: 'Barbearia', place: 'Meireles, Fortaleza' },
  { name: 'Dra. Camila Albuquerque', segment: 'Cirurgiã-dentista', place: 'Fortaleza, CE' },
  { name: 'Ambtec', segment: 'Licenciamento ambiental', place: 'Guaratiba, Rio de Janeiro' },
  { name: 'Samir Trindade', segment: 'Corretor de plano de saúde', place: 'Centro, Rio de Janeiro' },
  { name: 'Carlos Luiz Eletricista', segment: 'Eletricista', place: 'Rio de Janeiro' },
  { name: 'Choupana do Caboclo Mata Virgem', segment: 'Templo de umbanda', place: 'Nova Iguaçu, RJ' },
  { name: 'Lavínia Monteiro', segment: 'Lash designer', place: 'Cosmos, Rio de Janeiro' },
];

/** Sites entregues. Prints em /public/img/sites/<slug>-d.webp (desktop) e -m.webp (celular). */
export interface SiteWork {
  slug: string;
  name: string;
  segment: string;
  place: string;
  url: string;
  group: 'negocio' | 'beleza' | 'locacao';
}

export const sites: SiteWork[] = [
  { slug: 'casadobrincar', name: 'Casa do Brincar', segment: 'Colônia de férias infantil', place: 'Irajá, RJ', url: 'https://www.casadobrincarrj.com.br', group: 'negocio' },
  { slug: 'over', name: 'Over Barber Conceito', segment: 'Barbearia', place: 'Meireles, Fortaleza', url: 'https://overbarberconceito.vercel.app', group: 'negocio' },
  { slug: 'lavinia', name: 'Lavínia Monteiro', segment: 'Lash designer a domicílio', place: 'Cosmos e Campo Grande, RJ', url: 'https://www.laviniamonteiro.com.br', group: 'beleza' },
  { slug: 'choupana', name: 'Choupana do Caboclo Mata Virgem', segment: 'Templo de umbanda', place: 'Nova Iguaçu, RJ', url: 'https://matavirgem.vercel.app', group: 'negocio' },
  { slug: 'ambtec', name: 'Ambtec', segment: 'Consultoria ambiental', place: 'Rio de Janeiro', url: 'https://www.licenciamentoambientalrio.com.br', group: 'negocio' },
  { slug: 'samir', name: 'Samir Trindade', segment: 'Corretor de plano de saúde', place: 'Centro, Rio de Janeiro', url: 'https://www.planodesaudenorio.com.br', group: 'negocio' },
  { slug: 'layrodrigues', name: 'Lay Rodrigues', segment: 'Extensão de cílios', place: 'Tijuca, RJ', url: 'https://layrodrigues.vercel.app', group: 'beleza' },
  { slug: 'riovidracaria', name: 'Vidraçaria RJ', segment: 'Vidraçaria', place: 'Rio de Janeiro', url: 'https://riovidracaria.vercel.app', group: 'negocio' },
  { slug: 'desentupidorario', name: 'Desentupidora Rio', segment: 'Desentupidora 24h', place: 'Rio de Janeiro', url: 'https://desentupidorario.vercel.app', group: 'negocio' },
  { slug: 'betoneira', name: 'Aluguel de Betoneira RJ', segment: 'Locação de equipamentos', place: 'Rio de Janeiro', url: 'https://www.alugueldebetoneirarj.com.br', group: 'locacao' },
  { slug: 'cacamba', name: 'Caçamba Rápido', segment: 'Aluguel de caçamba', place: 'Rio de Janeiro', url: 'https://www.alugueldecacambario.com.br', group: 'locacao' },
  { slug: 'brinquedos', name: 'Aluguel de Brinquedos RJ', segment: 'Brinquedos para festas', place: 'Rio de Janeiro', url: 'https://www.alugueldebrinquedorj.com.br', group: 'locacao' },
  { slug: 'mesas', name: 'Mesas e Cadeiras Rio', segment: 'Locação para eventos', place: 'Rio de Janeiro', url: 'https://www.alugueldemesaecadeirario.com.br', group: 'locacao' },
];

export const groupLabel: Record<SiteWork['group'], string> = {
  negocio: 'Negócios e serviços',
  beleza: 'Beleza',
  locacao: 'Locação',
};

/** Clientes fotografados em 360°. Fotos em /public/panoramas/<id>/NN.jpg, capas em cards/. */
export interface Pano {
  id: string;
  name: string;
  category: string;
  scenes: string[]; // nomes dos arquivos sem extensão
  sceneNames?: string[];
  tourUrl?: string;
}

const n = (k: number) => Array.from({ length: k }, (_, i) => String(i + 1).padStart(2, '0'));

export const panos: Pano[] = [
  { id: 'los-hermanos', name: 'Barbearia Los Hermanos', category: 'Barbearia', scenes: n(4), sceneNames: ['Fachada', 'Bar e recepção', 'Salão', 'Cadeiras'] },
  { id: 'loja-apimentada', name: 'Apimentada Fashion', category: 'Loja de roupas', scenes: n(7), sceneNames: ['Fachada', 'Loja 1', 'Loja 2', 'Loja 3', 'Loja 4', 'Loja 5', 'Loja 6'] },
  { id: 'gentlemens-barber-beer', name: 'Gentlemens Barber Beer', category: 'Barbearia', scenes: n(5), sceneNames: ['Fachada', 'Entrada', 'Salão', 'Atendimento', 'Bancada'], tourUrl: 'https://fotos360.vercel.app/tour-gentlemens-barber-beer' },
  { id: 'restaurante-seu-bicao', name: 'Seu Restaurante Bicão', category: 'Restaurante', scenes: n(6), sceneNames: ['Fachada', 'Salão 1', 'Salão 2', 'Bufê', 'Salão 3', 'Bebidas'] },
  { id: 'maneros', name: "Manero's", category: 'Restaurante', scenes: n(5), sceneNames: ['Salão', 'Balcão', 'Fachada', 'Bufê', 'Saladas'] },
  { id: 'barbearia-patrick-menezes', name: 'Barbearia Patrick Menezes', category: 'Barbearia', scenes: n(4), sceneNames: ['Fachada', 'Recepção', 'Salão', 'Espera'] },
  { id: 'barbearia-di-souza', name: 'Barbearia Di Souza', category: 'Barbearia', scenes: n(4), sceneNames: ['Entrada', 'Salão', 'Cadeiras', 'Fachada'] },
  { id: 'delicia-do-iraja', name: 'Delícia do Irajá', category: 'Restaurante', scenes: n(4), sceneNames: ['Fachada', 'Entrada', 'Salão', 'Bufê'] },
  { id: 'clinica-nivea-odonto', name: 'Clínica Nívea Odonto', category: 'Clínica odontológica', scenes: n(1), sceneNames: ['Recepção'] },
  { id: 'clinica-dr-fernando-silva', name: 'Clínica Dr. Fernando Silva', category: 'Clínica odontológica', scenes: n(1), sceneNames: ['Consultório'] },
  { id: 'clinica-gastros', name: "Clínica Gastro's", category: 'Clínica médica', scenes: n(1), sceneNames: ['Recepção'] },
  { id: 'escola-tia-laura', name: 'Escola Tia Laura', category: 'Escola infantil', scenes: n(1), sceneNames: ['Pátio'] },
  { id: 'academia-professor-silva-ribeiro', name: 'Academia Professor Silva Ribeiro', category: 'Academia', scenes: n(1), sceneNames: ['Sala de treino'] },
];

export const totalScenes = panos.reduce((a, p) => a + p.scenes.length, 0);
