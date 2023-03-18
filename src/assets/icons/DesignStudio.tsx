/* eslint max-len: ["off"] */

import type { IconProps } from "@/lib/types";

import { Icon } from "./Icon";
import { Gradient } from "./gradient";

export const DesignStudio = ({ fill = "none", width="37", height="37", viewBox="0 0 37 37", className, gradient }: IconProps): JSX.Element => (
    <Icon {...{ fill, width, height, viewBox, className }}>
        <path d="M36.6825 9.51541L27.4845 0.317499C27.0612 -0.105833 26.3748 -0.105833 25.9515 0.317499L21.208 5.06102C20.7846 5.48435 20.7846 6.17066 21.208 6.59399L21.6775 7.06358L9.27085 13.2669C9.03338 13.3856 8.84775 13.5874 8.74916 13.8339L0.0809504 35.504C0.0684448 35.5346 0.057376 35.5659 0.0477802 35.5976C0.0289909 35.6588 0.0141763 35.7299 0.00673287 35.7977C-0.0249296 36.0795 0.0559131 36.3625 0.231698 36.5851C0.238057 36.5932 0.244345 36.6014 0.250993 36.6093C0.374822 36.7584 0.536378 36.8714 0.718801 36.9367C0.901223 37.002 1.09782 37.0171 1.28809 36.9805C1.31584 36.9752 1.34323 36.9681 1.37062 36.9606C1.37632 36.959 1.38218 36.9581 1.38789 36.9564C1.42457 36.9457 1.46065 36.9331 1.496 36.9186L23.1662 28.2506C23.4127 28.152 23.6144 27.9664 23.7332 27.7289L29.9365 15.3223L30.4061 15.7919C30.5066 15.8927 30.6261 15.9727 30.7576 16.0272C30.8892 16.0816 31.0302 16.1096 31.1725 16.1094C31.4499 16.1094 31.7274 16.0036 31.939 15.7919L36.6826 11.0484C37.1058 10.6251 37.1058 9.93881 36.6825 9.51541ZM21.9783 26.3908L5.5844 32.9483L14.8583 23.6744C15.2956 23.8841 15.7745 23.9928 16.2595 23.9923C18.0527 23.9923 19.5115 22.5334 19.5115 20.7403C19.5115 18.9472 18.0527 17.4883 16.2595 17.4883C14.4664 17.4883 13.0075 18.9472 13.0075 20.7403C13.007 21.2253 13.1156 21.7042 13.3254 22.1415L4.05141 31.4153L10.6089 15.0216L23.2934 8.67944L28.3205 13.7065L21.9783 26.3908ZM15.1755 20.7403C15.1755 20.1426 15.6618 19.6563 16.2595 19.6563C16.8572 19.6563 17.3435 20.1426 17.3435 20.7403C17.3435 21.338 16.8572 21.8243 16.2595 21.8243C15.6618 21.8243 15.1755 21.338 15.1755 20.7403ZM31.1725 13.4924L30.3921 12.712L30.3901 12.7101L24.2899 6.60989L24.2875 6.60751L23.5075 5.82754L26.718 2.61707L34.383 10.282L31.1725 13.4924Z"
            fill={gradient ? "url(#gradient)" : "white"}/>
        <defs>
            <Gradient />
        </defs>
    </Icon>
);