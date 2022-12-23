const PrintCards = ({ userData }) => {
    const { cell, email, location, name, picture } = userData;

    return (
        <div className="card">
            <div className="title">
                <h2>{`${name.title} ${name.first} ${name.last}`}</h2>
            </div>
            <div className="img">
                <img src={picture.large} alt="" />
            </div>
            <div className="info">
                <div className="info_item">
                    <i className="bx bxs-envelope"></i> <span>{email}</span>
                </div>
                <div className="info_item">
                    <i className="bx bxs-phone"></i> <span>{cell}</span>
                </div>
                <div className="info_item">
                    <i className="bx bxs-location-plus"></i>
                    <span>{`${location.country} ${location.state} ${location.city}`}</span>
                </div>
            </div>
        </div>
    );
};

export default PrintCards;
