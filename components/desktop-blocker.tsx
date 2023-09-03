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
    const [showDialog, setShowDialog] = useState(false);
    const [message, setMessage] = useState('');
    const [headerMessage, setHeaderMessage] = useState('');

    useEffect(() => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        // Check if the app is running in standalone mode
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
        if (!isStandalone) {
            if (isMobile) {
                // Detect mobile browser
                const userAgent = window.navigator.userAgent.toLowerCase();

                if (userAgent.indexOf('chrome') > -1) {
                    setMessage('To install the app you need to add this website to your homescreen. In your Chrome browser menu, tap the More button and choose Install App.');
                    setHeaderMessage('Add to homescreen');
                } else if (userAgent.indexOf('safari') > -1) {
                    setMessage('To install the app you need to add this website to your homescreen. In your Safari browser menu, tap the Share icon and choose Add to Home Screen.');
                    setHeaderMessage('Add to homescreen');
                }
            } else {
                setMessage('Sorry, this app is mobile only. Visit pwa-demo-mu.vercel.app on mobile to install the app.');
                setHeaderMessage('Visit on Mobile');
            }

            // Show dialog
            setShowDialog(true);
        }
    }, []);

    return showDialog ? (
        <div>
            <AlertDialog open={true}>
                <AlertDialogTrigger>Open</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{headerMessage}</AlertDialogTitle>
                        <AlertDialogDescription>
                            {message}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    ) : null;
}