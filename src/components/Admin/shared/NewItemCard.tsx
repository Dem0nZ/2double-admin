import {Card, CardActionArea, CardContent, Typography} from "@material-ui/core";
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    card: {
        width: 345,
        height: 275,
        margin: 5
    },
    cardMedia: {
        height: 155
    },
    plus: {
        fontSize:150
    }
})

interface ContactCardProps {
    id?: number|undefined
    newItemName: string
    editDialog: () => void
}

const NewItemCard = ({ newItemName, editDialog }: ContactCardProps) => {
    const classes = useStyles();

    return (<div>
            <Card className={classes.card}>
                <CardActionArea onClick={()=>{ editDialog() }}>
                    <CardContent>
                        <div className={classes.plus}>
                            <AddTwoToneIcon fontSize={'inherit'} color={'primary'}/>
                        </div>
                        <Typography gutterBottom variant='h5' component='h2'>
                            {newItemName}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>

    )
}

export default NewItemCard;