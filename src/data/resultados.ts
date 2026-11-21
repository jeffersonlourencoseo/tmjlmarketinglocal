/**
 * Provas reais tiradas do painel "Desempenho" do Perfil da Empresa no Google.
 * Nunca colocar número que não esteja num print.
 */
export const paineis = [
  {
    cliente: 'Casa do Brincar',
    segmento: 'Colônia de férias, Irajá',
    periodo: 'jun. a nov. de 2026',
    img: '/img/provas/casa-do-brincar-jun-nov-2026.webp',
    w: 1138, h: 767,
    destaque: { valor: '24.744', texto: 'pessoas viram o perfil' },
    extra: 'Perfil criado do zero. 6.092 pesquisas mostraram o perfil; “colônia de férias rio de janeiro” entre os termos.',
  },
  {
    cliente: 'Sabor que Sustenta',
    segmento: 'Restaurante',
    periodo: 'jun. a nov. de 2026',
    img: '/img/provas/sabor-que-sustenta-desempenho.webp',
    w: 734, h: 450,
    destaque: { valor: '21.035', texto: 'pessoas viram o perfil' },
    extra: 'Print de um período anterior: 8.172 pessoas e 4.048 pesquisas, 3.156 delas pelo termo “restaurantes”. De junho a novembro de 2026 foram 21.035 pessoas.',
  },
];

/** Evolução de um mesmo perfil em dois períodos (prints do painel). */
export const evolucao = {
  cliente: 'Casa do Brincar',
  nota: 'Perfil criado do zero pela TMJL.',
  antes: { periodo: 'mar. a ago. de 2026', valor: '11.800', img: '/img/provas/casa-do-brincar-mar-ago-2026.webp', w: 728, h: 518 },
  depois: { periodo: 'jun. a nov. de 2026', valor: '24.744', img: '/img/provas/casa-do-brincar-jun-nov-2026.webp', w: 1138, h: 767 },
  resumo: 'Pessoas que viram o perfil mais que dobraram de um semestre para o outro.',
};

/**
 * Levantamento feito em 20 nov. 2026 no Google Maps, como gestor dos perfis:
 * "X visualizações" = pessoas que viram o perfil nos últimos 6 meses (jun. a nov. de 2026).
 * Total dos 12 perfis validados: 70.605 visualizações e 679 avaliações (média ponderada 4,88).
 */
export const totais = [
  { valor: '70 mil+', texto: 'pessoas viram os 12 perfis que eu gerencio, de junho a novembro de 2026' },
  { valor: '679', texto: 'avaliações nesses perfis, com nota média 4,9' },
];

export const totalViews = { valor: '70.605', perfis: 12, periodo: 'junho a novembro de 2026' };

export const levantamento = 'Os 5 perfis mais vistos. Somando todos os perfis que eu gerencio: 70.605 pessoas. Dados do painel de desempenho do Google, levantados em 20 de novembro de 2026.';

export const ranking = [
  { cliente: 'Casa do Brincar', local: 'Irajá, Rio de Janeiro', views: '24.744', nota: '5,0', avaliacoes: 113 },
  { cliente: 'Sabor que Sustenta', local: 'Irajá, Rio de Janeiro', views: '21.035', nota: '5,0', avaliacoes: 28 },
  { cliente: 'Barbearia Black Jack', local: 'Itaim Bibi, São Paulo', views: '13.250', nota: '4,7', avaliacoes: 241 },
  { cliente: 'URUS Barbershop', local: 'Joinville, SC', views: '3.750', nota: '4,9', avaliacoes: 114 },
  { cliente: 'Over Barber Conceito', local: 'Meireles, Fortaleza', views: '2.617', nota: '5,0', avaliacoes: 57 },
];

/**
 * ANTES E DEPOIS com controle deslizante (prints do mesmo tamanho).
 * Coloque os arquivos em /public/img/antes-depois/ e preencha aqui.
 */
export interface AntesDepois {
  cliente: string; segmento: string; antes: string; depois: string; w: number; h: number;
  periodoAntes: string; periodoDepois: string; resumo: string;
}
export const antesDepois: AntesDepois[] = [];
