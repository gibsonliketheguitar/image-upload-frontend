import { TextField } from "@mui/material";
import React, { useState } from "react";

type T_Search = {
    value: string
    onChange: (...arg: any) => void
}

export function Search(props: T_Search) {
    return <TextField {...props} />
}