import  { createContext, useContext, useState, useEffect } from 'react';

type Concurso = { concurso: number; data_do_sorteio: string; bola1: number; bola2: number; bola3: number; bola4: number; bola5: number; bola6: number; };

type ContextType = {
  concursoAtual?: Concurso | null;
  buscarUltimo: () => Promise<void>;
  buscarPorNumero: (n: number) => Promise<void>;
  mensagem?: string | null;
};

const ConcursoContext = createContext<ContextType | undefined>(undefined);

export const ConcursoProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [concursoAtual, setConcursoAtual] = useState<Concurso | null | undefined>(undefined);
  const [mensagem, setMensagem] = useState<string | null>(null);
  const api = 'http://localhost:4000';

  const buscarUltimo = async () => {
    try {
      const res = await fetch(`${api}/`);
      if (!res.ok) throw new Error('Nenhum concurso encontrado');
      const data = await res.json();
      setConcursoAtual(data);
      setMensagem(null);
    } catch (err: any) {
      setConcursoAtual(null);
      setMensagem(err.message || 'Erro ao buscar');
    }
  };

  const buscarPorNumero = async (n: number) => {
    try {
      const res = await fetch(`${api}/${n}`);
      if (res.status === 404) {
        setConcursoAtual(null);
        setMensagem('Concurso não existe');
        return;
      }
      if (!res.ok) throw new Error('Erro na requisição');
      const data = await res.json();
      setConcursoAtual(data);
      setMensagem(null);
    } catch (err: any) {
      setConcursoAtual(null);
      setMensagem(err.message || 'Erro ao buscar');
    }
  };

  useEffect(() => {
    buscarUltimo();
  }, []);

  return (
    <ConcursoContext.Provider value={{ concursoAtual, buscarUltimo, buscarPorNumero, mensagem }}>
      {children}
    </ConcursoContext.Provider>
  );
};

export const useConcurso = () => {
  const ctx = useContext(ConcursoContext);
  if (!ctx) throw new Error('useConcurso must be used within ConcursoProvider');
  return ctx;
};
