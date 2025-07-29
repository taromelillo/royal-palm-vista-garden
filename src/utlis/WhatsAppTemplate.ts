export default function WhatsappTemplate(booking: any) {
  const phoneNumber = ;
  const template = `${booking.day} %0A Name: ${booking.name}%0A Lastname: ${booking.lastname}%0A`;
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hello, I've booked the following day:%0A${template} Thanks.`;
  return { url };
}
