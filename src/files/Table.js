import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Table() {
  var url = "http://localhost:3400/";
  function submitForm(event) {
    event.preventDefault();
    var data = new FormData(event.currentTarget);
    var nameInput = data.get("nameInput");
    var emailInput = data.get("emailInput");
    var phoneInput = data.get("phoneInput");
    var dateInput = data.get("dateInput");
    var fromInput = data.get("fromInput");
    var endInput = data.get("endInput");
    var guestInput = data.get("guestInput");
    var messageInput = data.get("messageInput");

    axios
      .post(url + "TableData", {
        Name: nameInput,
        Email: emailInput,
        Phone: Number(phoneInput),
        Date: dateInput,
        FromTime: fromInput,
        EndTime: endInput,
        Guest: guestInput,
        Message: messageInput,
      })
      .then((user_Data) => {
        alert("Table Booked Successfully");
        event.target.reset();
        event.target.nameInput.focus();
      });
  }
  return (
    <>
      <Navbar />

      <section className="py-5">
        <div className="container-fluid px-4 px-lg-5">
          <div className="text-center mb-3 ">
            <h6 className="m-0 text-warning">Reservation</h6>
            <h2 className="m-0">Make a reservation</h2>
          </div>
          <div className="row m-0">
            <div className="col-lg-6 p-0">
              <div className="card border-0 h-100">
                <div className="card-body">
                  <div>
                    <img
                      src="images/table.jpg"
                      className="img-fluid"
                      alt=""  
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="card border-0 h-100 shadow">
                <div className="card-body p-3">
                  <div>
                    <h5 className="m-0 mb-2">Booking a table online is easy</h5>
                  </div>

                  <form onSubmit={submitForm}>
                    <div className="row ">
                      <div className="col-lg-6">
                        <label htmlFor="">Your Name</label>
                        <input
                          required
                          type="text"
                          name="nameInput"
                          className="form-control mb-3 py-3 px-3"
                          placeholder="Name here"
                          id=""
                        />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="">Your Email</label>
                        <input
                          required
                          type="email"
                          placeholder="Email here"
                          name="emailInput"
                          className="form-control mb-3 py-3 px-3"
                          id=""
                        />
                      </div>
                    </div>

                    <div className="row m-0">
                      <div className="col-lg-6">
                        <label htmlFor="">How can we contact you?</label>
                        <input
                          required
                          type="number"
                          name="phoneInput"
                          className="form-control mb-3 py-3 px-3"
                          placeholder="Phone Number here"
                          id=""
                        />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="">Date</label>
                        <input
                          required
                          type="date"
                          placeholder="Booking date here"
                          name="dateInput"
                          className="form-control mb-3 py-3 px-3"
                          id=""
                        />
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col-lg-6">
                        <label htmlFor="">From</label>
                        <input
                          required
                          type="time"
                          name="fromInput"
                          className="form-control mb-3 py-3 px-3"
                          placeholder="Start time here"
                          id=""
                        />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="">To</label>
                        <input
                          required
                          type="time"
                          placeholder="End time here"
                          name="endInput"
                          className="form-control mb-3 py-3 px-3"
                          id=""
                        />
                      </div>
                    </div>
                    <label htmlFor="">Total Guest</label>
                    <input
                      required
                      type="text"
                      name="guestInput"
                      className="form-control mb-3 py-3 px-3"
                      id=""
                    />
                    <textarea
                      required
                      name="messageInput"
                      type="text"
                      style={{ resize: "none" }}
                      className="form-control mb-3 py-3 px-3"
                      id=""
                      placeholder="Enter Your Message Here"
                    ></textarea>

                    <button type="submit" className="btn btn-danger">
                      Book a table
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
