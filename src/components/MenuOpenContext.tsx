import { ReactNode, createContext, useContext, useState } from "react"


interface MenuOpenContextInterface {

    isOpen: boolean
    open: () => void
    close: () => void
}

const initialValue : MenuOpenContextInterface = {

    isOpen: false,
    open: () => {},
    close: () => {}
}

const MenuOpenContext = createContext<MenuOpenContextInterface>(initialValue)

export const useMenuOpenContext = () : MenuOpenContextInterface => {
    return useContext(MenuOpenContext)
}

export const MenuOpenProvider = ({children} : {children: ReactNode}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const open = (): void => {
        setIsOpen(true)
    }

    const close = (): void=> {
        setIsOpen(false)
    }

    return(

        <MenuOpenContext.Provider value={{isOpen,open,close}}>
            {children}
        </MenuOpenContext.Provider>
    )


}