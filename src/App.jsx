import { useState } from "react";
import "./App.css";
import MuiAccordion from "./components/MuiAccordion";
import MuiAutocomplete from "./components/MuiAutocomplete";
import MuiAvatar from "./components/MuiAvatar";
import MuiBadge from "./components/MuiBadge";
import MUIBox from "./components/MUIBox";
import MuiBreadcrumbs from "./components/MuiBreadcrumbs";
import MuiButtomNavigation from "./components/MuiButtomNavigation";
import { Muibutton } from "./components/Muibutton";
import MuiCard from "./components/MuiCard";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiDrawer from "./components/MuiDrawer";
import MuiGrid from "./components/MuiGrid";
import MuiImageList from "./components/MuiImageList";
import MuiLink from "./components/MuiLink";
import MuiList from "./components/MuiList";
import MuiMenu from "./components/MuiMenu";
import MuiNavbar from "./components/MuiNavbar";
import MuiPaper from "./components/MuiPaper";
import MuiRadio from "./components/MuiRadio";
import MuiRating from "./components/MuiRating";
import MuiSelect from "./components/MuiSelect";
import MuiSpeedDial from "./components/MuiSpeedDial";
import MuiStack from "./components/MuiStack";
import MuiSwich from "./components/MuiSwich";
import { MuiTextfield } from "./components/MuiTextfield";
import MuiTypography from "./components/MuiTypography";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <MuiTypography /> */}
      {/* <Muibutton /> */}
      <MuiTextfield />
      {/* <MuiSelect /> */}
      {/* <MuiRadio/> */}
      {/* <MuiCheckbox /> */}
      {/* <MuiSwich /> */}
      {/* <MuiRating /> */}
      {/* <MuiAutocomplete /> */}
      {/* <MUIBox /> */}
      {/* <MuiStack /> */}
      {/* <MuiGrid /> */}
      {/* <MuiPaper /> */}
      {/* <MuiCard /> */}
      {/* <MuiAccordion /> */}
      {/* <MuiImageList /> */}
      {/* <MuiNavbar /> */}
      {/* <MuiMenu /> */}
      {/* <MuiLink /> */}
      {/* <MuiBreadcrumbs /> */}
      {/* <MuiDrawer /> */}
      {/* <MuiSpeedDial /> */}
      {/* <MuiButtomNavigation /> */}
      {/* <MuiAvatar /> */}
      {/* <MuiBadge /> */}
      <MuiList/>
    </div>
  );
}

export default App;
