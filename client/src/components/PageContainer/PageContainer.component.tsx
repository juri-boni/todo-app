import { ReactNode } from "react";
import { Container } from "./PageContainer.styles";
import { Sidebar } from "../Sidebar/Sidebar.component";

interface PageContainerProps {
  children: ReactNode;
  sidebarTitle: string;
  theme: string;
  setTheme: (theme: string) => void;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  sidebarTitle,
  theme,
  setTheme,
}) => {
  return (
    <Container>
      <Sidebar sidebarTitle={sidebarTitle} theme={theme} setTheme={setTheme} />
      {children}
    </Container>
  );
};
