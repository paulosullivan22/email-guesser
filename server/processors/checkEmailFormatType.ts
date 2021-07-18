import { EmailFormat } from "../constants";

export const checkEmailFormatType: (name: string, email: string) => string = (
  name: string,
  email: string
) => {
  const firstName: string = name.split(" ")[0];

  if (email.includes(firstName.toLowerCase())) {
    return EmailFormat.FullName;
  }

  return EmailFormat.FirstNameInitial;
};
