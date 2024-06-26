"use client";

import { useOrganizationList } from "@clerk/nextjs";

export const List = () => {
    const { userMemberships } = useOrganizationList({
        userMemberships: {
            infinite: true
        }
    });

    if (!userMemberships.data?.length) return null;

    return (
        <ul className="space-y-4">
            {userMemberships.data?.map((userMembership) => (
                <p key={userMembership.organization.id}>
                    {userMembership.organization.name}
                </p>
            ))}
        </ul>
    );
}