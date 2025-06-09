"use client";

import {ReactNode} from "react";
import {Provider} from "react-redux";
import {SessionProvider} from "next-auth/react";
import {store, persistor} from "../redux/store";
import {PersistGate} from "redux-persist/integration/react";

export default function AppProviders({children}: {children: ReactNode}) {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <SessionProvider>{children}</SessionProvider>
      </PersistGate>
    </Provider>
  );
}
