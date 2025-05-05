'use client'
import NProgress from "nprogress";
import {usePathname, useSearchParams} from "next/navigation";
import {useEffect} from "react";

export const useLoader = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        NProgress.done(); // Завершаем предыдущую загрузку

        const handleStart = () => NProgress.start();
        const handleComplete = () => NProgress.done();

        // Эмуляция событий маршрутизации
        handleStart();

        // Завершаем загрузку после небольшой задержки
        const timer = setTimeout(() => {
            handleComplete();
        }, 300);

        return () => clearTimeout(timer);
    }, [pathname, searchParams]);
};