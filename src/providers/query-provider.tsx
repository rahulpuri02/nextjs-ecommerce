'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import React from 'react';

let browserQueryClient: QueryClient | undefined = undefined;

function makeQueryClient() {
    return new QueryClient();
}

const getQueryClient = () => {
    if(typeof window === undefined){
        //on server
       return makeQueryClient();
    } else {
        if(!browserQueryClient){
            browserQueryClient = makeQueryClient();
        }
        return browserQueryClient
    }
}

const queryClient = getQueryClient();

export default function QueryProvider({children}: {children: React.ReactNode}){
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}


