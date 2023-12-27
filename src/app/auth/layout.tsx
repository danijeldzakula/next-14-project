import { Fragment } from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <Fragment>
            {children}
        </Fragment>
    );
}