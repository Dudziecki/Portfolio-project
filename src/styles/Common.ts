import {theme} from "./Theme";


type FontPropsType ={
    family?: string,
    color?: string,
    weight?: number,
    lineHeight?: number,
    Fmax?: number,
    Fmin?: number
}

export const font = ({family,color,weight,lineHeight,Fmax,Fmin}:FontPropsType)=>`
    font-family:${family || "Poppins"};
    color:${color || theme.colors.textColor};
    font-weight:${weight || 400};
    line-height:${lineHeight || 1.2};
    font-size: calc((100vw - 360px) / (1440 - 360) * (${Fmax || 50} - ${Fmin || 36}) + ${Fmin || 36}px);

`