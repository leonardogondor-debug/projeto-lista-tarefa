import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";
import "@testing-library/jest-dom";
import NovaTarefa from "../components/NovaTarefa";
import { tarefasMock } from "@/lib/tarefas";

describe("NovaTarefa Component", () => {
    test("Arrange: renderiza input e botão", () => {
        render(<NovaTarefa />);
        expect(screen.getByPlaceholderText("Nova tarefa")).toBeTruthy();
        expect(screen.getByText("Adicionar")).toBeTruthy();
    });

    test("Não adiciona tarefa vazia", () => {
        render(<NovaTarefa />);
        const input = screen.getByPlaceholderText("Nova tarefa");
        const button = screen.getByText("Adicionar");

        fireEvent.change(input, { target: { value: "" } });
        fireEvent.click(button);
        expect(screen.getByText(`Tarefas: ${tarefasMock.length}`)).toBeTruthy();

        fireEvent.change(input, { target: { value: "   " } });
        fireEvent.click(button);
        expect(screen.getByText(`Tarefas: ${tarefasMock.length}`)).toBeTruthy();
    });

    test("Adiciona nova tarefa", () => {
        render(<NovaTarefa />);
        const input = screen.getByPlaceholderText("Nova tarefa");
        const button = screen.getByText("Adicionar");

        fireEvent.change(input, { target: { value: "testar componente" } });
        fireEvent.click(button);

        expect(screen.getByText("testar componente")).toBeTruthy();

        expect(screen.getByText(`Tarefas: ${tarefasMock.length + 1}`)).toBeTruthy();

        expect(input).toHaveProperty("value", "");
    });
});