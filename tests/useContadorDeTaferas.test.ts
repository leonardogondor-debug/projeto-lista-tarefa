import { renderHook, act } from "@testing-library/react";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";
import { describe, expect, test } from "@jest/globals";
import "@testing-library/jest-dom";

describe("useContadorDeTarefas", () => {
    test("inicia com valor padrao", () => {
        const { result } = renderHook(() => useContadorDeTarefas());
        expect(result.current.count).toBe(4);
    });

    test("incrementa contador", () => {
        const { result } = renderHook(() => useContadorDeTarefas());
        act(() => result.current.incrementar());
        expect(result.current.count).toBe(5);
    });
});
