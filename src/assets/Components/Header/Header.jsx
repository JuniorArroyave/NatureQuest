import { LogoNaturalQuest } from "../../Logos/Logos";
import 'boxicons';
import '../Header/Header.css'
export function Header()  {

    return (
        <>
            <header>
                <div className="ContainerLogo">
                    <h1 className="Logo"><LogoNaturalQuest/> NaturalQuest</h1>
                </div>
                <div className="Buttons">

                    <input className="Input" type="search" placeholder="Buscar" />
                    <a className="Link" href="#">Comenzar!</a>
                </div>

            </header>
    </>
    )

}