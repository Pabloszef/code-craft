"use client"
import {SignedOut, UserButton} from "@clerk/nextjs";
import {User} from "lucide-react";
import LoginButton from "@/components/LoginButton";

function HeaderProfileBtn() {
    return (
        <>
            <UserButton>
                <UserButton.MenuItems>
                    <UserButton.Link
                        href="/profile"
                        label="Profile"
                        labelIcon={<User className="size-4"/>}

                    />
                </UserButton.MenuItems>
            </UserButton>
            <SignedOut>
                <LoginButton />
            </SignedOut>
        </>
    )
}

export default HeaderProfileBtn
