import { Box } from "@chakra-ui/react";
import { Link } from "react-scroll"

interface HeaderLinkProps {
    title: string;
    link: string;
    toggle?: () => void;
}

export function HeaderLink({ toggle = () => { }, title, link }: HeaderLinkProps) {

    return (
        <Box
            as={Link}
            position="relative"
            to={link}
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={500}
            isDynamic={true}
            ignoreCancelEvents={false}
            onClick={toggle}
        >
            <Box
                position="relative"
            >
                {title}
                <Box
                    position="absolute"
                    h="100%"
                    w="100%"
                    bg="transparent"
                    left="0"
                    bottom="0"
                    _after={{
                        content: '""',
                        position: "absolute",
                        backgroundColor: "secondary",
                        height: "2px",
                        width: "0%",
                        bottom: "0",
                        left: "-10%",
                        transition: "all 0.2s"
                    }}
                    _hover={{
                        "&::after": {
                            width: "120%"
                        }
                    }}
                />
            </Box>
        </Box>
    )
}