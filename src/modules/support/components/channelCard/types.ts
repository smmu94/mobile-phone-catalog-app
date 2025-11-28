import { ReactNode } from "react";

export type ChannelCardProps = {
    id: string;
    icon: ReactNode;
    title: string;
    description: string;
    action: string;
    onClick: () => void;
}