import { Box } from "@chakra-ui/react";

interface BgImageProps {
    url: string;
    children: JSX.Element | JSX.Element[]
}

export function BgImage({ children, url }: BgImageProps) {

    return (
        <Box
            bgImage={url}
            bgPos="top"
            bgSize="cover"
            w="100vw"
            h="100vh">
            {children}
        </Box>
    )
}