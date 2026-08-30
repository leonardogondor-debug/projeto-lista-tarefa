import { Tarefa } from "../types/tarefa";

export const tarefasMock: Tarefa[] = [
    { id: 1, titulo: "estudar" },
    { id: 2, titulo: "praticar esportes" },
    { id: 3, titulo: "jogar games" },
    { id: 4, titulo: "cozinhar" },
];

export async function getTarefas(): Promise<Tarefa[]> {
    return Promise.resolve(tarefasMock);
}