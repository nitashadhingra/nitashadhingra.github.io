import React from "react"
import TechStack from "./TechStack"
import './projects.css'


interface IProps {
    info: {
        link: string
        background: string
        category: string
        title: string
        subtitle: string
        tech: string[]
    }[]
}

const ProjectCard: React.FC<IProps> = ({ info }) => {

    const renderCardInfo = () : JSX.Element[] =>{
        return info.map(proj => {
            return (
                <a className="proj_card" target="_blank" href={proj.link}>
                    <div className="card__background" id={proj.background}></div>
                    {/* <div className="card__background" style={{backgroundImage: "url(" + proj.background + ")"}}></div> */}
                    <div className="card__content">
                        <p className="card__category">{proj.category}</p>
                        <h3 className="card__heading">{proj.title}</h3>
                        <h4 className="card__subheading">{proj.subtitle}</h4>
                        <TechStack urls={proj.tech} />
                    </div>
                </a>
            )
        })
    }

    return (
        <>{renderCardInfo()}</>
    )
}

export default ProjectCard