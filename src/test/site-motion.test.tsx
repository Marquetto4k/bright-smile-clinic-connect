import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { SiteMotion } from "../components/SiteMotion";

vi.mock("@tanstack/react-router", () => ({
  useRouterState: ({ select }: { select: (state: { location: { pathname: string } }) => string }) =>
    select({ location: { pathname: "/" } }),
}));

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  delete document.documentElement.dataset["motion"];
});

function setup(reduce: boolean) {
  vi.stubGlobal(
    "matchMedia",
    vi.fn(() => ({
      matches: reduce,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  );
  const disconnect = vi.fn();
  const observe = vi.fn();
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      observe = observe;
      unobserve = vi.fn();
      disconnect = disconnect;
    },
  );
  return { observe, disconnect };
}

describe("Motion accessibility", () => {
  it("leaves animation disabled when the visitor prefers reduced motion", () => {
    const { observe } = setup(true);
    render(<SiteMotion />);
    expect(document.documentElement.dataset["motion"]).toBe("off");
    expect(screen.getByRole("button")).toBeDisabled();
    expect(observe).not.toHaveBeenCalled();
  });

  it("lets the visitor stop motion and disconnects observers", () => {
    const { disconnect } = setup(false);
    render(<SiteMotion />);
    expect(document.documentElement.dataset["motion"]).toBe("on");
    fireEvent.click(screen.getByRole("button", { name: "Pausar animações" }));
    expect(document.documentElement.dataset["motion"]).toBe("off");
    expect(disconnect).toHaveBeenCalled();
    expect(screen.getByRole("button", { name: "Ativar animações" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    fireEvent.click(screen.getByRole("button", { name: "Ativar animações" }));
    expect(document.documentElement.dataset["motion"]).toBe("on");
  });
});
