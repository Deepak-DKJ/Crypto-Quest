import { makeStyles } from '@material-ui/core'
import React from 'react'

const SelectButton = ({children, selected, onClick}) => {

    const useStyles = makeStyles({
        selectbutton: {
        border: "1px solid  #00FF00",
        borderRadius: 5,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: "Montserrat",
        cursor: "pointer",
        backgroundColor: selected ? " #00FF00" : "",
        color: selected ? "black" : "",
        fontWeight: selected ? 700 : 500,
        "&:hover": {
            backgroundColor: "#00FF00",
            color: "black",
        },
        width: "22%",
    }

    });

    const classes = useStyles();
  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  )
}

export default SelectButton
