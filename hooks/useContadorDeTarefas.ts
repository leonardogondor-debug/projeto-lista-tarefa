import { useState } from "react";

export function useContadorDeTarefas(initialCount: number = 4) {
    const [count, setCount] = useState(initialCount);

    const incrementar = () => setCount(count + 1);

    return { count, incrementar };
}