"use client";

import { useState } from "react";

export default function NovaTarefa() {
    const [titulo, setTitulo] = useState("");
    const [tarefas, setTarefas] = useState<string[]>([]);

    const adicionarTarefa = () => {
        if (!titulo.trim()) return;
        setTarefas([...tarefas, titulo]);
        setTitulo("");
    };

    return (
        <div>
            <input
              type="text"
              placeholder="Nova tarefa"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
            <button onClick={adicionarTarefa}>Adicionar</button>

            <ul>
                {tarefas.map((t, id) => (
                    <li key={id}>{t}</li>
                ))}
            </ul>
        </div>
    );
};