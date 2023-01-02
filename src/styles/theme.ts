import { ChakraProps, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
        global: {
            fontWeight: 'normal',
            body: {
                bg: 'primary',
                color: 'primary',
            }
        }
    },
    fonts: {
        heading: `'Poppins', sans-serif`,
        body: `'Poppins', sans-serif`
    },
    colors: {
        primary: '#F3F3F3',
        secondary: '#7000FF',
        secondaryLight: '#8A2EFF',
        secondaryDark: '#5C00D1',
        secondaryUltraLight: '#AD8EE1',
        tertiary: '#00D1FF',
        tertiary025: 'rgba(0, 209, 255, 0.25)',
        gradient1: 'linear-gradient(180deg, #00D1FF 0%, #7000FF 100%);',
        gradient2: 'linear-gradient(180deg, #7000FF 0%, #5E02D3 100%);',
    }
} as ChakraProps)

export default theme