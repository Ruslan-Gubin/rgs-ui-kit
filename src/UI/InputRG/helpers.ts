const topIconContainer = (
  label: string | undefined,
  sizeInput: "md" | "lg" | "sm"
) => {
  let top = 0;

  switch (sizeInput) {
    case "md":
      if (!label) {
        top = 10;
      } else {
        top = 35;
      }
      break;
    case "lg":
      if (!label) {
        top = 20;
      } else {
        top = 45;
      }
      break;
  }

  return top;
};

export { topIconContainer };
