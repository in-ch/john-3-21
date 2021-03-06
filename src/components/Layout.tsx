import { HelmetProvider } from "react-helmet-async";
import {GlobalStyles} from "../styled";

type Props = {
    children: JSX.Element,
}

const Layout = ({children}:Props) => {
    return (
        <>
            <HelmetProvider>
                <GlobalStyles />
                {children}
            </HelmetProvider>
        </>
    )
}

export default Layout;