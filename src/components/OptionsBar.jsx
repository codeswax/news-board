import LanguageFilter from "./LanguageFilter"
import SearchTopic from "./SearchTopic"

const OptionsBar = ({ setLanguage, setTopic}) => {
    return (
        <nav className="navbar navbar-expand-lg bg-info" da>
            <div className="container-fluid">
            
                <a className="navbar-brand">
                <h2 className="mb-0"><span class="badge text-bg-light">Sitio de Noticias</span></h2>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <LanguageFilter setLanguage={setLanguage} />
                    </ul>
                    <SearchTopic setTopic={setTopic}/>
                </div>
            </div>
        </nav>
    )
}

export default OptionsBar