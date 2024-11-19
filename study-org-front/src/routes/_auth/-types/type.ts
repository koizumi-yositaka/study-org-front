import { LinkFactoryProp } from "../../../utils/linkFactory"

export type SideBarObjType ={
    to:string,
    svgKey:string,
    label:string,
    contents?:SideBarObjType[],
    rightLabel?:string
}

export type HeaderComposeType={

}

export interface HeaderMenuType extends LinkFactoryProp{
    itemsInfo:LinkFactoryProp[]
}