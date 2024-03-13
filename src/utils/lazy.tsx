import loadable from "@loadable/component";
import { ProgressSpinner } from "primereact/progressspinner";

export const lazyComponent = (
  load: () => Promise<{
    default: ({ className }: any) => JSX.Element;
  }>
) =>
  loadable(load, {
    fallback: <ProgressSpinner />,
  });

export const lazySvg = (
  load: () => Promise<{
    default: ({ className }: any) => any;
  }>
) =>
  loadable(load, {
    fallback: <ProgressSpinner />,
  });
