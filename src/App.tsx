import { DefaultLayout } from "./layout/defaultLayout";
import { GlobalCss } from "./styles/Global";

export default function App() {
  return (
    <div>
      <DefaultLayout/>
      {GlobalCss()}
    </div>
  )
}

