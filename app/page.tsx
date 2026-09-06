import { getTarefas } from "../lib/tarefas";
import NovaTarefa from "../components/NovaTarefa";

export default async function Home() {
  const tarefas = await getTarefas();

  return (
    <main>
      <NovaTarefa />
    </main>
  );
}
