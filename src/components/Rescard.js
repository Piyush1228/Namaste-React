const Rescard = (props) => {
    const {resdata} = props;
    const {name,cuisine,rating,delivery} = resdata?.restaurant
    return (
        <div className="res-card">
            <img
              className="res-logo"
              alt="res-logo"
              src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZbqHQf_Ax8CfYvidvJYJ_fPUJ-G1q0FKww&s"
            />
            <h3>{name}</h3>
            <h4>{cuisine.join(", ")}</h4>
            <h4>{rating.average}</h4>
            <h4>{delivery.delivery_time}</h4>

        </div>
    )
}
export default Rescard;