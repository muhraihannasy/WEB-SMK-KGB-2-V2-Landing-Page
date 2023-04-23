import "./CardProfile.scss";

const CardProfile = ({ name, division }) => {
  return (
    <div className="card-profile">
      <div className="card-cover">
        <img
          src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          alt=""
        />
      </div>
      <div className="card-body">
        <h2 className="name">{name}</h2>
        <p className="division">{division}</p>
      </div>
    </div>
  );
};

export default CardProfile;
