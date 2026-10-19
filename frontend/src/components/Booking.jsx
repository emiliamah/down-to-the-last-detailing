const ACUITY_ACCOUNT = "f247931e"
const ACUITY_CALENDAR = "12919855"

function Booking({ service, onBack }) {
    const bookingUrl = `https://app.acuityscheduling.com/schedule/${ACUITY_ACCOUNT}/appointment/${service.appointmentId}/calendar/${ACUITY_CALENDAR}`

    return (
        <main className="booking-page">
            <div className="booking-container">
                <button className="booking-back" onClick={onBack}>
                    ← Back to Services
                </button>

                <div className="booking-heading">
                    <span className="booking-eyebrow">DOWN TO THE LAST DETAILING</span>
                    <h1>Book Your Appointment</h1>
                    <p>Choose a convenient date and time for your detailing service.</p>
                </div>

                <div className="booking-summary">
                    <div>
                        <span className="booking-label">SELECTED SERVICE</span>
                        <h2>{service.name}</h2>
                        <p>{service.duration}</p>
                    </div>

                    <div className="booking-summary-price">
                        <span>Starting at</span>
                        <strong>{service.price}</strong>
                    </div>
                </div>

                <div className="booking-calendar">
                    <div className="booking-calendar-heading">
                        <h2>Select Your Date & Time</h2>
                        <p>Available appointments are shown below.</p>
                    </div>

                    <iframe
                        key={service.appointmentId}
                        src={bookingUrl}
                        title={`Schedule ${service.name}`}
                        className="booking-iframe"
                    />

                    <a
                        href={bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="booking-help"
                    >
                        Having trouble? Open scheduling in a new tab ↗
                    </a>
                </div>
            </div>
        </main>
    )
}

export default Booking