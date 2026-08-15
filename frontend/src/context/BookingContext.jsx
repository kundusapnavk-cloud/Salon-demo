import { createContext, useCallback, useContext, useState } from "react";
import { whatsappLink } from "../config/salon";

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState(null);

  const openBooking = useCallback((serviceName = null) => {
    setService(serviceName);
    const message = serviceName
      ? `Hi, I would like to book ${serviceName} at It's Canary Beauty Studio`
      : undefined;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }, []);

  return (
    <BookingContext.Provider value={{ open, setOpen, service, openBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => useContext(BookingContext);
