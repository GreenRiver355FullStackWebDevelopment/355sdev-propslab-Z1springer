import * as React from 'react';
import { Button, ButtonGroup, Card, CardHeader, CardMedia, CardContent, CardActions, Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
/* I will continue to work on making this work but for now I do not have enough of a knowledge base to make this work AND understand it
// This function was taken from the MaterialUI Docs -> Components -> Display Data -> List
export default function CheckboxList() {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);

        return (
            <List sx={{ width: '100%', maxWidth: 360}}>
                {[0, 1, 2, 3].map((value) =>{
                    return(
                        <ListItem
                            key={value}
                            secondaryAction={
                                <IconButton edge="end" aria-label="comments">
                                    <CommentIcon/> // Install proper library to access this element
                                </IconButton>
                            }
                            disablePadding
                        >   
                            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.includes(value)}
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                </ListItemIcon>
                                <ListItemText primary={`Line item ${value + 1}`} />
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        )
    }
}
*/


const Recipe = ({recipe: {name, ingredients, instructions}}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader title={name} />
            <CardContent>
                <ul>
                    {ingredients.map(ingredient => <li>{ingredient}</li>)}
                </ul>
                <ul>
                    {instructions.map(instruction => <li>{instruction}</li>)}
                </ul>
            </CardContent>
        </Card>
    )
}

export default Recipe