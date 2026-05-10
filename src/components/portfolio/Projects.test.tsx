import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Projects from "./Projects";

describe("Projects", () => {
  it("renders HeroVerse as a featured project with demo and source links", () => {
    render(<Projects />);

    const title = screen.getByRole("heading", { name: "HeroVerse" });
    const card = title.closest("article");

    expect(title).toBeInTheDocument();
    expect(card).not.toBeNull();
    expect(within(card as HTMLElement).getByRole("link", { name: /Ver demo/i })).toHaveAttribute(
      "href",
      "https://heroverse2026.vercel.app/"
    );
    expect(within(card as HTMLElement).getByRole("link", { name: /Código/i })).toHaveAttribute(
      "href",
      "https://github.com/LucasTabacchi/BDD_NSQL_2026/tree/main/heroverse-spa"
    );
  });
});
