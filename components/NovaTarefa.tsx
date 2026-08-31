"use client";

import { useState } from "react";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";

export default function NovaTarefa() {
    const [titulo, setTitulo] = useState("");
    const [tarefas, setTarefas] = useState<string[]>([]);
    const { count, incrementar, decrementar } = useContadorDeTarefas();

    const adicionarTarefa = () => {
        if (!titulo.trim()) return;
        setTarefas([...tarefas, titulo]);
        setTitulo("");
        incrementar(); 
    };

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <input
              type="text"
              placeholder="Nova tarefa"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
            <button onClick={adicionarTarefa}>Adicionar</button>
        <p>Tarefas: {count}</p>
            <ul>
                {tarefas.map((t, id) => (
                    <li key={id}>{t}</li>
                ))}
            </ul>
        </div>
    );
};