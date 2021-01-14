import {Button, Card, CardActionArea, CardContent, CardMedia, Divider, Typography} from "@material-ui/core";
import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from "@material-ui/core/styles";
import ConfirmDialog from "./ConfirmDialog";

const useStyles = makeStyles({
    card: {
        width: 345,
        height: 285,
        margin: 5,
    },
    cardMedia: {
        height: 145
    },
    button: {
        margin: "auto"
    }
})

interface ContactCardProps {
    id: number
    isOpen?: boolean
    name: string
    address: string
    editDialog: (id: number | undefined, address: string | undefined) => void
}

const ContactCard = ({ id, name, address, editDialog }: ContactCardProps) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (value: boolean) => {
        setOpen(false);
    };

    return (<div>
            <Card key={id} className={classes.card}>
                <CardActionArea onClick={()=>{ editDialog(id, address) }}>
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
                <Button
                    variant='contained'
                    color='secondary'
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={handleClickOpen}
                >Удалить</Button>
            </Card>
            <ConfirmDialog open={open} onClose={handleClose} id={id}/>
        </div>

        )
}

export default ContactCard;