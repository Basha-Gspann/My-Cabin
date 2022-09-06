import React, { useState } from "react";
import { db } from "./firebase";
import DateTimePicker from 'react-datetime-picker';

import Details from "../section/Details";

function FormData() {
    const [name, setName] = useState("");
    const [capacity, setCapacity] = useState("");
    const [power, setPower] = useState("");
    const [ports, setPorts] = useState("");
    const [loader, setLoader] = useState(false);

    const [date, setDate] = useState(new Date());

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("cabininfo")
            .add({
                name: name,
                capacity: capacity,
                power: power,
                ports: ports,
                date:date,
            })
            .then(() => {
                setLoader(false);
                alert("Your cabin has been booked!");
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setCapacity("");
        setPower("");
        setPorts("");
        setDate("");
    };



    return (
        <div className="myform">
            <Details/>
            <h2>Form data to Firebase Database</h2>
            <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
                    <label>Cabin Name</label>
                </div>
                <div className="form-group">
                    <label>Cabin Size</label>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        placeholder="Cabin Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Designatio</label>
                    <input
                        placeholder="Capacity"
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                        className="form-control"
                    />
                </div>
                {/* <div className="form-group">
                <label>Power Available</label>
                    <div class="form-check form-check-inline">
                        
                        <input
                            type="radio"
                            value="yes"
                            onChange={(e) => setPower(e.target.value)}
                        /> Yes
                        <input
                            type="radio"
                            value="no"
                            onChange={(e) => setPower(e.target.value)}
                        /> No
                    </div>
                </div> */}
                <div className="form-group">
                    <label>Email</label>
                    <input
                        placeholder="Number of ports"
                        value={ports}
                        onChange={(e) => setPorts(e.target.value)}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                <DateTimePicker onChange={setDate} value={date} />
                </div>
                <center>
                <button
                    type="submit"
                    style={{ background: loader ? "#ccc" : "#0000FF" }}
                >
                    Submit
                </button>
                </center>
                
            </form>
        </div>

    )
}

export default FormData