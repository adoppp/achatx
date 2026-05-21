export const IconArrowLeft = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" fill="none">
            <path
                d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export const IconArrowRight = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" fill="none">
            <path
                d="M9 4.08008L15.52 10.6001C16.29 11.3701 16.29 12.6301 15.52 13.4001L9 19.9201"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export const IconEye = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M12.0001 20.27C15.5301 20.27 18.8201 18.19 21.1101 14.59C22.0101 13.18 22.0101 10.81 21.1101 9.39997C18.8201 5.79997 15.5301 3.71997 12.0001 3.71997C8.47009 3.71997 5.18009 5.79997 2.89009 9.39997C1.99009 10.81 1.99009 13.18 2.89009 14.59C5.18009 18.19 8.47009 20.27 12.0001 20.27Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export const IconClosedEye = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M14.53 9.47004L9.47004 14.53C8.82004 13.88 8.42004 12.99 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C12.99 8.42004 13.88 8.82004 14.53 9.47004Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M17.82 5.76998C16.07 4.44998 14.07 3.72998 12 3.72998C8.46997 3.72998 5.17997 5.80998 2.88997 9.40998C1.98997 10.82 1.98997 13.19 2.88997 14.6C3.67997 15.84 4.59997 16.91 5.59997 17.77"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M8.42004 19.5301C9.56004 20.0101 10.77 20.2701 12 20.2701C15.53 20.2701 18.82 18.1901 21.11 14.5901C22.01 13.1801 22.01 10.8101 21.11 9.40005C20.78 8.88005 20.42 8.39005 20.05 7.93005"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M9.47 14.53L2 22"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M22 2L14.53 9.47"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export const IconUser = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export const IconLockAnimated = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 -1 25 24"
            fill="none"
        >
            <style>
                {`
                    @keyframes hook-bounce {
                        0% {
                            transform:
                                rotate(28deg)
                                translateX(2px)
                                translateY(-1px);
                        }

                        /* FIRST DROP */

                        8% {
                            transform:
                                rotate(6deg)
                                translateX(0px)
                                translateY(0px);
                        }

                        16% {
                            transform:
                                rotate(34deg)
                                translateX(3px)
                                translateY(-1px);
                        }

                        /* SECOND SLOWER DROP */

                        28% {
                            transform:
                                rotate(12deg)
                                translateX(1px)
                                translateY(0px);
                        }

                        40% {
                            transform:
                                rotate(28deg)
                                translateX(2px)
                                translateY(-1px);
                        }

                        /* PAUSE */

                        100% {
                            transform:
                                rotate(28deg)
                                translateX(2px)
                                translateY(-1px);
                        }
                    }
                `}
            </style>

            <g
                style={{
                    transformOrigin: '18px 10px',

                    transform: isOpen
                        ? 'rotate(28deg) translateX(2px) translateY(-1px)'
                        : 'rotate(0deg)',

                    transition: !isOpen
                        ? 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        : 'none',

                    animation: isOpen
                        ? 'hook-bounce 2.4s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'
                        : 'none',
                }}
            >
                <path
                    d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>

            <path
                d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <circle
                cx="12"
                cy="16"
                r="1"
                style={{
                    opacity: isOpen ? 0.45 : 1,
                    transition: 'opacity 0.25s ease',
                }}
            />

            <rect
                x="3"
                y="11"
                width="18"
                height="10"
                rx="4"
                opacity={isOpen ? 0.06 : 0}
                style={{
                    transition: 'opacity 0.3s ease',
                }}
            />
        </svg>
    );
};

export const IconEmail = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export const IconAnimatedEmail = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <style>
                {`
                    @keyframes envelope-float {
                        0% {
                            transform:
                                translateY(0px)
                                rotate(0deg);
                        }

                        /* subtle lift */

                        18% {
                            transform:
                                translateY(-1.5px)
                                rotate(-0.6deg);
                        }

                        /* tiny drift */

                        32% {
                            transform:
                                translateY(-2px)
                                rotate(0.4deg);
                        }

                        /* settle */

                        48% {
                            transform:
                                translateY(0px)
                                rotate(0deg);
                        }

                        /* idle */

                        100% {
                            transform:
                                translateY(0px)
                                rotate(0deg);
                        }
                    }

                    @keyframes flap-soft-open {
                        0% {
                            transform: translateY(0px);
                        }

                        /* flap opens */

                        10% {
                            transform: translateY(-1.2px);
                        }

                        /* closes */

                        20% {
                            transform: translateY(0px);
                        }

                        100% {
                            transform: translateY(0px);
                        }
                    }
                `}
            </style>

            <g
                style={{
                    animation: 'envelope-float 3.2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite',
                    transformOrigin: 'center center',
                }}
            >
                <path
                    d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                <g
                    style={{
                        animation: 'flap-soft-open 3.2s ease-in-out infinite',
                        transformOrigin: '12px 10px',
                    }}
                >
                    <path
                        d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
            </g>
        </svg>
    );
};

export const IconClose = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
        >
            <path d="M1 1L15.2418 15.0418" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.2417 1L0.999904 15.0418" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};

export const IconCheckMark = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
        >
            <path
                d="M0.75 4.00004L3.58 6.83004L9.25 1.17004"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export const IconReload = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="50px"
            height="50px"
            fill="currentColor"
        >
            <path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z" />
        </svg>
    );
};
