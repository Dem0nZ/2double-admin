import {Button, Card, CardActionArea, CardContent, Divider, Typography} from "@material-ui/core";
import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from "@material-ui/core/styles";
import ConfirmDialog from "./ConfirmDialog";
import {Map, Placemark} from "react-yandex-maps";

const useStyles = makeStyles({
    card: {
        width: 345,
        height: 285,
        margin: 5,
    },
    cardMap: {
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
    lat: number
    lon: number
    editDialog: (id: number | undefined, address: string | undefined) => void
}

const ContactCard = ({ id, name, address, editDialog, lat, lon }: ContactCardProps) => {
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
                    <CardContent>
                        <Map className={classes.cardMap}
                             defaultState={{ center: [lat, lon], zoom: 14 }}>
                            <Placemark geometry={[lat, lon]} />
                        </Map>
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