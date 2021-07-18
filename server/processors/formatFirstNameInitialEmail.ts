export const formatFirstNameInitialEmail: (
  fullName: string,
  company: string
) => string = (fullName: string, company: string) => {
  const splitName = fullName.split(" ");
  const firstNameInitial = splitName[0][0];
  return firstNameInitial + splitName[1] + "@" + company;
};
