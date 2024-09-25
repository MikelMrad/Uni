'use client';
import "./globals.css"; // Ensure this path is correct
import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store"; // Check the path to your store
import { PersistGate } from 'redux-persist/integration/react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
