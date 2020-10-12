import { createMuiTheme } from '@material-ui/core/styles'

const muiTheme = createMuiTheme({
    globalthem: {
        primary: {
            main: '#F7E91C',
            dark: '#5e5e5d',
            light: '#e0e0e0',
            item_background: '#DDDDDD',
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            contrastText: '#ffcc00',
        },
    },
})

export default muiTheme