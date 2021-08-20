import { withIronSession } from "next-iron-session";

export default function withSession(handler) {
    return withIronSession(handler, {
        password: 'BGEaE7m7JNeRjP77DxeYhiHAa0a6uzwp',
        cookieName: 'next-js-user-session',
        cookieOptions: {

            secure: process.env.NODE_ENV === 'production' ? true : false,
        }
    })
};