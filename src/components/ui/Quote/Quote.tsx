'use client';
import React from 'react';
import { customClassSwitcher } from '~/core';
import { clsx } from 'clsx';
const COMPONENT_NAME = 'Quote';

export type QuoteProps = {
    children: React.ReactNode;
    customRootClass?: string;
    className?: string;
    props?: Record<string, any>[]
}

const Quote = ({ children, customRootClass, className, ...props }: QuoteProps) => {
    const rootClass = customClassSwitcher(customRootClass, COMPONENT_NAME);
    return <q className={clsx(rootClass, className)} {...props}>{children}</q>;
};

Quote.displayName = COMPONENT_NAME;

export default Quote;
