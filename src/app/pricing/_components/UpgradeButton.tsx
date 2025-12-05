import React from 'react'
import Link from "next/link";
import {Zap} from "lucide-react";

function UpgradeButton() {
    const CHECKOUT_URL = "https://pabloszef.lemonsqueezy.com/buy/25990f4c-6b4f-44fb-8606-4dbe244f3d77"
    return (
        <Link
            href={CHECKOUT_URL}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white bg-gradient-to-r from-blue-500
            to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all"
        >
            <Zap className="size-5"/>
            Upgrade to Pro
        </Link>
    )
}

export default UpgradeButton
