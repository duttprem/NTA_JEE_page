import "./details.css";
const Details =( ) =>{
    return(
        <div className="form">
            <form className="details">
            <h2>Login Through Application Number & Date of Birth</h2>
                <label>Application Number :</label>
                <input type="number" required/>
                <div className="date">
                    <label>Date of Birth :</label>
                    <input type="date" required className="date_a"/>
                 </div>
                 <div className="security">
                    <label>Enter Security Pin :</label>
                    <input type="number" required/>
                 </div>
                 <button>Submit</button>
                
            </form>
        </div>

    );
}
export default Details;