import { RemoteAPIs } from '../constants/RemoteAPIs'

export async function submitPhoto(image: any): Promise<{result: string[]}> {
    return new Promise((resolve, reject) => {
        const endpoint = '/gemini'

        const fileData: any = {
            uri: image.uri,
            name: 'image.jpg',
            type: 'image/jpeg'
        }

        const formData = new FormData()
        formData.append('file', fileData)

        fetch(RemoteAPIs.apiCore.baseURL + endpoint, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formData
        })
            .then(response => response.json())
            .then(json => {
                resolve(json)
            })
            .catch(error => {
                reject(error)
            })

    })
}