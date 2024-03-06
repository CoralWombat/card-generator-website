import loadable from "@loadable/component";
import { ProgressSpinner } from "primereact/progressspinner";

const lazyComponent = (
  load: () => Promise<{
    default: ({ className }: any) => JSX.Element;
  }>
) =>
  loadable(load, {
    fallback: <ProgressSpinner />,
  });
export default lazyComponent;
