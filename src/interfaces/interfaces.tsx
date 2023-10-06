import { ImageSourcePropType } from "react-native"

export interface MenuItem {
    name: string,
    icon: string,
    component: string
}

export interface BooksItems{
    name: string,
    cover: ImageSourcePropType,
    description ?: string
}
