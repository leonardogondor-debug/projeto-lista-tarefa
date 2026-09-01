import { getTarefas } from "../lib/tarefas";
import NovaTarefa from "../components/NovaTarefa";

export default async function Home() {
  const tarefas = await getTarefas();

  return (
    <main>
      <NovaTarefa />
      <ul className="text-lg bg-white text-black">
        {tarefas.map((t) => (
          <li className="m-2 p-2 text-lg border-black border rounded-xl"
            key={t.id}>{t.titulo}</li>
        ))}
      </ul>
    </main>
  );
}
