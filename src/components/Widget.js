import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const widgetStyle = makeStyles({
    card: {
        background: '#202a3b',
        borderRadius: '7px',
        margin: '10px',
    },
    label: {
        color: '#b7b7b7',
    },
    content: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        lineHeight: '25px',
        color: '#ffffff',
    }
})

export default function Widget(props) {

    const widget = widgetStyle();
    
    return(
        <Grid item 
        lg={props.lg}
        md={props.md}
        sm={props.sm}
        xs={props.xs}>
            <Card className={widget.card}>
                <CardContent>
                    <Typography className={widget.label}>
                        {props.header}
                    </Typography>
                    <Typography className={widget.content}>
                        {props.children}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}
