import { presistSessionData } from "@/redux/session/sessionSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const withAuth = (WrappedComponent: any, options = { redirectAuthenticated: true }) => {
    const AuthWrapper = (props: any) => {
        const router = useRouter();

        useEffect(() => {
            if (typeof window !== 'undefined' || typeof window !== undefined) {
                const token = localStorage.getItem("fakeStoreToken")
                if (token === null) {
                    router.replace("/auth/login")
                } else {
                    router.push(router.asPath === "/auth/login" ? "/home" : router.asPath)
                }
            }
        }, []);
        return <WrappedComponent {...props} />;
    };

    return AuthWrapper;
};

export default withAuth;