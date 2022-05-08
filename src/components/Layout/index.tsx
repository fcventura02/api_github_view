import { ReactNode } from "react";
import * as S from "./styles";

interface ILayout {
    children: ReactNode;
}
function Layout({ children }: ILayout) {
    return (
        <S.Wrapped_Layout>
          {children}
        </S.Wrapped_Layout>
      );
    };
    
    export default Layout;
