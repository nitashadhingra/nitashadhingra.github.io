import './projects.css'
import ProjectCard from './ProjectCard'

const Projects = () => {

    const projects = [
        {
            link: "https://github.com/nitashadhingra/Mentorship",
            // background: "protege.jpg",
            background: "bg1",
            category: "Flutter Project",
            title:"Protégé IGDTUW",
            subtitle: "The Mentorship Society, IGDTUW",
            tech: [
                "flutter.png",
                "firebase.png"
            ]
        },
        {
            link: "https://github.com/nitashadhingra/MediStat",
            // background: "medistat.jpg",
            background: "bg2",
            category: "Flutter Project",
            title: "MediStat App",
            subtitle: "The Instant Healthcare Solution",
            tech:[
                "flutter.png",
                "firebase.png",
                "google maps.png",
                "gcp.png"
            ]
        },
        
        {
            link: "https://github.com/nitashadhingra/Guess-the-color",
            // background: "gtc2.jpeg",
            background: "bg3",
            category: "JavaScipt Game",
            title: "Guess the Color",
            subtitle: "Fun Game to match RGB Code",
            tech:[
                "html.jpg",
                "css.jpg",
                "js.jpeg"
            ]
        },

        {
            link: "https://github.com/nitashadhingra/LetsGetWasted",
                // background: "waste.jpg",
            background: "bg4",
            category: "Web Portal",
            title: "Let's Get Wasted",
            subtitle: "One-stop-shop to dispose waste",
            tech:[
                "html.jpg",
                "css.jpg",
                "js.jpeg"]
        },

        {
            link: "https://github.com/nitashadhingra/Movie-Review-Analysis",
            // background: "mov.png",
            background: "bg5",
            category: "Machine Learning",
            title: "Movie Review Analysis",
            subtitle: "Sentiment Classification using Keras API",
            tech:[
                "tf.png",
                "keras.png"
            ]
        },


        {
            link: "https://github.com/nitashadhingra/Climate-Change-Analysis",
            // background: "climate.jpg",
            background: "bg6",
            category: "Machine Learning",
            title: "Climate Change Analysis",
            subtitle: "Used linear regression algo to study temperatures of earth.",
            tech:[
                "numpy.png",
                "scikit.png",
                "seaborn.png"
            ]
        },

        {
            link: "https://github.com/nitashadhingra/task-tracker",
            // background: "todo.jpeg",
            background: "bg7",
            category: "Web App",
            title: "ToDo List",
            subtitle: "My first react app to add and delete your daily todos",
            tech:[
                "reactjs.png",
                "css.jpg",
                "jsonserver.jpg"
            ]
        }
    ]

    return (
        <div id="project-sec">
            <div>
                <p className="heading sec">Featured <strong>Projects</strong></p>
            </div>

            
            <div className="card-grid">
                <ProjectCard info={projects} />
            </div>
        </div>
    )
}

export default Projects