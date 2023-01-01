import Image from 'next/image';
import React, { useRef, useState } from "react";
import {
    Box,
    Button,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    IconButton,
    TextField,
    Typography,
    CircularProgress
} from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';
import { Controller, useForm } from "react-hook-form";
import { uploadToDB, uploadToS3 } from './api';
import { useRouter } from 'next/router';
import theme from 'styles/theme';

type T_UploadForm = {
    title: string,
    file: File[]
}

export function UploadButton() {
    const formRef = useRef<any>(null)
    const router = useRouter()
    const [open, setOpen] = useState<boolean>(false)
    const [preview, setPreview] = useState<string>('')
    const [isUploading, setIsUploading] = useState(false)
    const { control, handleSubmit, register, reset } = useForm<T_UploadForm>({
        defaultValues: {
            title: '',
            file: undefined
        }
    });

    const handleFileUpload = (e: any) => {
        const img = e.target.files[0]
    setPreview(URL.createObjectURL(img) || "");
    }

    const handleSubmitClick = () => {
        //Trigger form click with ref
        if (!formRef || isUploading) return
        setIsUploading(true)
        formRef?.current.dispatchEvent(
            new Event("submit", { cancelable: true, bubbles: true })
        );
    }

    const onSubmit = async (data: T_UploadForm) => {
        try {
            const key = await uploadToS3(data.file)
            await uploadToDB({ title: data.title.toLowerCase(), key })
            setTimeout(() => router.reload())
        }
        catch (error) {
            console.log('Failed to upload')
        }
        handleClose()
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setIsUploading(false)
        setPreview('')
        reset({ title: '', file: undefined })
        setOpen(false)
    }
    return (
        <>
            <Button variant="outlined" onClick={handleOpen} sx={{ height: '100%', maxHeight: theme.spacing(7), width: theme.spacing(12) }}>
                Upload
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography> Upload</Typography>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent >
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
                                aria-label='upload-img'
                                accept="image/*"
                                multiple={false}
                                type='file'
                                {...register("file", { required: true })}
                                onChange={handleFileUpload}
                            />
                        </Box>
                    </form>
                </DialogContent>
                <DialogActions sx={{ paddingX: theme.spacing(3), paddingTop: theme.spacing(4), paddingBottom: theme.spacing(2) }}>
                    <Button variant='outlined' onClick={handleClose}>Cancel</Button>
                    <Button
                        variant='contained'
                        startIcon={
                            isUploading ? <CircularProgress size={16} sx={{ color: 'white' }} /> : <></>}
                        type='submit'
                        sx={{ bgcolor: isUploading ? theme.palette.primary.dark : theme.palette.primary.main }}
                        onClick={handleSubmitClick}>
                        Upload
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}