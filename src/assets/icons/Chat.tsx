/* eslint max-len: ["off"] */

import type { IconProps } from "@/lib/types";

import { Icon } from "./Icon";

export const Chat = ({ fill = "none", width="29", height="29", viewBox="0 0 29 29", className }: IconProps): JSX.Element => (
    <Icon {...{ fill, width, height, viewBox, className }}>
        <g clip-path="url(#clip0_663_600)">
            <path d="M20.2985 0H8.70159C3.90578 0 0.00390625 3.90188 0.00390625 8.69768V15.4625C0.00390625 20.0965 3.6463 23.8954 8.21838 24.1472V28.179C8.21838 28.6318 8.58755 29 9.04128 29C9.25824 29 9.4636 28.914 9.61871 28.7589L10.5252 27.8524C12.9055 25.4716 16.0709 24.1602 19.4379 24.1602H20.2985C25.0943 24.1602 28.9962 20.2583 28.9962 15.4625V8.69768C28.9962 3.90188 25.0943 0 20.2985 0ZM8.21838 14.0129C7.15243 14.0129 6.28556 13.1461 6.28556 12.0801C6.28556 11.0142 7.15243 10.1473 8.21838 10.1473C9.28433 10.1473 10.1512 11.0142 10.1512 12.0801C10.1512 13.1461 9.28385 14.0129 8.21838 14.0129ZM14.5 14.0129C13.4341 14.0129 12.5672 13.1461 12.5672 12.0801C12.5672 11.0142 13.4341 10.1473 14.5 10.1473C15.566 10.1473 16.4329 11.0142 16.4329 12.0801C16.4329 13.1461 15.5655 14.0129 14.5 14.0129ZM20.7817 14.0129C19.7157 14.0129 18.8489 13.1461 18.8489 12.0801C18.8489 11.0142 19.7157 10.1473 20.7817 10.1473C21.8476 10.1473 22.7145 11.0142 22.7145 12.0801C22.7145 13.1461 21.8472 14.0129 20.7817 14.0129Z" fill="url(#paint0_linear_663_600)"/>
        </g>
        <defs>
            <linearGradient id="paint0_linear_663_600" x1="14.5" y1="0" x2="14.5" y2="29" gradientUnits="userSpaceOnUse">
                <stop stop-color="#615AF4"/>
                <stop offset="1" stop-color="#34C3FB"/>
            </linearGradient>
            <clipPath id="clip0_663_600">
                <rect width="29" height="29" fill="white"/>
            </clipPath>
        </defs>
    </Icon>
);

