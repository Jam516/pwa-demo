'use client'
import React, { useState, useEffect } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function DesktopBlocker() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const updateWindowSize = () => {
            // 640px is the default breakpoint for Tailwind's "sm" size
            setIsDesktop(window.innerWidth >= 640);
        };

        updateWindowSize(); // Update the state at the start
        window.addEventListener('resize', updateWindowSize); // Listen for window resize events

        return () => {
            // Cleanup the event listener
            window.removeEventListener('resize', updateWindowSize);
        };
    }, []);

    return isDesktop ? (
        <div>
            <AlertDialog open={true}>
                <AlertDialogTrigger>Open</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Sorry, this app is mobile only</AlertDialogTitle>
                        <AlertDialogDescription>
                            Visit pwa-demo-mu.vercel.app on mobile to install the app
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    ) : null;
}