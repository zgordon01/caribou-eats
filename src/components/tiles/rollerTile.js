import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CasinoIcon from '@material-ui/icons/Casino';

import LoadingWrapper from '../LoadingWrapper';

const RollerTile = () => {
    const [rolling, setRolling] = useState(false);
    const [chosenOne, setChosenOne] = useState(0);

    const roll = () => {
        setRolling(true);
        load().then(() => {
            setChosenOne(Math.floor(Math.random() * 11) + 1);
            setRolling(false);
        });
    }

    return (
        <Card className="flex-center">
            <CardContent>
                <div className="roller-tile flex-space-horizontal">
                    <div className="roller-tile-dice" onClick={() => { roll(); }}>
                        <CasinoIcon fontSize="inherit"/>
                    </div>
                    <LoadingWrapper loading={rolling}>
                        <div className="roller-tile-results">
                            {chosenOne}
                        </div>
                    </LoadingWrapper>
                </div>
            </CardContent>
        </Card>
    );
};

const load = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
};

export default RollerTile;
