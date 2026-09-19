# Andrew Paiapala Linux - Especificação do Aplicativo

## 1. Visão Geral
Andrew Paiapala é um software de documentação técnica minimalista, ultrarrápido e projetado para substituir editores pesados e wikis genéricas. A ferramenta une Markdown estruturado, mapeamento inteligente de dependências e busca instantânea.

## 2. Recursos Principais
- **Editor Markdown Estruturado:** Seções predefinidas para Visão Geral, Arquitetura, Fluxos e Decisões Técnicas (ADR), eliminando perda de tempo com formatação visual.
- **Mapa de Relações Contextual:** Vinculação rápida entre módulos, componentes e rotas sem diagramas complexos e difíceis de manter.
- **Busca Instantânea por Tags:** Indexação local em tempo real com atalhos de teclado globais inspirados em ferramentas CLI, permitindo encontrar qualquer informação em segundos.

## 3. Interface e Experiência do Usuário (UI/UX)
- **Design:** Interface limpa, densidade de informação otimizada para desenvolvedores.
- **Painel Duplo (Split View):** Visualização instantânea do Markdown renderizado ao lado do editor bruto com suporte a modo escuro profundo.

## 4. Linguagens e Tecnologias
- **Frontend & Lógica:** TypeScript, React (com Vite) para máxima performance de renderização.
- **Gerenciamento de Estado:** Zustand para controle leve e reativo do estado local.
- **Estilização:** Tailwind CSS com paleta de cores neutras e desaturadas (foco em legibilidade e menor fadiga visual).