import { format } from "date-fns";
import { Card, CardContent } from "./ui/card";
import { Barbershop, Booking, Service } from "@prisma/client";
import { ptBR } from "date-fns/locale";

interface BookingInfoProps {
  booking: Partial<Pick<Booking, "date">> & {
    service: Pick<Service, "name" | "price">;
    barbershop: Pick<Barbershop, "name">;
  };
}

const BookingInfo = ({ booking }: BookingInfoProps) => {
  return (
      <Card>
        <CardContent className="p-3 flex flex-col gap-3">
          <div className="flex justify-between">
            <h2 className="flex justify-between">{booking.service.name}</h2>
            <h3 className="font-bold text-sm">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(booking.service.price))}
            </h3>
          </div>

          {booking?.date && (
            <>
              <div className="flex justify-between">
                <h3 className="text-gray-400 text-sm">Data</h3>
                <h4 className="text-sm">
                  {format(booking.date, "dd 'de' MMMM", { locale: ptBR })}
                </h4>
              </div>

              <div className="flex justify-between">
                <h3 className="text-gray-400 text-sm">Horário</h3>
                {/* <h4 className="text-sm">{hour}</h4> */}
                <h4 className="text-sm">{format(booking.date, "hh:mm",  { locale: ptBR })}</h4>
              </div>
            </>
          )}

          <div className="flex justify-between">
            <h3 className="text-gray-400 text-sm">Barbearia</h3>
            <h4 className="text-sm">{booking.barbershop?.name}</h4>
          </div>
        </CardContent>
      </Card>
  );
};

export default BookingInfo;
