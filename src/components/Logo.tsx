import { ChakraProps, Text } from "@chakra-ui/react";

interface LogoProps extends ChakraProps {

}

export function Logo({ ...rest }: LogoProps) {

    return (
        <Text
            fontWeight="800"
            color="tertiary"
            fontSize="2xl"
            {...rest}
        >
            LetsGift
        </Text>
    )
}