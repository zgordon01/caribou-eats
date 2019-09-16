import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import LoadingWrapper from '../LoadingWrapper';

const CaribouTile = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        load().then(() => {
            setLoading(false);
        });
    }, []);

    return (
        <Card className="caribou-tile-container flex-center">
            <CardContent>
                <LoadingWrapper loading={loading}>
                    <div className="caribou-tile">
                        <Typography>yo dude let's eat</Typography>
                    </div>
                </LoadingWrapper>
            </CardContent>
        </Card>
    );
};

const load = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
};

export default CaribouTile;
