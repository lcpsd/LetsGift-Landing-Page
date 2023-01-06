import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

interface sectionContextProps {
    position: number;
    setPosition: Dispatch<SetStateAction<number>>;
    sections: HTMLElement[];
    setSections: Dispatch<SetStateAction<NodeListOf<HTMLElement>>>;
}

export const SectionsContext = createContext({} as sectionContextProps)

export function SectionsContextProvider({ children }: { children: JSX.Element | JSX.Element[] }) {

    const [position, setPosition] = useState(0)
    //@ts-ignore
    const [sections, setSections] = useState<NodeListOf<HTMLElement>>([])

    useEffect(() => {
        const sectionNodes = document.querySelectorAll("section")

        setSections(sectionNodes)

    }, [])

    return (
        <SectionsContext.Provider value={{ position, setPosition, sections: Array.from(sections ?? []), setSections }}>
            {children}
        </SectionsContext.Provider>
    )
}

export function useSections() {
    return useContext(SectionsContext)
}