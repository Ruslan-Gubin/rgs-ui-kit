const topIconContainer = (
  label: string | undefined,
  sizeInput: "md" | "lg" | "sm"
) => {
  let top = 0;

  switch (sizeInput) {
    case "md":
      if (!label) {
        top = 5;
      } else {
        top = 30;
      }
      break;
    case "lg":
      if (!label) {
        top = 15;
      } else {
        top = 40;
      }
      break;
  }

  return top;
};

export { topIconContainer };
