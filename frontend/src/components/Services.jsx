const services = [
    {
        name: "Exterior Car Wash",
        price: "$30",
        duration: "30 min",
        description: "Hand wash with soap and spotless water, wheel scrub, tire dressing, and window wipe-down.",
        appointmentId: "84790253",
    },
    {
        name: "Interior Car Wash",
        price: "$30",
        duration: "30 min",
        description: "Full vacuum and wipe-down of interior surfaces, with products matched to your interior material.",
        appointmentId: "84790257",
    },
    {
        name: "Interior/Exterior Wash",
        price: "$60",
        duration: "1 hr",
        description: "The complete wash: full interior clean plus exterior hand wash, wheels, tires, and windows.",
        appointmentId: "84790167",
    },
    {
        name: "Steam Cleaning",
        price: "$125",
        duration: "2 hrs",
        description: "Deep interior vacuum and dry vapor steam sanitization, leather/vinyl conditioning, light stain removal, and streak-free glass.",
        appointmentId: "87299634",
    },
    {
        name: "Full Exterior Detail",
        price: "$135",
        duration: "1.5 hrs",
        description: "Hand wash, clay bar paint decontamination, premium wax, wheel deep clean, and tire shine.",
        appointmentId: "84790235",
    },
    {
        name: "Interior Detail",
        price: "$150",
        duration: "2 hrs",
        description: "Thorough interior detail: AC vents, every nook and cranny, interior and trunk vacuum, door jambs, and leather care.",
        appointmentId: "84790202",
    },
    {
        name: "Premium Interior/Exterior Detail",
        price: "$275",
        duration: "2.5 hrs",
        description: "Our full detail inside and out: steam cleaning, leather care, hand wash, clay bar, wax, and a single-stage buff.",
        appointmentId: "84790247",
    },
    {
        name: "Ceramic Coating",
        price: "$700",
        duration: "5.5 hrs",
        description: "Paint decontamination, color correction, multi-step polishing, and a ceramic coating with 3 to 10 years of protection.",
        appointmentId: "84790274",
    },
]

function ServiceCard({ service, onBook }) {
    return (
        <div className="card">
            <h3>{service.name}</h3>
            <p className="price">
                Starting at {service.price} · {service.duration}
            </p>
            <p>{service.description}</p>
            <button className="book-btn" onClick={() => onBook(service)}>
                Book Now
            </button>
        </div>
    )
}

function Services({ onBook }) {
    return (
        <section id="services">
            <h2>Our Services</h2>
            <p className="note">Pricing varies by vehicle make and model</p>

            <div className="grid">
                {services.map((service) => (
                    <ServiceCard key={service.name} service={service} onBook={onBook} />
                ))}
            </div>
        </section>
    )
}

export default Services