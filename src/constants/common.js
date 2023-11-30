export const API_URL = process.env.NEXT_PUBLIC_ENV === 'production' ? process.env.NEXT_PUBLIC_API_URL : 'http://localhost:8000' ;

export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_ENV === 'production' ? process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID : '';

export const GOOGLE_CLIENT_SECRET = process.env.NEXT_PUBLIC_ENV === 'production' ? process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET : '';

export const NEXTAUTH_URL = process.env.NEXT_PUBLIC_ENV === 'production' ? process.env.NEXT_PUBLIC_NEXTAUTH_URL : '';