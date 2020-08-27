//Login models
export type LoginResponse = {
    status: 'success'
    accessToken: string
};

//Contacts models
export type Restaurant = {
    id: number
    name: string
    schedule: { [ id: string ]: string }
    phone: string
    lat: number
    lon: number
    createdAt: string
    updateAt: string
}