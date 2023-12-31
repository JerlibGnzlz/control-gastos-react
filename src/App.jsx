import { useState } from "react";
import Header from "./components/Header";

const App = () => {


  const [presupuesto, setPresupuesto] = useState(0);
  const [insValidPresupuesto, setIsvalidPresupuesto] = useState(false)


  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        insValidPresupuesto={insValidPresupuesto}
        setIsvalidPresupuesto={setIsvalidPresupuesto}
      />

    </div>
  );
};

export default App;
