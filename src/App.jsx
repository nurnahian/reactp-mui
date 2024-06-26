import React from "react";
// import Matarialbutton from "./components/Matarialbutton";
// import Selector from "./components/Selector";
// import MuiRadioButton from "./components/MuiRadioButton";
// import MuiCheckBox from "./components/MuiCheckBox";
// import MuiSwitch from "./components/MuiSwitch";
// import MuiRating from "./components/MuiRating";
// import MuiAutocomplete from "./components/MuiAutocomplete";
// import MuiLayout from "./components/MuiLayout";
// import MuiCard from "./components/MuiCard";
import "./App.css";
// import MuiAccordion from "./components/MuiAccordion";
// import MuiImageList from "./components/MuiImageList";
// import MuiNavbar from "./components/MuiNavbar";
// import MuiLink from "./components/MuiLink";
// import MuiBreadcrumbs from "./components/MuiBreadcrumbs";
// import MuiDrawer from "./components/MuiDrawer";
// import MuiSpeedDial from "./components/MuiSpeedDial";
// import MuiBottomNavigation from "./components/MuiBottomNavigation";
// import MuiAvatar from "./components/MuiAvatar";
// import MuiBadge from "./components/MuiBadge";
// import MuiList from "./components/MuiList";
// import MuiChip from "./components/MuiChip";
// import MuiTable from "./components/MuiTable";
// import MuiAlert from "./components/MuiAlert";
// import MuiSnackbar from "./components/MuiSnackbar";
// import MuiDialog from "./components/MuiDialog";
// import MuiProgress from "./components/MuiProgress";
// import MuiSkeleton from "./components/MuiSkeleton";
// import MuiSkeletonAPI from "./components/MuiSkeletonAPI";
// import MuiLodingButton from "./components/MuiLodingButton";
// import MuiPicker from "./components/MuiPicker";
import MuiDateRangePicker from "./components/MuiDateRangePicker";
import MuiTab from "./components/MuiTab";
import MuiTimeline from "./components/MuiTimeline";
import MuiMasonry from "./components/MuiMasonry";
import MuiResponsiveness from "./components/MuiResponsiveness";
import { createTheme, colors, ThemeProvider } from "@mui/material";

// const theme = createTheme({
//   palette: {
//     secondary: {
//       main: colors.orange[500],
//     },
//   },
// });
const theme = createTheme({
  
  palette: {
    secondary: {
      main:colors.orange[500],
    }
  }
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Matarialbutton/> */}
        {/* <Selector/> */}
        {/* <MuiRadioButton/> */}
        {/* <MuiCheckBox/> */}
        {/* <MuiSwitch/> */}
        {/* <MuiRating/> */}
        {/* <MuiAutocomplete/> */}
        {/* <MuiLayout/> */}
        {/* <MuiCard/> */}
        {/* <MuiAccordion/> */}
        {/* <MuiImageList/> */}
        {/* <MuiNavbar />
      <MuiLink />
      <MuiBreadcrumbs />
      <MuiDrawer />
      <MuiBadge/>
      <MuiBottomNavigation />
      <MuiSpeedDial />
      <MuiAvatar /> */}
        {/* <MuiBadge/> */}
        {/* <MuiList/> */}
        {/* <MuiChip/> */}
        {/* <MuiTable/> */}
        {/* <MuiAlert/> */}
        {/* <MuiSnackbar/> */}
        {/* <MuiDialog/> */}
        {/* <MuiProgress/> */}
        {/* <MuiSkeleton/> */}
        {/* <MuiSkeletonAPI/> */}
        {/* <MuiLodingButton/> */}
        {/* <MuiPicker/> */}
        {/* <MuiDateRangePicker/> */}
        {/* <MuiTab/> */}
        {/* <MuiTimeline/> */}
        {/* <MuiMasonry /> */}

        <MuiResponsiveness />
      </ThemeProvider>
    </>
  );
}
export default App;
