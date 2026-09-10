import NovaTarefa from "../components/NovaTarefa";
import { getTarefas } from "../lib/tarefas";

export default async function Home() {
  const tarefas = await getTarefas();

  return (
    <main>
      <NovaTarefa tarefasIniciais={tarefas} />
    </main>
  );
}
