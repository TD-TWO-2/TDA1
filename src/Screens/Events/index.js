import React, { useState } from "react";
import "./Events.css";
import backimage from "../../Images/eventbg.png";
import { Link } from "react-router-dom";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import TextInput from "../../Component/TextInput";
import Button from "../../Component/Button";
import TextArea from "../../Component/TextArea";
import Checkbox from "../../Component/Checkbox";
const Events = () => {
  const [addEvent, setAddEvent] = useState(false);
  const [editEvent, setEditEvent] = useState(false);
  const [editEventIndex, setEditEventIndex] = useState();
  const [servicesErrorMessage, setServicesErrorMessage] = useState("");
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
  });

  console.log("userInfo", userInfo);

  const handleUserInfoInputChange = (name, value) => {
    setUserInfo((prevuserInfo) => ({
      ...prevuserInfo,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    const newErrors = {
      firstName: userInfo.firstName.trim() === "",
      lastName: userInfo.lastName.trim() === "",
      email: userInfo.email.trim() === "",
      phoneNumber: userInfo.phoneNumber.trim() === "",
    };

    setErrors(newErrors);

    const isUserInfoValid = !Object.values(newErrors).includes(true);

    if (isUserInfoValid) {
      // isUserInfoValid is valid, proceed with form submission
      console.log("User Info submitted successfully:", userInfo);
      setAddEvent(true);
    } else {
      // isUserInfoValid is invalid, show error messages
      console.log("Form has errors:", newErrors);
    }
  };

  const [eventInfo, setEventInfo] = useState({
    eventName: "",
    numberOfAttendees: "",
    eventStart: "",
    eventEnd: "",
    specialInstructions: "",
    services: [],
  });

  const [events, setEvents] = useState([]);
  const [eventsErrors, setEventsErrors] = useState({
    eventName: false,
    numberOfAttendees: false,
    eventStart: false,
    eventEnd: false,
    specialInstructions: false,
  });
  console.log("eventInfo", eventInfo);
  console.log("events", events);
  const servicesNeeded = [
    { name: "Decoration" },
    { name: "Catering" },
    { name: "Venue Selection" },
    { name: "Entertainment" },
    { name: "Event Design" },
    { name: "Audio/Visual" },
    { name: "Transportation" },
    { name: "Photography" },
    { name: "Videography" },
    { name: "Valet" },
    { name: "Others" },
  ];

  const handleEventInputChange = (name, value) => {
    setEventInfo((preveventInfo) => ({
      ...preveventInfo,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleCheckboxChange = (label, isChecked) => {
    setEventInfo((prevEventInfo) => {
      let updatedServices;
      if (isChecked) {
        // Add the service if it doesn't already exist
        if (!prevEventInfo.services.includes(label)) {
          updatedServices = [...prevEventInfo.services, label];
        } else {
          updatedServices = [...prevEventInfo.services];
        }
      } else {
        // Remove the service
        updatedServices = prevEventInfo.services.filter(
          (service) => service !== label
        );
      }

      return {
        ...prevEventInfo,
        services: updatedServices,
      };
    });
  };

  const handleAddMoreEvent = (e) => {
    e.preventDefault();
     // Check if at least one service is selected
    const isAnyServiceSelected = eventInfo.services.length > 0;

    const newErrors = {
      eventName: eventInfo.eventName.trim() === "",
      numberOfAttendees: eventInfo.numberOfAttendees.trim() === "",
      eventStart: eventInfo.eventStart.trim() === "",
      eventEnd: eventInfo.eventEnd.trim() === "",
      specialInstructions: eventInfo.specialInstructions.trim() === "",
      services: !isAnyServiceSelected,
    };

    setEventsErrors(newErrors);
    if (!isAnyServiceSelected) {
      setServicesErrorMessage("Please select at least one service.");
    } else {
      setServicesErrorMessage("");
    }

    const isFormValid = !Object.values(newErrors).includes(true);

    if (isFormValid) {
      setEvents((prevEvents) => [...prevEvents, eventInfo]);
      setEventInfo({
        eventName: "",
        numberOfAttendees: "",
        eventStart: "",
        eventEnd: "",
        specialInstructions: "",
        services: [],
      });
    }
  };

  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const date = `${year}-${month}-${day}T${hours}:${minutes}`;

  const handleEditEvent = (index) => {
    console.log("index", index);
    const selectedEvent = events[index];
    setEventInfo(selectedEvent);
    setEditEventIndex(index);
    setEditEvent(true);
  };

  const handleSaveEvent = () => {
    const updatedEvents = [...events]; // Create a copy of the events array

    // Update the event at editEventIndex with eventInfo
    updatedEvents[editEventIndex] = {
      ...eventInfo,
      eventStart: new Date(eventInfo.eventStart).toISOString(), // Ensure eventStart is in ISO format
      eventEnd: new Date(eventInfo.eventEnd).toISOString(), // Ensure eventEnd is in ISO format
    };

    setEvents(updatedEvents);
    setEventInfo({
      eventName: "",
      numberOfAttendees: "",
      eventStart: "",
      eventEnd: "",
      specialInstructions: "",
      services: [],
    });
    setEditEvent(false); // Exit edit mode
  };

  const handleDeleteEvent = (index) => {
    // Implement delete functionality here
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  };
  return (
    <div
      className="registerbg"
      // style={{ backgroundImage: `url(${backimage})` }}
    >
      <NavBar />

      <div className="bg">
        <div className="p-5" />
        <div className="container d-flex justify-content-center align-items-center">
          <div className="eventForm my-5">
            <h3 className="mb-1 poppins-bold text-white">
              Request For a Quote
            </h3>
            <div>
              <div className="m-3"></div>
              <div className="row">
                <div className="col-6">
                  <TextInput
                    placeHolder="Enter First Name"
                    label="First Name"
                    backgroundColor="white"
                    labelColor="white"
                    name="firstName"
                    onChange={handleUserInfoInputChange}
                    required={true}
                    showError={errors.firstName}
                  />
                </div>
                <div className="col-6">
                  <TextInput
                    placeHolder="Enter Last Name"
                    label="Last Name"
                    backgroundColor="white"
                    labelColor="white"
                    name="lastName"
                    onChange={handleUserInfoInputChange}
                    required={true}
                    showError={errors.lastName}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <TextInput
                    placeHolder="Enter Email"
                    label="Email"
                    backgroundColor="white"
                    labelColor="white"
                    name="email"
                    onChange={handleUserInfoInputChange}
                    required={true}
                    showError={errors.email}
                  />
                </div>
                <div className="col-6">
                  <TextInput
                    placeHolder="Enter Phone Number"
                    label="Phone Number"
                    backgroundColor="white"
                    labelColor="white"
                    name="phoneNumber"
                     InputType="number"
                    onChange={handleUserInfoInputChange}
                    required={true}
                    showError={errors.phoneNumber}
                  />
                </div>
              </div>
              {!addEvent && (
                <div className="row mt-3">
                  <div className="col-12">
                    <Button btnTitle={"Add Event"} onClick={handleAddEvent} />
                  </div>
                </div>
              )}
              {addEvent && (
                <>
                  <div className="row">
                    <div className="col-6">
                      <TextInput
                        placeHolder="Enter Event Name"
                        label="Event Name"
                        backgroundColor="white"
                        labelColor="white"
                        name="eventName"
                        onChange={handleEventInputChange}
                        value={eventInfo.eventName}
                        required={true}
                        showError={eventsErrors.eventName}
                      />
                    </div>
                    <div className="col-6">
                      <TextInput
                        placeHolder="Enter Number of Attendees"
                        label="Number of Attendees"
                        backgroundColor="white"
                        labelColor="white"
                        InputType="number"
                        name="numberOfAttendees"
                        onChange={handleEventInputChange}
                        value={eventInfo.numberOfAttendees}
                        required={true}
                        showError={eventsErrors.numberOfAttendees}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <TextInput
                        placeHolder="Event Start"
                        label="Event Start at"
                        backgroundColor="white"
                        labelColor="white"
                        InputType="datetime-local"
                        name="eventStart"
                        onChange={handleEventInputChange}
                        value={eventInfo.eventStart}
                        required={true}
                        showError={eventsErrors.eventStart}
                        minDate={date}
                      />
                    </div>
                    <div className="col-6">
                      <TextInput
                        placeHolder="Event End at"
                        label="Event End at"
                        backgroundColor="white"
                        labelColor="white"
                        InputType="datetime-local"
                        name="eventEnd"
                        onChange={handleEventInputChange}
                        value={eventInfo.eventEnd}
                        required={true}
                        showError={eventsErrors.eventEnd}
                        minDate={date}
                      />
                    </div>
                  </div>
                  <div>
                    <h6 className="mt-3 mb-1 poppins-bold text-white">
                      Services Needed
                    </h6>
                  </div>
                  <div className="d-flex flex-wrap">
                    {servicesNeeded.map((service, index) => (
                      <div className="col-4 mt-2" key={index}>
                        <Checkbox
                          name="services"
                          label={service.name}
                          checked={eventInfo.services.includes(service.name)}
                          onChange={(isChecked) =>
                            handleCheckboxChange(service.name, isChecked)
                          }
                        />
                      </div>
                    ))}
                  </div>
                  {servicesErrorMessage && <span style={{ color: 'red',fontSize:12, fontFamily:'poppins-regular' }}>{servicesErrorMessage}</span>}
                  <div className="mt-3">
                    <TextArea
                      label="Special Instructions"
                      backgroundColor="white"
                      labelColor="white"
                      name="specialInstructions"
                      onChange={handleEventInputChange}
                      value={eventInfo.specialInstructions}
                      required={true}
                      showError={eventsErrors.specialInstructions}
                    />
                  </div>
                  <div className="container-fluied mt-3">
                    {events.length > 0 && (
                      <>
                        <h6 className="mb-1 poppins-bold text-white">
                          List Of Events
                        </h6>
                        <div className="table-responsive">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th>Event Name</th>
                                <th>Number of Attendees</th>
                                <th>Event Start</th>
                                <th>Event End</th>
                                <th>Special Instructions</th>
                                <th>Services</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {events.map((event, index) => (
                                <tr key={index}>
                                  <td>{event.eventName}</td>
                                  <td>{event.numberOfAttendees}</td>
                                  <td>
                                    {new Date(
                                      event.eventStart
                                    ).toLocaleDateString("en-US", {
                                      day: "numeric",
                                      month: "long",
                                      year: "numeric",
                                    })}
                                  </td>
                                  <td>
                                    {new Date(
                                      event.eventEnd
                                    ).toLocaleDateString("en-US", {
                                      day: "numeric",
                                      month: "long",
                                      year: "numeric",
                                    })}
                                  </td>
                                  <td>{event.specialInstructions}</td>
                                  <td>{event.services.join(", ")}</td>
                                  <td className="d-flex" style={{ gap: 5 }}>
                                    <button
                                      className="btn btn-sm btn-primary mr-2"
                                      onClick={() => handleEditEvent(index)}
                                    >
                                      <i className="fa fa-pencil"></i>
                                    </button>
                                    <button
                                      className="btn btn-sm btn-danger"
                                      onClick={() => handleDeleteEvent(index)}
                                    >
                                      <i className="fa fa-trash"></i>
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="row mt-3">
                    <div className="col-6">
                      <Button
                        btnTitle={
                          editEvent
                            ? "Save Event"
                            : eventInfo.eventName
                            ? "Add Event"
                            : "Add More Event"
                        }
                        onClick={
                          editEvent ? handleSaveEvent : handleAddMoreEvent
                        }
                      />
                    </div>
                    <div className="col-6">
                      <Link to="">
                        <Button btnTitle={"Proceed"} />
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Events;
