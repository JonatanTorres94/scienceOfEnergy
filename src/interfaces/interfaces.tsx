import { ImageSourcePropType } from "react-native"


export interface MenuItem {
    name: string,
    nameEn: string,
    namePr: string,
    icon: string,
    component: string
}

export interface BooksItems{
    name: string,
    nameEn: string,
    namePr: string,
    cover: ImageSourcePropType,
    url: string,
    urlEn: string,
    urlPr: string,
    description ?: string
}

export interface videoInterface{
    videoUrl: ImageSourcePropType | any,
    text?: string,
    title?: string
}

export interface OccultMastersInterface {
    name: string,
    cover: ImageSourcePropType,
    musicalWorks: string[] 

}
