import ServicesClient from "./ServicesClient";
import { getAdminServices } from "./actions";

export default async function AdminServicesPage() {
  const services = await getAdminServices();
  
  return <ServicesClient initialServices={services} />;
}
