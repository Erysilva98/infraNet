"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RouteGuard(WrappedComponent) {
    return function GuardedComponent(props) {
        const router = useRouter();

        useEffect(() => {
            const token = localStorage.getItem("token");

            if (!token) {
                // Redireciona para a página de login se não houver token
                router.push("../login");
            }
        }, [router]);

        // Renderiza o componente protegido se houver token
        return <WrappedComponent {...props} />;
    };
}
