import './projects.css';

interface IProps {
    urls: string[]
}

function TechStack ({urls}: IProps) {
    console.log(urls)
    return (
        <div className="techstack">
            {
                urls.map(function(val) {
                    const img = require(`./techstack/${val}`);
                    return <img className="tech" src={img} />
                })
            }
        </div>
    )
}

export default TechStack