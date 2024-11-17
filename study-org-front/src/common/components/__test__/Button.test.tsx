
import { render, screen,fireEvent} from "@testing-library/react";
import {vi} from "vitest"
import { TestButton } from "../TestButton";

const buttonLbl="AAA"

describe('Button Component', () => {
    it('デフォルトボタンが描画される', () => {
      render(<TestButton>{buttonLbl}</TestButton>);
      const btn = screen.getByRole('button', { name: buttonLbl});
      expect(btn).toBeInTheDocument();
      expect(btn).toHaveClass("bg-sky-500","text-base");
    });
    it('Primaryボタンが描画される', () => {
      render(<TestButton variant={"primary"}>{buttonLbl}</TestButton>);
      const btn = screen.getByRole('button', { name: buttonLbl});
      expect(btn).toBeInTheDocument();
      expect(btn).toHaveClass("bg-sky-500");
    });
    it('Secondaryボタンが描画される', () => {
      render(<TestButton variant={"secondary"}>{buttonLbl}</TestButton>);
      const btn = screen.getByRole('button', { name: buttonLbl});
      expect(btn).toBeInTheDocument();
      expect(btn).toHaveClass("bg-slate-500");
    });
    it('Dangerボタンが描画される', () => {
      render(<TestButton variant={"danger"}>{buttonLbl}</TestButton>);
      const btn = screen.getByRole('button', { name: buttonLbl});
      expect(btn).toBeInTheDocument();
      expect(btn).toHaveClass("bg-red-500");
    });
    it('小サイズボタンが描画される', () => {
      render(<TestButton variant={"danger"} size={"sm"}>{buttonLbl}</TestButton>);
      const btn = screen.getByRole('button', { name: buttonLbl});
      expect(btn).toBeInTheDocument();
      expect(btn).toHaveClass("bg-red-500","text-sm");
    });
    it('中さいずボタンが描画される', () => {
      render(<TestButton variant={"danger"} size={"md"}>{buttonLbl}</TestButton>);
      const btn = screen.getByRole('button', { name: buttonLbl});
      expect(btn).toBeInTheDocument();
      expect(btn).toHaveClass("bg-red-500","text-base");
    });

    it('大サイズボタンが描画される', () => {
      render(<TestButton variant={"danger"} size={"lg"}>{buttonLbl}</TestButton>);
      const btn = screen.getByRole('button', { name: buttonLbl});
      expect(btn).toBeInTheDocument();
      expect(btn).toHaveClass("bg-red-500","text-xl");
    });
    it('Pendingボタンが描画される', () => {
      render(<TestButton pending>{buttonLbl}</TestButton>);
      const btn = screen.getByRole('button', { name: buttonLbl});
      expect(btn).toBeInTheDocument();
      expect(btn).toHaveClass("bg-orange-500");
      expect(btn).toBeDisabled();
      expect(screen.getByTestId("loading-svg")).toBeInTheDocument()
    });
    it('クリックイベントが発火する', () => {
      const clickEvent = vi.fn()
      render(<TestButton onClick={clickEvent}>{buttonLbl}</TestButton>);
      const btn = screen.getByRole('button', { name: buttonLbl});
      fireEvent.click(btn);
      expect(clickEvent).toHaveBeenCalled()
    });
});
