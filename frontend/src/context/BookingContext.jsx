import { createContext, useCallback, useContext, useState } from "react";

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState(null);

  const openBooking = useCallback((serviceName = null) => {
    setService(serviceName);
    setOpen(true);
  }, []);

  return (
    <BookingContext.Provider value={{ open, setOpen, service, openBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => useContext(BookingContext);
