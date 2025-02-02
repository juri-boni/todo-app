export const getThemeProp =
  (path: string) =>
  ({ theme }: { theme: any }) =>
    path.split(".").reduce((acc, key) => acc[key], theme);

export const getColor =
  (path: string) =>
  ({ theme }: { theme: any }) =>
    path.split(".").reduce((acc, key) => acc[key], theme.colors);

export const getFont =
  (path: string) =>
  ({ theme }: { theme: any }) =>
    path.split(".").reduce((acc, key) => acc[key], theme.fonts);

export const getSize =
  (path: string) =>
  ({ theme }: { theme: any }) =>
    path.split(".").reduce((acc, key) => acc[key], theme.sizes);

export const getFonts =
  (path: string) =>
  ({ theme }: { theme: any }) =>
    path.split(".").reduce((acc, key) => acc[key], theme.fonts);

// export const getSpacing =
//   (path: string) =>
//   ({ theme }: { theme: any }) =>
//     path.split(".").reduce((acc, key) => acc[key], theme.spacing);

export const getSpacing =
  (path: string | string[]) =>
  ({ theme }: { theme: any }) => {
    if (typeof path === "string") {
      return path.split(".").reduce((acc, key) => acc[key], theme.spacing);
    }
    if (Array.isArray(path)) {
      return path
        .map((p) => p.split(".").reduce((acc, key) => acc[key], theme.spacing))
        .join(" ");
    }
  };
