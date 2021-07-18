export const formatFullNameEmail: (
  fullName: string,
  company: string
) => string = (fullName: string, company: string) => {
  return fullName.replace(/\s/g, "").toLowerCase() + "@" + company;
};
