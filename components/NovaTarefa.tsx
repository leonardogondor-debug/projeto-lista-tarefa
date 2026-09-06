"use client";

import { useState } from "react";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";
import { tarefasMock } from "../lib/tarefas";

export default function NovaTarefa() {
    const [titulo, setTitulo] = useState("");
    const [tarefas, setTarefas] = useState<string[]>(tarefasMock.map(t => t.titulo));
    const { count, incrementar } = useContadorDeTarefas(tarefasMock.length);

    const adicionarTarefa = (e: React.FormEvent) => {
        e.preventDefault();
        if (!titulo.trim()) return;
        setTarefas([titulo, ...tarefas]);
        setTitulo("");
        incrementar();
    };

    return (
        <div className="pt-2 bg-black text-white">
            <h1 className="m-2 text-2xl">Lista de Tarefas</h1>
            <form onSubmit={adicionarTarefa}>
                <input
                    className="bg-white text-black m-2 p-2 rounded-xl"
                    type="text"
                    placeholder="Nova tarefa"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <button className="bg-green-500 hover:bg-green-700 m-2 p-2 rounded-xl" type="submit">Adicionar</button>
            </form>
            <p className="m-2 text-xl p-2">Tarefas: {count}</p>
            <ul className="pt-2 text-lg bg-white text-black">
                {tarefas.map((t, id) => (
                    <li className="m-2 p-2 text-lg border-black border rounded-xl" key={id}>{t}</li>
                ))}
            </ul>
        </div>
    );
};