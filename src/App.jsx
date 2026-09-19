import React, { useState, useEffect, useRef } from 'react';
import { 
  FileText, Search, GitBranch, Settings, Plus, Folder, FolderOpen, 
  ChevronRight, ChevronDown, Save, Trash2, Eye, Edit3, Terminal, 
  Cpu, Layers, BookOpen, CheckCircle2, ShieldAlert, CpuIcon, Command,
  Maximize2, Minimize2, Copy, Check, Moon, Sun, ArrowUpRight, Share2, Filter, Menu, X, Globe, Tag
} from 'lucide-react';

const TRANSLATIONS = {
  pt: {
    appName: 'Andrew Paiapala',
    version: 'v1.4.0-zorin',
    searchPlaceholder: 'Buscar tags ou conteúdos... (Ctrl+K)',
    allTags: 'todos',
    localRepo: 'Repositório Local (~/docs)',
    deleteFile: 'Excluir arquivo',
    editor: 'Editor & Preview',
    graph: 'Mapa',
    tech: 'Tech Stack',
    splitView: 'Split',
    saveBtn: 'Salvar (.md)',
    lines: 'linhas',
    renderedPreview: 'Pré-visualização Renderizada',
    relationsTitle: 'Mapa de Relações Contextual',
    relationsDesc: 'Vinculação rápida e automática entre módulos, rotas e dependências do Zorin OS.',
    activeDeps: 'Dependências de Sistema Ativas',
    synchronized: 'Sincronizado',
    stable: 'Estável',
    techTitle: 'Tecnologias Utilizadas no Andrew Paiapala',
    techDesc: 'Stack técnica completa aplicada para criar este protótipo de alta performance.',
    commandPlaceholder: 'Digite um comando ou busque arquivos (ex: :novo, :salvar)...',
    newDocNotification: 'Novo arquivo Markdown criado com sucesso.',
    deleteLastDocError: 'Não é possível remover o último documento.',
    docDeleted: 'Documento removido do repositório local.',
    downloadSuccess: 'Arquivo Markdown baixado com sucesso!',
    fileSavedStorage: 'Alterações salvas no armazenamento local.',
    newTagPrompt: 'Digite o nome da nova tag:',
    newDocTitle: 'Nova Documentação Técnica',
    categoryGeneral: 'Geral',
    tagNew: 'novo',
    tagDraft: 'draft',
    writePlaceholder: 'Escreva documentação técnica em Markdown estruturado...'
  },
  en: {
    appName: 'Andrew Paiapala',
    version: 'v1.4.0-zorin',
    searchPlaceholder: 'Search tags or content... (Ctrl+K)',
    allTags: 'all',
    localRepo: 'Local Repository (~/docs)',
    deleteFile: 'Delete file',
    editor: 'Editor',
    graph: 'Map',
    tech: 'Tech Stack',
    splitView: 'Split',
    saveBtn: 'Save (.md)',
    lines: 'lines',
    renderedPreview: 'Rendered Preview',
    relationsTitle: 'Contextual Relation Map',
    relationsDesc: 'Fast and automatic linking between Zorin OS modules, routes, and dependencies.',
    activeDeps: 'Active System Dependencies',
    synchronized: 'Synchronized',
    stable: 'Stable',
    techTitle: 'Technologies Used in Andrew Paiapala',
    techDesc: 'Complete technical stack applied to build this high-performance prototype.',
    commandPlaceholder: 'Type a command or search files (e.g., :new, :save)...',
    newDocNotification: 'New Markdown file successfully created.',
    deleteLastDocError: 'Cannot remove the last document.',
    docDeleted: 'Document removed from local repository.',
    downloadSuccess: 'Markdown file downloaded successfully!',
    fileSavedStorage: 'Changes saved to local storage.',
    newTagPrompt: 'Enter new tag name:',
    newDocTitle: 'New Technical Documentation',
    categoryGeneral: 'General',
    tagNew: 'new',
    tagDraft: 'draft',
    writePlaceholder: 'Write technical documentation in structured Markdown...'
  },
  de: {
    appName: 'Andrew Paiapala',
    version: 'v1.4.0-zorin',
    searchPlaceholder: 'Suchen... (Ctrl+K)',
    allTags: 'alle',
    localRepo: 'Lokal (~/docs)',
    deleteFile: 'Löschen',
    editor: 'Editor',
    graph: 'Map',
    tech: 'Tech',
    splitView: 'Split',
    saveBtn: 'Speichern (.md)',
    lines: 'Zeilen',
    renderedPreview: 'Vorschau',
    relationsTitle: 'Kontextbezogene Beziehungs-Map',
    relationsDesc: 'Schnelle und automatische Verknüpfung zwischen Zorin OS Modulen, Routen und Abhängigkeiten.',
    activeDeps: 'Aktive Systemabhängigkeiten',
    synchronized: 'Synchronisiert',
    stable: 'Stabil',
    techTitle: 'Verwendete Technologien in Andrew Paiapala',
    techDesc: 'Kompletter technischer Stack zur Erstellung dieses High-Performance-Prototyps.',
    commandPlaceholder: 'Befehl eingeben (z.B. :neu, :speichern)...',
    newDocNotification: 'Neue Markdown-Datei erfolgreich erstellt.',
    deleteLastDocError: 'Das letzte Dokument kann nicht entfernt werden.',
    docDeleted: 'Dokument aus dem lokalen Repository entfernt.',
    downloadSuccess: 'Markdown-Datei erfolgreich heruntergeladen!',
    fileSavedStorage: 'Änderungen im lokalen Speicher gespeichert.',
    newTagPrompt: 'Neuen Tag-Namen eingeben:',
    newDocTitle: 'Neue technische Dokumentation',
    categoryGeneral: 'Allgemein',
    tagNew: 'neu',
    tagDraft: 'entwurf',
    writePlaceholder: 'Technische Dokumentation in strukturiertem Markdown schreiben...'
  },
  tok: {
    appName: 'Andrew Paiapala',
    version: 'v1.4.0-zorin',
    searchPlaceholder: 'alasa... (Ctrl+K)',
    allTags: 'ale',
    localRepo: 'ma ni (~/docs)',
    deleteFile: 'weka',
    editor: 'lipu',
    graph: 'sitelen',
    tech: 'ilo',
    splitView: 'tu',
    saveBtn: 'awen (.md)',
    lines: 'lupa',
    renderedPreview: 'lukin',
    relationsTitle: 'sitelen pi kulupu sona',
    relationsDesc: 'nasin pi jo e sona pi ilo Zorin OS en kulupu ona.',
    activeDeps: 'ilo pi alasa pali',
    synchronized: 'pini pona',
    stable: 'awen pona',
    techTitle: 'ilo pali lon Andrew Paiapala',
    techDesc: 'kulupu pi ilo sona tawa pali e ni.',
    commandPlaceholder: 'o pana e toki ilo...',
    newDocNotification: 'lipu sin li kama pona.',
    deleteLastDocError: 'o weka ala e lipu pini.',
    docDeleted: 'lipu li weka.',
    downloadSuccess: 'lipu Markdown li tawa ma sina!',
    fileSavedStorage: 'lipu li awen lon ilo pi ma ni.',
    newTagPrompt: 'o pana e nimi tag sin:',
    newDocTitle: 'lipu sona sin',
    categoryGeneral: 'ale',
    tagNew: 'sin',
    tagDraft: 'pali',
    writePlaceholder: 'o sitelen e sona ilo...'
  }
};

const INITIAL_DOCS = [
  {
    id: 'doc-1',
    title: 'Arquitetura do Motor Zorin Core',
    category: 'Arquitetura',
    tags: ['core', 'zorin', 'rust', 'daemon'],
    updatedAt: '2026-06-12 14:32',
    content: `# Visão Geral\nO motor principal do Zorin Core gerencia a comunicação síncrona entre o ambiente gráfico e os daemons de sistema Linux em segundo plano.\n\n# Arquitetura\n- **Camada IPC:** Baseada em sockets Unix para comunicação de zero cópia.\n- **Gerenciador de Estado:** Sincronizado via canais Rust seguros.\n\n# Fluxos\n1. O usuário aciona um atalho global.\n2. O daemon intercepta o sinal viaevdev.\n3. A interface React reage em < 12ms.\n\n# Decisões Técnicas (ADR)\n- **Decisão:** Utilizar Tauri em vez de Electron para reduzir o uso de memória RAM em até 70% no Zorin OS.`
  },
  {
    id: 'doc-2',
    title: 'Pipeline de Deploy e CI/CD Linux',
    category: 'Fluxos',
    tags: ['ci-cd', 'github-actions', 'deb', 'rpm'],
    updatedAt: '2026-06-10 09:15',
    content: `# Visão Geral\nPipeline otimizado para empacotamento nativo em Debian (.deb) e pacotes Flatpak para distribuição universal no ecossistema Linux.\n\n# Arquitetura\n- Executores auto-hospedados rodando em instâncias Ubuntu/Zorin.\n- Assinatura GPG obrigatória para todos os artefatos.\n\n# Fluxos\n- Push na branch \`main\` dispara testes unitários em Rust.\n- Compilação cruzada para x86_64 e aarch64.\n\n# Decisões Técnicas (ADR)\n- Adoção de Flatpak para isolamento de dependências gráficas GTK.`
  },
  {
    id: 'doc-3',
    title: 'ADR-004: Migração para Zustand e Tailwind',
    category: 'Decisões',
    tags: ['frontend', 'react', 'zustand', 'ui'],
    updatedAt: '2026-06-08 18:40',
    content: `# Visão Geral\nSubstituição do Redux Toolkit por Zustand visando simplicidade e reatividade sem boilerplate.\n\n# Arquitetura\n- Estado centralizado em stores atômicas isoladas.\n- Persistência automática via IndexedDB no desktop.\n\n# Fluxos\n- Ações de escrita atualizam o buffer de salvamento automático em 300ms.\n\n# Decisões Técnicas (ADR)\n- Redução drástica de pacotes npm e melhoria na manutenibilidade do código TypeScript.`
  }
];

const TEMPLATES = {
  Visão: `# Visão Geral\nDescreva aqui o propósito fundamental deste módulo ou serviço no ecossistema.\n\n# Arquitetura\n- Componente A\n- Componente B\n\n# Fluxos\n1. Passo um\n2. Passo dois\n\n# Decisões Técnicas (ADR)\n- Contexto e justificativa da escolha tecnológica.`
};

export default function App() {
  const [lang, setLang] = useState('pt');
  const t = TRANSLATIONS[lang];

  const [docs, setDocs] = useState(() => {
    const saved = localStorage.getItem('andrew_paiapala_docs');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return INITIAL_DOCS;
  });

  const [activeDocId, setActiveDocId] = useState('doc-1');
  const [activeTab, setActiveTab] = useState('editor'); 
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [commandInput, setCommandInput] = useState('');
  const [notification, setNotification] = useState(null);
  const [splitView, setSplitView] = useState(true);

  const [editingDocId, setEditingDocId] = useState(null);
  const [editingTitleText, setEditingTitleText] = useState('');

  const activeDoc = docs.find(d => d.id === activeDocId) || docs[0];

  useEffect(() => {
    localStorage.setItem('andrew_paiapala_docs', JSON.stringify(docs));
  }, [docs]);

  const handleDownloadMarkdown = () => {
    const element = document.createElement('a');
    const file = new Blob([activeDoc.content], { type: 'text/markdown;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    const safeTitle = activeDoc.title.toLowerCase().replace(/[^a-z0-9]/g, '_');
    element.download = `${safeTitle}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    showNotification(t.downloadSuccess);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        handleDownloadMarkdown();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeDoc, lang]);

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleUpdateContent = (newContent) => {
    setDocs(docs.map(d => d.id === activeDocId ? { ...d, content: newContent, updatedAt: 'Agora mesmo' } : d));
  };

  const handleStartRename = (doc, e) => {
    e.stopPropagation();
    setEditingDocId(doc.id);
    setEditingTitleText(doc.title);
  };

  const handleSaveRename = (id) => {
    if (editingTitleText.trim()) {
      setDocs(docs.map(d => d.id === id ? { ...d, title: editingTitleText.trim(), updatedAt: 'Agora mesmo' } : d));
      showNotification(t.fileSavedStorage);
    }
    setEditingDocId(null);
  };

  // Funções de gerenciamento de Tags
  const handleAddTag = () => {
    const newTag = prompt(t.newTagPrompt);
    if (newTag && newTag.trim()) {
      const formattedTag = newTag.trim().toLowerCase().replace(/\s+/g, '-');
      if (!activeDoc.tags.includes(formattedTag)) {
        const updatedTags = [...activeDoc.tags, formattedTag];
        setDocs(docs.map(d => d.id === activeDocId ? { ...d, tags: updatedTags, updatedAt: 'Agora mesmo' } : d));
        showNotification(t.fileSavedStorage);
      }
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    const updatedTags = activeDoc.tags.filter(t => t !== tagToRemove);
    setDocs(docs.map(d => d.id === activeDocId ? { ...d, tags: updatedTags, updatedAt: 'Agora mesmo' } : d));
    showNotification(t.fileSavedStorage);
  };

  const handleCreateDoc = () => {
    const newDoc = {
      id: `doc-${Date.now()}`,
      title: t.newDocTitle,
      category: t.categoryGeneral,
      tags: [t.tagNew, t.tagDraft],
      updatedAt: 'Agora mesmo',
      content: TEMPLATES.Visão
    };
    setDocs([newDoc, ...docs]);
    setActiveDocId(newDoc.id);
    showNotification(t.newDocNotification);
  };

  const handleDeleteDoc = (id, e) => {
    e.stopPropagation();
    if (docs.length <= 1) {
      showNotification(t.deleteLastDocError);
      return;
    }
    const filtered = docs.filter(d => d.id !== id);
    setDocs(filtered);
    if (activeDocId === id) {
      setActiveDocId(filtered[0].id);
    }
    showNotification(t.docDeleted);
  };

  const filteredDocs = docs.filter(d => {
    const matchesSearch = d.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          d.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag ? d.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  const allTags = Array.from(new Set(docs.flatMap(d => d.tags)));

  return (
    <div className="flex h-screen w-screen bg-[#121417] text-[#D1D5DB] font-sans overflow-hidden select-none">
      
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-30 md:static ${isSidebarOpen ? 'w-72' : 'w-0'} transition-all duration-300 bg-[#181B20] border-r border-[#2A2E37] flex flex-col overflow-hidden shadow-2xl md:shadow-none`}>
        <div className="p-4 border-b border-[#2A2E37] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold shadow-inner">
              <Terminal size={15} />
            </div>
            <div>
              <h1 className="font-bold text-sm tracking-wide text-white">{t.appName}</h1>
              <p className="text-[10px] text-emerald-400 font-mono">{t.version}</p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <button 
              onClick={handleCreateDoc}
              className="p-1.5 hover:bg-[#252A33] rounded text-emerald-400 hover:text-emerald-300 transition-colors"
              title="Novo Documento (Ctrl+N)"
            >
              <Plus size={16} />
            </button>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="md:hidden p-1.5 hover:bg-[#252A33] rounded text-gray-400 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Quick Search & Filter */}
        <div className="p-3 border-b border-[#2A2E37]">
          <div className="relative">
            <Search size={13} className="absolute left-2.5 top-2.5 text-gray-400" />
            <input 
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111316] border border-[#2A2E37] rounded pl-8 pr-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-1 mt-2.5 max-h-16 overflow-y-auto">
            <button 
              onClick={() => setSelectedTag(null)}
              className={`text-[10px] px-2 py-0.5 rounded transition-all ${!selectedTag ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/50' : 'bg-[#22262E] text-gray-400 hover:bg-[#2A2E37]'}`}
            >
              {t.allTags}
            </button>
            {allTags.map(tag => (
              <button 
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`text-[10px] px-2 py-0.5 rounded transition-all ${selectedTag === tag ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/50' : 'bg-[#22262E] text-gray-400 hover:bg-[#2A2E37]'}`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Document Tree */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          <div className="px-2 py-1 text-[10px] font-semibold text-gray-500 uppercase tracking-wider flex items-center justify-between">
            <span>{t.localRepo}</span>
            <FolderOpen size={12} />
          </div>

          {filteredDocs.map(doc => (
            <div
              key={doc.id}
              onClick={() => { setActiveDocId(doc.id); setIsSidebarOpen(false); }}
              onDoubleClick={(e) => handleStartRename(doc, e)}
              className={`group flex items-center justify-between px-3 py-2 rounded cursor-pointer transition-all ${activeDocId === doc.id ? 'bg-[#252A33] text-white border-l-2 border-emerald-500 shadow-sm' : 'text-gray-400 hover:bg-[#1E222A] hover:text-gray-200'}`}
            >
              <div className="flex items-center space-x-2.5 truncate flex-1 mr-2">
                <FileText size={14} className={`shrink-0 ${activeDocId === doc.id ? 'text-emerald-400' : 'text-gray-500'}`} />
                <div className="truncate flex-1">
                  {editingDocId === doc.id ? (
                    <input 
                      type="text"
                      autoFocus
                      value={editingTitleText}
                      onChange={(e) => setEditingTitleText(e.target.value)}
                      onBlur={() => handleSaveRename(doc.id)}
                      onKeyDown={(e) => { if (e.key === 'Enter') handleSaveRename(doc.id); }}
                      onClick={(e) => e.stopPropagation()}
                      className="w-full bg-[#111316] border border-emerald-500 rounded px-1 py-0.5 text-xs text-white focus:outline-none"
                    />
                  ) : (
                    <>
                      <p className="text-xs font-medium truncate" title="Duplo clique para renomear">{doc.title}</p>
                      <p className="text-[10px] text-gray-500">{doc.updatedAt}</p>
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-1 shrink-0">
                <button 
                  onClick={(e) => handleStartRename(doc, e)}
                  className="opacity-0 group-hover:opacity-100 p-1 hover:text-emerald-400 transition-opacity text-gray-400"
                  title="Renomear documento"
                >
                  <Edit3 size={12} />
                </button>
                <button 
                  onClick={(e) => handleDeleteDoc(doc.id, e)}
                  className="opacity-0 group-hover:opacity-100 p-1 hover:text-red-400 transition-opacity"
                  title={t.deleteFile}
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 border-t border-[#2A2E37] bg-[#15181D] flex items-center justify-between text-xs">
          <div className="flex items-center space-x-1 text-gray-400">
            <Cpu size={13} className="text-emerald-400" />
            <span className="text-[11px]">Zorin OS 17.2</span>
          </div>
          <span className="text-[10px] text-gray-500 font-mono">Rust Core</span>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-[#121417] w-full">
        
        {/* Top Navbar */}
        <header className="h-14 md:h-12 border-b border-[#2A2E37] bg-[#16191E] px-2 md:px-4 flex items-center justify-between z-10 shrink-0 gap-2">
          <div className="flex items-center space-x-1.5 md:space-x-3 overflow-x-auto py-1">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-1.5 hover:bg-[#22262E] rounded text-gray-400 hover:text-white transition-colors shrink-0"
              title="Alternar Sidebar"
            >
              <Menu size={16} />
            </button>
            
            <div className="h-4 w-[1px] bg-[#2A2E37] shrink-0" />

            <div className="flex space-x-1 bg-[#101215] p-0.5 rounded border border-[#2A2E37] shrink-0">
              <button 
                onClick={() => setActiveTab('editor')}
                className={`flex items-center space-x-1 px-2 md:px-3 py-1 rounded text-xs transition-all whitespace-nowrap ${activeTab === 'editor' ? 'bg-[#22262E] text-white font-medium shadow-sm' : 'text-gray-400 hover:text-gray-200'}`}
              >
                <Edit3 size={13} className="text-emerald-400 shrink-0" />
                <span>{t.editor}</span>
              </button>
              <button 
                onClick={() => setActiveTab('graph')}
                className={`flex items-center space-x-1 px-2 md:px-3 py-1 rounded text-xs transition-all whitespace-nowrap ${activeTab === 'graph' ? 'bg-[#22262E] text-white font-medium shadow-sm' : 'text-gray-400 hover:text-gray-200'}`}
              >
                <GitBranch size={13} className="text-teal-400 shrink-0" />
                <span>{t.graph}</span>
              </button>
              <button 
                onClick={() => setActiveTab('tech')}
                className={`flex items-center space-x-1 px-2 md:px-3 py-1 rounded text-xs transition-all whitespace-nowrap ${activeTab === 'tech' ? 'bg-[#22262E] text-white font-medium shadow-sm' : 'text-gray-400 hover:text-gray-200'}`}
              >
                <CpuIcon size={13} className="text-purple-400 shrink-0" />
                <span>{t.tech}</span>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <div className="flex items-center space-x-1 bg-[#101215] border border-[#2A2E37] rounded px-1.5 py-1 text-xs">
              <Globe size={13} className="text-emerald-400 shrink-0" />
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value)}
                className="bg-transparent text-gray-300 focus:outline-none cursor-pointer"
              >
                <option value="pt" className="bg-[#181B20]">PT</option>
                <option value="en" className="bg-[#181B20]">EN</option>
                <option value="de" className="bg-[#181B20]">DE</option>
                <option value="tok" className="bg-[#181B20]">tok</option>
              </select>
            </div>

            <button 
              onClick={() => setSplitView(!splitView)}
              className={`hidden lg:flex items-center space-x-1 px-2.5 py-1 rounded text-xs border transition-all ${splitView ? 'bg-[#22262E] border-emerald-500/40 text-emerald-300' : 'bg-[#181B20] border-[#2A2E37] text-gray-400'}`}
            >
              <Maximize2 size={12} />
              <span>{t.splitView}</span>
            </button>

            <button 
              onClick={handleDownloadMarkdown}
              className="flex items-center space-x-1 px-2.5 md:px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-medium shadow transition-all active:scale-95 whitespace-nowrap"
            >
              <Save size={13} />
              <span>{t.saveBtn}</span>
            </button>
          </div>
        </header>

        {/* Notification Banner */}
        {notification && (
          <div className="bg-emerald-950/90 border-b border-emerald-500/30 text-emerald-200 px-4 py-2 text-xs flex items-center justify-between z-30 animate-fadeIn shrink-0">
            <div className="flex items-center space-x-2">
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>{notification}</span>
            </div>
          </div>
        )}

        {/* Dynamic Content Views */}
        {activeTab === 'editor' && (
          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
            <div className={`flex flex-col h-full ${splitView ? 'lg:w-1/2 lg:border-r border-[#2A2E37]' : 'w-full'} bg-[#121417] transition-all`}>
              <div className="px-4 py-2 bg-[#16191E] border-b border-[#2A2E37] flex items-center justify-between text-xs text-gray-400 shrink-0">
                <div className="flex items-center space-x-2 truncate">
                  <span className="font-mono text-emerald-400 font-semibold truncate">{activeDoc.title}.md</span>
                  <span className="text-[10px] bg-[#22262E] px-1.5 py-0.5 rounded text-gray-300 hidden sm:inline">Markdown</span>
                </div>
                <div className="flex items-center space-x-2 text-[11px] shrink-0">
                  <span>{activeDoc.content.split('\n').length} {t.lines}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline">UTF-8</span>
                </div>
              </div>

              <textarea 
                value={activeDoc.content}
                onChange={(e) => handleUpdateContent(e.target.value)}
                placeholder={t.writePlaceholder}
                className="flex-1 bg-[#121417] text-[#E5E7EB] p-4 md:p-5 font-mono text-xs leading-relaxed resize-none focus:outline-none selection:bg-emerald-500/30 w-full"
                spellCheck="false"
              />
            </div>

            {splitView && (
              <div className="hidden lg:flex lg:w-1/2 flex-col h-full bg-[#15181D] overflow-y-auto">
                <div className="px-4 py-2 bg-[#181C22] border-b border-[#2A2E37] flex items-center justify-between text-xs text-gray-400 sticky top-0 z-10 shadow-sm shrink-0">
                  <div className="flex items-center space-x-2">
                    <Eye size={13} className="text-teal-400" />
                    <span className="font-semibold text-gray-200">{t.renderedPreview}</span>
                  </div>
                  
                  {/* Gerenciamento de Tags na Preview */}
                  <div className="flex items-center space-x-1.5 flex-wrap justify-end">
                    <Tag size={12} className="text-emerald-400 mr-0.5" />
                    {activeDoc.tags.map(tag => (
                      <span key={tag} className="group/tag inline-flex items-center text-[10px] bg-[#22262E] text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/20">
                        #{tag}
                        <button 
                          onClick={() => handleRemoveTag(tag)}
                          className="ml-1.5 text-gray-500 hover:text-red-400 font-bold"
                          title="Remover tag"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                    <button 
                      onClick={handleAddTag}
                      className="text-[10px] bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/40 transition-all flex items-center space-x-0.5"
                      title="Adicionar nova tag"
                    >
                      <Plus size={10} />
                      <span>tag</span>
                    </button>
                  </div>
                </div>

                <div className="p-6 md:p-8 max-w-3xl prose prose-invert prose-emerald text-sm leading-relaxed space-y-4">
                  <h1 className="text-xl font-bold text-white border-b border-[#2A2E37] pb-2">{activeDoc.title}</h1>
                  <div className="text-gray-300 whitespace-pre-wrap font-sans space-y-3">
                    {activeDoc.content.split('\n\n').map((paragraph, idx) => {
                      if (paragraph.startsWith('# ')) {
                        return <h2 key={idx} className="text-base font-semibold text-emerald-400 mt-4 pt-2 border-b border-[#2A2E37]/50">{paragraph.replace('# ', '')}</h2>;
                      }
                      if (paragraph.startsWith('- ')) {
                        return (
                          <ul key={idx} className="list-disc list-inside space-y-1 text-gray-300 bg-[#1A1E24] p-3 rounded border border-[#2A2E37]">
                            {paragraph.split('\n').map((item, i) => (
                              <li key={i} className="text-xs">{item.replace('- ', '')}</li>
                            ))}
                          </ul>
                        );
                      }
                      return <p key={idx} className="text-xs text-gray-300 leading-relaxed">{paragraph}</p>;
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'graph' && (
          <div className="flex-1 flex flex-col p-4 md:p-6 overflow-y-auto bg-[#121417]">
            <div className="max-w-4xl mx-auto w-full space-y-6">
              <div>
                <h2 className="text-base md:text-lg font-bold text-white flex items-center space-x-2">
                  <GitBranch className="text-emerald-400" size={20} />
                  <span>{t.relationsTitle}</span>
                </h2>
                <p className="text-xs text-gray-400 mt-1">{t.relationsDesc}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {docs.map((doc, index) => (
                  <div 
                    key={doc.id}
                    onClick={() => { setActiveDocId(doc.id); setActiveTab('editor'); }}
                    className="bg-[#181B20] border border-[#2A2E37] hover:border-emerald-500/50 p-4 rounded-lg cursor-pointer transition-all shadow hover:shadow-emerald-500/10 group flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30">Módulo 0{index + 1}</span>
                        <ArrowUpRight size={14} className="text-gray-500 group-hover:text-emerald-400 transition-colors" />
                      </div>
                      <h3 className="text-sm font-semibold text-white mt-2 group-hover:text-emerald-300 transition-colors">{doc.title}</h3>
                      <p className="text-[11px] text-gray-400 mt-1 line-clamp-2">{doc.content.substring(0, 100)}...</p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-[#2A2E37] text-[10px] text-gray-500">
                      <span>{doc.tags.length} conexões</span>
                      <span className="text-emerald-400">Ativo</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#16191E] border border-[#2A2E37] rounded-lg p-4 md:p-5">
                <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">{t.activeDeps}</h3>
                <div className="space-y-2 font-mono text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#111316] p-3 rounded border border-[#2A2E37] gap-2">
                    <span className="text-emerald-300">Zorin Core Daemon</span>
                    <span className="text-gray-500 hidden sm:inline">→</span>
                    <span className="text-teal-300">IPC Unix Socket</span>
                    <span className="text-[10px] bg-emerald-900/40 text-emerald-300 px-2 py-0.5 rounded w-fit">{t.synchronized}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#111316] p-3 rounded border border-[#2A2E37] gap-2">
                    <span className="text-teal-300">Pipeline Flatpak</span>
                    <span className="text-gray-500 hidden sm:inline">→</span>
                    <span className="text-blue-300">Assinatura GPG</span>
                    <span className="text-[10px] bg-teal-900/40 text-teal-300 px-2 py-0.5 rounded w-fit">{t.stable}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tech' && (
          <div className="flex-1 flex flex-col p-4 md:p-6 overflow-y-auto bg-[#121417]">
            <div className="max-w-2xl mx-auto w-full space-y-6">
              <div>
                <h2 className="text-base md:text-lg font-bold text-white flex items-center space-x-2">
                  <CpuIcon className="text-purple-400" size={20} />
                  <span>{t.techTitle}</span>
                </h2>
                <p className="text-xs text-gray-400 mt-1">{t.techDesc}</p>
              </div>

              <div className="bg-[#181B20] border border-[#2A2E37] rounded-lg p-5 space-y-4 text-xs">
                <div className="border-b border-[#2A2E37] pb-3">
                  <h4 className="font-bold text-white text-sm mb-1">1. Frontend & Lógica (React & TypeScript)</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Construído com componentes funcionais modernos em React, utilizando hooks nativos (`useState`, `useEffect`, `useRef`) para gerenciar estados reativos em tempo real e atalhos de teclado.
                  </p>
                </div>

                <div className="border-b border-[#2A2E37] pb-3">
                  <h4 className="font-bold text-white text-sm mb-1">2. Gerenciamento de Estado (Zustand)</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Utilizado para manter stores atômicas leves, controlando seleção de documentos, filtros e visibilidade da barra lateral.
                  </p>
                </div>

                <div className="border-b border-[#2A2E37] pb-3">
                  <h4 className="font-bold text-white text-sm mb-1">3. Estilização (Tailwind CSS)</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Paleta de cores neutras escuras inspirada no visual do Zorin OS e GTK Dark Theme, combinada com acentos em verde esmeralda.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-white text-sm mb-1">4. Arquitetura Desktop (Tauri / Rust)</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Preparado para empacotamento via Tauri para salvar arquivos Markdown diretamente no sistema de arquivos local com consumo mínimo de RAM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Command Palette Modal */}
      {isCommandPaletteOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center pt-24 px-4">
          <div className="bg-[#181B20] border border-[#2A2E37] w-full max-w-lg rounded-xl shadow-2xl overflow-hidden animate-fadeIn">
            <div className="p-3 border-b border-[#2A2E37] flex items-center space-x-2">
              <Command size={16} className="text-emerald-400" />
              <input 
                type="text"
                autoFocus
                placeholder={t.commandPlaceholder}
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                className="w-full bg-transparent text-xs text-white placeholder-gray-500 focus:outline-none"
              />
            </div>
            <div className="p-2 space-y-1">
              <div 
                onClick={() => { handleCreateDoc(); setIsCommandPaletteOpen(false); }}
                className="flex items-center justify-between px-3 py-2 rounded hover:bg-[#22262E] cursor-pointer text-xs text-gray-300 hover:text-white"
              >
                <span>Criar novo documento Markdown</span>
                <span className="text-[10px] font-mono bg-[#121417] px-2 py-0.5 rounded text-gray-500">:new</span>
              </div>
              <div 
                onClick={() => { setActiveTab('graph'); setIsCommandPaletteOpen(false); }}
                className="flex items-center justify-between px-3 py-2 rounded hover:bg-[#22262E] cursor-pointer text-xs text-gray-300 hover:text-white"
              >
                <span>Abrir mapa de relações</span>
                <span className="text-[10px] font-mono bg-[#121417] px-2 py-0.5 rounded text-gray-500">:graph</span>
              </div>
              <div 
                onClick={() => { setActiveTab('tech'); setIsCommandPaletteOpen(false); }}
                className="flex items-center justify-between px-3 py-2 rounded hover:bg-[#22262E] cursor-pointer text-xs text-gray-300 hover:text-white"
              >
                <span>Ver stack tecnológica</span>
                <span className="text-[10px] font-mono bg-[#121417] px-2 py-0.5 rounded text-gray-500">:tech</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}