import { Metadata } from "next";
import { SERVICES } from "@/constants/site-data";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    service: service.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const serviceData = SERVICES.find((s) => s.id === service);

  if (!serviceData) {
    return {
      title: "Service Not Found",
      description: "The service you're looking for could not be found.",
    };
  }

  return {
    title: `${serviceData.title} | Poleris Digital`,
    description: serviceData.description,
    openGraph: {
      title: `${serviceData.title} | Poleris Digital`,
      description: serviceData.description,
      type: "website",
    },
  };
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
