const getSignedUrl = async (type: string) => {
    const URL = '/api/signed'
    const Query = '?type=' + type
    const response = await fetch(URL + Query)
    return await response.json()
}

export async function uploadToS3(file: File[]) {
    const type = file[0].type.split('/')[1]
    const { uploadURL, key } = await getSignedUrl(type)
    const result = await fetch(uploadURL, {
        method: 'PUT',
        headers: {
            'Content-Type': file[0].type
        },
        body: file[0]
        //body: blobData
    })
    if (!result.ok) throw new Error('Failed to upload image')
    return key
}

type T_UploadPayload = {
    title: string;
    key: string;
}

export async function uploadToDB(payload: T_UploadPayload) {
    const response = await fetch('/api/photo', {
        method: 'PUT',
        body: JSON.stringify(payload)
    })
    const result = await response.json()
    return result.data
}
