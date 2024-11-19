import { createContext, useContext } from "react";
export interface DesignContext {
    variant:|"normal",
    isDummy:boolean
}
export const DesignContext = createContext<DesignContext | undefined>(undefined);

export function useDesignContext() {
  const design = useContext(DesignContext);
    console.log("fooh",design)
  if (design === undefined) {
    throw new Error('useUserContext must be used with a DashboardContext');
  }

  return design;
}