//Login models
export type LoginResponse = {
    status: 'success'
    accessToken: string
};

//Contacts models
export type RestaurantData = {
    name: string
    address: string
    schedule: string
    phone: string
    lat: number
    lon: number
}

export type Restaurant = RestaurantData & {
    id: number
    createdAt: string
    updateAt: string
}


