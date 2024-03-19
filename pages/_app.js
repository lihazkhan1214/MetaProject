import "../styles/globals.css";
import Navigation from "../components/navigation";
import SimpleBottomNavigation from "../components/layouts/bottom-nav-mobile";
import Footer from "../components/footer";
import { Provider } from "react-redux";
import { store } from "../store";
import { useRouter } from "next/router";
import { Box } from "@mui/material";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  // if (router.pathname.startsWith('/auth')) {
  //   return (
  //     <Provider store={store}>
  //       <Component {...pageProps} />
  //     </Provider>
  //    );
  // }
  return (
    <Provider store={store}>
      <Navigation />
      <Box
        style={{
          // paddingLeft: "1.3px",
          paddingTop:
            router.pathname === "/profile"
              ? "2px"
              : router.pathname !== "/"
              ? "12px"
              : "0px",
          // paddingRight: "1.3px",
        }}
        sx={{
          paddingLeft: { sx: 0, sm: "1.3px" },
          paddingRight: { sx: 0, sm: "1.3px" },
        }}
      >
        <Component {...pageProps} />
      </Box>
      <Footer />
      <SimpleBottomNavigation />
    </Provider>
  );
}
