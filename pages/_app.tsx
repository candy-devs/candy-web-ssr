import "../styles/globals.scss";
import type { AppContext, AppProps } from "next/app";
import { NextPage, NextPageContext } from "next";
import { ReactElement, ReactNode } from "react";
import { wrapper } from "../store";
import axios from "axios";
import * as userActions from "../store/modules/user";

// https://nextjs.org/docs/basic-features/layouts

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: any) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return getLayout(<Component {...pageProps} />);
}

MyApp.getInitialProps = wrapper.getInitialPageProps(
  (store) => async (ctx: any) => {
    const cookie = ctx?.ctx?.req?.headers?.cookie;
    if (cookie !== undefined) {
      try {
        const uinfo = await axios.get(
          "http://localhost:8080/api/v1/user/info",
          {
            headers: {
              cookie: cookie!,
            },
          }
        );
        if (uinfo.data != "") store.dispatch(userActions.set(uinfo.data));
      } catch (_) {}
    }

    return {};
  }
);

export default wrapper.withRedux(MyApp);
