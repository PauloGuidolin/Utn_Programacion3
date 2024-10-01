import { AppProduct } from "./component/AppProduct/AppProduct"
// import { ComponentCounter } from "./component/ComponentCounter/ComponentCounter"
// import { ComponentUseEffect } from "./component/ComponentUseEffect/ComponentUseEffect"
// import { FormComponent } from "./component/FormComponent/FormComponent"
// import { MiPrimerComponent } from "./component/MiPrimerComponent/MiPrimerComponent"


export const App = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
{/* 
        <MiPrimerComponent 
        text={'Mi primer texto!'}
        color={'lightblue'}
        fontSize="2rem"
        />
        <ComponentCounter/>
        <ComponentUseEffect/> */}
        {/* <FormComponent/> */}
        <AppProduct/>
        </div>
    )
}

