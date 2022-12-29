import React from "react";
import { TextField, makeStyles } from "@mui/material";
import styled from "@emotion/styled";
import theme from "styles/theme";

type T_Search = {
    value: string
    onChange: (...arg: any) => void
}

const InputField = styled(TextField)(({ theme }: any) => ({
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(10),
    }
}));

export function Search(props: T_Search) {
    return <InputField fullWidth {...props} />
}