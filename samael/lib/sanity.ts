import { createClient } from 'next-sanity';

export const client = createClient({
    apiVersion: '2023-10-01',
    dataset: 'production',
    projectId: 'kpyriio6',
    useCdn: false,});