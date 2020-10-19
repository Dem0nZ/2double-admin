import {Card, CardActionArea, CardContent, CardMedia, Divider, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    card: {
        width: 345,
        height: 275,
        margin: 5,
    },
    cardMedia: {
        height: 155
    }
})

interface ContactCardProps {
    id: number
    isOpen?: boolean
    name: string
    address: string
    editDialog: (id: number | undefined) => void
}

const ContactCard = ({ id, name, address, editDialog }: ContactCardProps) => {
    const classes = useStyles();
    return (<div>
            <Card key={id} className={classes.card}>
                <CardActionArea onClick={()=>{ editDialog(id) }}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://api-maps.yandex.ru/services/constructor/1.0/static/?sid=3sVszGantEAe0y_VfKbY0bKRginTKWsi&width=458&height=300"
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                            {name}
                        </Typography>
                        <Divider/>
                        <Typography gutterBottom variant='subtitle1'>
                            {address}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>

        )
}

export default ContactCard;