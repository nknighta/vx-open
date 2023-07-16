import React , {createContext,FC,useContext,useMemo,useState} from "react";
import { useMedia } from "use-media";

type Props = {
    children: React.ReactNode;
}

type Context = {
    isMobile: boolean;
    isDesktop: boolean;
}

const MediaContext = createContext<Context>({
    isMobile: false,
    isDesktop: false,
});

const mediaQuery = {
    isMobile: "(max-width: 768px)",
    isDesktop: "(min-width: 769px)",
};

export const MediaProvider: FC<Props> = ({ children }) => {
    const isMobile = useMedia(mediaQuery.isMobile);
    const isDesktop = useMedia(mediaQuery.isDesktop);
    const value = useMemo(() => ({ isMobile, isDesktop }), [isMobile, isDesktop]);

    return (
        <>
            <MediaContext.Provider value={value}>
                {children}
            </MediaContext.Provider>
        </>
    );
};

export const useMediaContext = () => useContext(MediaContext);