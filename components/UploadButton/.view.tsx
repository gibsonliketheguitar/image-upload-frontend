import Image from 'next/image';
import React, { useRef, useState } from "react";
import { DialogActions, DialogContent, DialogContentText, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Controller, useForm } from "react-hook-form";
import Box from "@mui/system/Box";

type T_UploadForm = {
    title: string;
    file: File;
}

export function UploadButton() {
    const formRef: any = useRef(null)

    const [open, setOpen] = useState<boolean>(false)
    const [preview, setPreview] = useState<string>('')

    const { control, handleSubmit, formState, register, reset } = useForm<T_UploadForm>();

    const handleFileUpload = (e: any) => {
        console.log('e', e)
        const file = e.target.files[0]

        setPreview(URL.createObjectURL(file))
    }

    const handleSubmitClick = () => {
        if (!formRef) return
        formRef?.current.dispatchEvent(
            new Event("submit", { cancelable: true, bubbles: true })
        );
    }

    const onSubmit = (data: T_UploadForm) => {
        console.log('what is data', data)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            <Button variant="outlined" onClick={handleOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography> Upload</Typography>
                    <CloseIcon />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Upload a picture along with a title!
                    </DialogContentText>
                    <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="title"
                            control={control}
                            defaultValue=''
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    autoFocus
                                    margin="dense"
                                    id="title"
                                    label="Title"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                />
                            )}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            {preview && <Image alt='uploaded image' src={preview} height={200} width={200} />}
                            <input
                                id='imgFile'
                                accept="image/*"
                                multiple={false}
                                type='file'
                                {...register("file", { required: true })}
                                onChange={handleFileUpload}
                            />
                        </Box>
                    </form>

                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' onClick={handleClose}>Cancel</Button>
                    <Button type='submit' variant='contained' onClick={handleSubmitClick}>Upload</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}