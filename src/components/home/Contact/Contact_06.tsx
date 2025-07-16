import React from "react";

import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Label } from "@ui/label";
import { Textarea } from "@ui/textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
  contactDetailsLabel?: string;
  phoneLabel?: string;
  emailLabel?: string;
  webLabel?: string;
  firstNameLabel?: string;
  lastNameLabel?: string;
  emailInputLabel?: string;
  subjectLabel?: string;
  messageLabel?: string;
  sendButtonLabel?: string;
}

 const Contact_06 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "email@example.com",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
  contactDetailsLabel = "Contact Details",
  phoneLabel = "Phone",
  emailLabel = "Email",
  webLabel = "Web",
  firstNameLabel = "First Name",
  lastNameLabel = "Last Name",
  emailInputLabel = "Email",
  subjectLabel = "Subject",
  messageLabel = "Message",
  sendButtonLabel = "Send Message",
}: Contact2Props) => {
  return (
    <section className="py-32">
      <div className="container_contact_06">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground mt-4">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                {contactDetailsLabel}
              </h3>
              <ul className="ml-4 list-disc text-left">
                <li>
                  <span className="font-bold">{phoneLabel}: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-bold">{emailLabel}: </span>
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold">{webLabel}: </span>
                  <a href={web.url} target="_blank" className="underline">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10 bg-white">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">{firstNameLabel}</Label>
                <Input type="text" id="firstname" placeholder={firstNameLabel} />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">{lastNameLabel}</Label>
                <Input type="text" id="lastname" placeholder={lastNameLabel} />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">{emailInputLabel}</Label>
              <Input type="email" id="email" placeholder={emailInputLabel} />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">{subjectLabel}</Label>
              <Input type="text" id="subject" placeholder={subjectLabel} />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">{messageLabel}</Label>
              <Textarea placeholder={`Type your message here.`} id="message" />
            </div>
            <Button className="w-full bg-black rounded-lg text-white hover:bg-gray-800">{sendButtonLabel}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact_06;