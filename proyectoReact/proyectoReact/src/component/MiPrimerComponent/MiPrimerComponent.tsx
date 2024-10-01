import { FC } from "react"


interface IPropsMiPrimerComponent {
    text: string
    color: string
    fontSize: string
}

export const MiPrimerComponent: FC<IPropsMiPrimerComponent> = ({ text, color, fontSize }) => {
    return (
        <div style={{ color: `${color}`, fontSize: `${fontSize}` }}>
            <p>{text}</p>

        </div>
    )
}
