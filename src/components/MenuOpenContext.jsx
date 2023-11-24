import { createContext, useContext, useState } from "react"


const MenuOpenContext = createContext()

export const useMenuOpenContext = () => {
    return useContext(MenuOpenContext)
}

export const MenuOpenProvider = ({children}) => {

    const [isOpen, setIsOpen] = useState(false)

    const open = () => {
        setIsOpen(true)
    }

    const close = () => {
        setIsOpen(false)
    }

    return(

        <MenuOpenContext.Provider value={{isOpen,open,close}}>
            {children}
        </MenuOpenContext.Provider>
    )


}