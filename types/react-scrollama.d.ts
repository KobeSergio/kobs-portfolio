declare module "react-scrollama" {
  import type { ReactNode } from "react";

  export type StepDirection = "up" | "down";

  export type StepEnterEvent<T = unknown> = {
    data?: T;
    entry: IntersectionObserverEntry;
    direction: StepDirection;
    index: number;
  };

  export type StepProps<T = unknown> = {
    data?: T;
    className?: string;
    children?: ReactNode;
    onStepEnter?: (event: StepEnterEvent<T>) => void;
    onStepExit?: (event: StepEnterEvent<T>) => void;
  };

  export function Step<T = unknown>(props: StepProps<T>): JSX.Element;

  export type ScrollamaProps<T = unknown> = {
    offset?: number;
    children?: ReactNode;
    onStepEnter?: (event: StepEnterEvent<T>) => void;
    onStepExit?: (event: StepEnterEvent<T>) => void;
    debug?: boolean;
  };

  export function Scrollama<T = unknown>(props: ScrollamaProps<T>): JSX.Element;
}
