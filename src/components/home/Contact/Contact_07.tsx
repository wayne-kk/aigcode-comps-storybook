import { Mail, MapPin, Phone } from "lucide-react";

interface Contact7Props {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
}

 const Contact_07 = ({
  title = "Contact Us",
  description = "Contact the support team at Shadcnblocks.",
  emailLabel = "Email",
  emailDescription = "We respond to all emails within 24 hours.",
  email = "example@shadcnblocks.com",
  officeLabel = "Office",
  officeDescription = "Drop by our office for a chat.",
  officeAddress = "1 Eagle St, Brisbane, QLD, 4000",
  phoneLabel = "Phone",
  phoneDescription = "We're available Mon-Fri, 9am-5pm.",
  phone = "+123 456 7890",
}: Contact7Props) => {
  return (
    <section className="bg-background py-32 px-20">
      <div className="container_contact_07">
        <div className="mb-14 text-left">
          <h1 className="mt-2 mb-3 text-3xl font-semibold text-balance md:text-4xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground text-gray-500">
            {description}
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 text-left">
          <div className="bg-gray-100 p-4 rounded-lg">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
            <p className="mb-3 text-muted-foreground text-gray-500">{emailDescription}</p>
            <div
              className="font-semibold hover:underline"
            >
              {email}
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <MapPin className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{officeLabel}</p>
            <p className="mb-3 text-muted-foreground text-gray-500">{officeDescription}</p>
            <div className="font-semibold hover:underline">
              {officeAddress}
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Phone className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{phoneLabel}</p>
            <p className="mb-3 text-muted-foreground text-gray-700">{phoneDescription}</p>
            <div className="font-semibold hover:underline">
              {phone}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact_07;