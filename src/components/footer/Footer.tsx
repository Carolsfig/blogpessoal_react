import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
import { useContext, type ReactNode } from "react"
import { AuthContext } from "../../contexts/AuthContext"


function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode
    
        if (usuario.token !== "") {
    
            component = ( 

                <div className="flex justify-center bg-violet-600 text-white">
                    <div className="container flex flex-col items-center py-4">
                        <p className='text-xl font-bold'>
                                Blog Pessoal | Criado por: Carolina Figueiredo - {data}
                            </p>
                        <p className='text-lg'>Acesse minhas redes sociais</p>
                        <div className='flex gap-2'>
                            <a href="https://www.linkedin.com/in/carolinafigueiredoo" target="_blank">
                                <LinkedinLogoIcon size={48} weight='bold' />
                            </a>
                            <a href="https://github.com/Carolsfig" target="_blank">
                                <GithubLogoIcon size={48} weight='bold' />
                            </a>
                        </div>
                    </div>
                </div>

            )
        }

    return (
        <>
            { component }
        </>
    )
}

export default Footer