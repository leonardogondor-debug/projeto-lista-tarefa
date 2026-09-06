import { renderHook, act } from "@testing-library/react";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";
import { describe, expect, test } from "@jest/globals";
import "@testing-library/jest-dom";

describe("useContadorDeTarefas", () => {
    test("inicia com valor padrao", () => {
        const { result } = renderHook(() => useContadorDeTarefas(4));
        expect(result.current.count).toBe(4);
    });

    test("incrementa contador", () => {
        const { result } = renderHook(() => useContadorDeTarefas(4));
        act(() => {
            result.current.incrementar();
        });
        expect(result.current.count).toBe(5);
    });
});
