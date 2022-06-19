import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import "./App.css";
import MuiAccordion from "./components/MuiAccordion";
import MuiAlert from "./components/MuiAlert";
import MuiAutocomplete from "./components/MuiAutocomplete";
import MuiAvatar from "./components/MuiAvatar";
import MuiBadge from "./components/MuiBadge";
import MUIBox from "./components/MUIBox";
import MuiBreadcrumbs from "./components/MuiBreadcrumbs";
import MuiButtomNavigation from "./components/MuiButtomNavigation";
import { Muibutton } from "./components/Muibutton";
import MuiCard from "./components/MuiCard";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiChip from "./components/MuiChip";
import MuiDateTime from "./components/MuiDateTime";
import MuiDialog from "./components/MuiDialog";
import MuiDrawer from "./components/MuiDrawer";
import MuiGrid from "./components/MuiGrid";
import MuiImageList from "./components/MuiImageList";
import MuiLink from "./components/MuiLink";
import MuiList from "./components/MuiList";
import MuiLoadingButton from "./components/MuiLoadingButton";
import MuiMenu from "./components/MuiMenu";
import MuiNavbar from "./components/MuiNavbar";
import MuiPaper from "./components/MuiPaper";
import MuiProgress from "./components/MuiProgress";
import MuiRadio from "./components/MuiRadio";
import MuiRating from "./components/MuiRating";
import MuiSelect from "./components/MuiSelect";
import MuiSkeleton from "./components/MuiSkeleton";
import MuiSnackbar from "./components/MuiSnackbar";
import MuiSpeedDial from "./components/MuiSpeedDial";
import MuiStack from "./components/MuiStack";
import MuiSwich from "./components/MuiSwich";
import MuiTable from "./components/MuiTable";
import { MuiTextfield } from "./components/MuiTextfield";
import MuiToolTips from "./components/MuiToolTips";
import MuiTypography from "./components/MuiTypography";
import MuiTabs from "./components/MuiTabs";
import MuiTimeline from "./components/MuiTimeline";

function App() {
  const [count, setCount] = useState(0);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        {/* <MuiTypography /> */}
        {/* <Muibutton /> */}
        {/* <MuiTextfield /> */}
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
        {/* <MuiList/> */}
        {/* <MuiChip /> */}
        {/* <MuiToolTips /> */}
        {/* <MuiTable/> */}
        {/* <MuiAlert/> */}
        {/* <MuiSnackbar /> */}
        {/* <MuiDialog /> */}
        {/* <MuiProgress/> */}
        {/* <MuiSkeleton/> */}
        {/* <MuiLoadingButton/> */}
        {/* <MuiDateTime /> */}
        {/* <MuiTabs/> */}
        <MuiTimeline/>
      </div>
    </LocalizationProvider>
  );
}

export default App;
