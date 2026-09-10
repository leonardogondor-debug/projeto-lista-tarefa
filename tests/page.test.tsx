import { render, screen } from "@testing-library/react";
import Page from "../app/page";
import { describe, expect, test } from "@jest/globals";
import "@testing-library/jest-dom";


describe("Pagina Principal", () => {
    test("Renderiza lista de tarefas", async () => {
        const ui = await Page();
        render(ui);
        
        expect(screen.getByText("estudar")).toBeTruthy();
        expect(screen.getByText("praticar esportes")).toBeTruthy();
        expect(screen.getByText("jogar games")).toBeTruthy();
        expect(screen.getByText("cozinhar")).toBeTruthy();
    });
});

