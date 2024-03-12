export const currentDate = () => {
  const actualDate = new Date();

  return new Date(
    new Date(
      actualDate.getFullYear(),
      actualDate.getMonth(),
      actualDate.getDate()
    )
  );
};
