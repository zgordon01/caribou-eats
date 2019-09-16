import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LoadingWrapper from '../LoadingWrapper';
import { ListItem } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import RestaurantIcon from '@material-ui/icons/Restaurant';
const eats = [
    {
        'name': 'Naansense',
        'price': '$'
    },
    {
        'name': 'Blackwood BBQ',
        'price': '$'
    },
    {
        'name': 'Fat Baby Tacos',
        'price': '$'
    },
    {
        'name': 'Epic Burger',
        'price': '$'
    }
];

const EatsTile = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        load().then(() => {
            setLoading(false);
        });
    }, []);

    const listItems = eats.map((eat, index) =>
        <div key={index}>
            <ListItem button >
                <ListItemIcon>
                    <RestaurantIcon />
                </ListItemIcon>
                <ListItemText primary={eat.name} />
            </ListItem>
            {index !== eats.length - 1 && <Divider />}
        </div>
    );

    return (
        <Card className="eats-tile-container flex-center">
            <CardContent>
                <LoadingWrapper loading={loading}>
                    <div className="eats-tile">
                        <List component="nav">
                            {listItems}
                        </List>
                    </div>
                </LoadingWrapper>
            </CardContent>
        </Card>
    );
};

const load = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
};

export default EatsTile;
