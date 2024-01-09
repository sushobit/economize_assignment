import * as React from 'react';
import { Button, Card, CardActions, CardContent, Divider, Typography, Grid } from '@mui/material';
import './Components.css';

function Components() {
    const [spacing, setSpacing] = React.useState(12);

    return (
        <div style={{ display: "flex", justifyContent: "space-evenly" }} className='container'>
            <Grid container>
                <Grid xs={3} className='grid-con-1'>
                    <Card style={{ width: "300" }}>
                        <CardContent>
                            <Typography sx={{ minWidth: 100 }}>
                                Total Revenue  <span className='span1'>+12.5%</span>
                            </Typography>
                            <Typography sx={{ mb: 1.5, fontSize: 24 }} color="text.primary">
                                $32,621.72
                            </Typography>
                            <Typography variant="body2">
                                433 Orders
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"></Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Divider></Divider>
                <Grid xs={3} className='grid-con-1'>
                    <Card style={{ width: "300" }}>
                        <CardContent>
                            <Typography sx={{ minWidth: 100 }}>
                                Subscribers  <span className='span1'>+32.5%</span>
                            </Typography>
                            <Typography sx={{ mb: 1.5, fontSize: 24 }} color="text.primary">
                                484,205
                            </Typography>
                            <Typography variant="body2">
                                $56 Average Order
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"></Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Divider></Divider>
                <Grid xs={3}>
                    <Card style={{ width: "300" }}>
                        <CardContent>
                            <Typography sx={{ minWidth: 100 }}>
                                Conversations  <span className='span2'>-3.4%</span>
                            </Typography>
                            <Typography sx={{ mb: 1.5, fontSize: 24 }} color="text.primary">
                                552,553
                            </Typography>
                            <Typography variant="body2">
                                5min Average Responsive Time
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"></Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Divider></Divider>
                <Grid xs={3}>
                    <Card style={{ width: "300" }}>
                        <CardContent>
                            <Typography sx={{ minWidth: 100 }}>
                                Popup Conversion Rate  <span className='span1'>+32.5%</span>
                            </Typography>
                            <Typography sx={{ mb: 1.5, fontSize: 24 }} color="text.primary">
                                25%
                            </Typography>
                            <Typography variant="body2">
                                5% Sales Conversion Rate
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"></Button>
                        </CardActions>
                    </Card>
                </Grid>



            </Grid>
        </div>

    );
}

export default Components;