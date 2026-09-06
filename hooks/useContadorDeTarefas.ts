import { useState } from "react";

export function useContadorDeTarefas(initialCount: number) {
    const [count, setCount] = useState(initialCount);

    const incrementar = () => setCount((prev) => prev + 1);

    return { count, incrementar };
}