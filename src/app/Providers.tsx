"use client";

import React from "react";
import { ArweaveWalletKit } from "arweave-wallet-kit";

export default function ProvidersComponent({ children }: any) {
  return (
    <div>
      {/* {children} */}
      <ArweaveWalletKit
        config={{
          permissions: ["ACCESS_ADDRESS"],
          ensurePermissions: true,
        }}
        theme={{
          accent: { r: 0, g: 0, b: 0 },
        }}
      >
        {children}
      </ArweaveWalletKit>
    </div>
  );
}
