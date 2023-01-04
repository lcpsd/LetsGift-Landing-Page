import { useEffect, useState } from "react";

export function useSectionPos() {
    const [position, setPosition] = useState(0)
    const [sections, setSections] = useState<NodeListOf<HTMLElement>>()

    useEffect(() => {
        const windowHeight = window.innerHeight
        const sections = document.querySelectorAll("section")

        setSections(sections)

        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY

            sections.forEach((section, i) => {
                if (section.offsetTop < scrollTop + windowHeight / 2 &&
                    scrollTop < section.offsetTop + windowHeight / 2) {
                    setPosition(i)
                }
            })
        })
    }, [])

    return { position, total: sections?.length }
}