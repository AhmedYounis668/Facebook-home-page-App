import AppBarr from "./component/AppBarr";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react";
import Mainpage from "./component/Mainpage";

function App() {

  const[opendrawer,setopendrawer]=useState("none")

  const[mode,setmode]=useState("light")
  const darkTheme = createTheme({
    palette: {
      mode:mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

    <div className="App">

<AppBarr opendrawer={opendrawer} setopendrawer={setopendrawer} setmode={setmode} mode={mode}/>
<Mainpage opendrawer={opendrawer} setopendrawer={setopendrawer} setmode={setmode} mode={mode}/>
    </div>
    </ThemeProvider>

  );
}

export default App;
