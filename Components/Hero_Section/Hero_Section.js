import './Hero_Section.css'
function Header() {

    return (
        <>
            <div class="card text-bg-dark">
                <img src={require("../../Assets/Images/bg.jpg")} className="card-img" alt="..." height="300vh"></img>
                <div className="card-img-overlay hero">
                    <h1 className="card-title name">Reham Taher</h1>
                    <p className="card-text">Web Developer & Designer.</p>
                    <button type="button" class="btn btn-outline-secondary mt-4">CONTACT ME</button>
                </div>
            </div>

            
        </>
    );
}

export default Header;