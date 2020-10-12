import React from 'react'
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { TEXTBLOCKS } from '../../configs/paths';

const ReportsPage = () => {
    return (
        <Container maxWidth="sm">
            <h2>
                MultiMeasure Center 3.0 - Verwaltung der Berichte.
            </h2>
            <Link to={TEXTBLOCKS}>Zur Textblockverwaltung &gt;</Link>
        </Container>
    )
}

export default ReportsPage