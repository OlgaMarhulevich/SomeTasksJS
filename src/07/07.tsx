import React from "react";
import {ManType} from "../05/05";

type ManComponentType = {
    title: string
    man: ManType
}

export const ManComponent: React.FC<ManComponentType> = ({title, man}) => {
    return <div>
        {title}
        {man.name}
    </div>
}




export function fun () {}
