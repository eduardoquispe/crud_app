import React from "react";
import { PaperProvider } from "react-native-paper";
import { ProvidersProps as Props } from "./providers.types";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../../config/client-query";

const Providers: React.FC<Props> = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        {props.children}
      </PaperProvider>
    </QueryClientProvider>
  );
}

export default Providers;