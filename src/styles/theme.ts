import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
        global: {
            fontFamily: "Poppins",
            fontWeight: '400',
            body: {
                bg: 'primary',
                color: 'primary',
            }
        }
    },
    colors: {
        primary: '#F3F3F3',
        secondary: '#7000FF',
        secondaryLight: '#8A2EFF',
        secondaryDark: '#5C00D1',
        secondaryUltraLight: '#AD8EE1',
        tertiary: '#00D1FF',
        tertiary025: 'rgba(0, 209, 255, 0.25)',
        quaternary: "#1E1E1E",
        gradient1: 'linear-gradient(180deg, #00D1FF 0%, #7000FF 100%);',
        gradient2: 'linear-gradient(180deg, #7000FF 0%, #5E02D3 100%);',

    }
})

export default theme