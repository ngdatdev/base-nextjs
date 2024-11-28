'use client'

import React from "react";

export default function LandingRootLayout({ children }: { children: React.ReactNode }) {
    // const _accessToken_Cookie = getCookie(constants.ACCESS_TOKEN, { cookies })
    // if (_accessToken_Cookie) {
    //     redirect("/vi/home");
    // }

    return (
        <>
            <h4 className="text-center text-blue-800">Landing</h4>
            {children}
        </>
    )
}