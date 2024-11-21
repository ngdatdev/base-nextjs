import StyledComponentsRegistry from "@/services/base/styledComponentsRegistry";
import { store } from "@/stores/store";
import GlobalStyle from "@/style/global";
import { themes } from "@/style/themes";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { AntdRegistry } from '@ant-design/nextjs-registry'

type Props = {
    children: React.ReactNode;
};
const ProviderComponents = ({ children }: Props) => {
    return (
        <>
            <StyledComponentsRegistry>
                <Provider store={store}>
                    <ThemeProvider theme={themes.default}>
                        <GlobalStyle />
                        <AntdRegistry>
                            {children}
                        </AntdRegistry>
                    </ThemeProvider>
                </Provider>
            </StyledComponentsRegistry>
        </>
    );
};

export default ProviderComponents;