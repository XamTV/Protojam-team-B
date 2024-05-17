/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo, useState } from "react";

const UserContext = createContext();

export function Authcontext({ children }) {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useData = () => useContext(UserContext);
