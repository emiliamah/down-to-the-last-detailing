function ServiceCard({ name, price, duration, description }) {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p className="price">{price} · {duration}</p>
            <p>{description}</p>
        </div>
    )
}

function Services() {
    return (
        <section id="services">
            <h2>Our Services</h2>
            <p className="note">Pricing varies by vehicle make and model</p>
            <div className="grid">
                <ServiceCard
                    name="Exterior Car Wash"
                    price="$30"
                    duration="30 min"
                    description="Hand wash with soap and spotless water, wheel scrub, tire dressing, and window wipe-down."
                />
                <ServiceCard
                    name="Interior Car Wash"
                    price="$30"
                    duration="30 min"
                    description="Full vacuum and wipe-down of the interior surfaces."
                />
                <ServiceCard
                    name="Interior/Exterior Wash"
                    price="$60"
                    duration="1 hr"
                    description="The complete package: full interior clean plus exterior hand wash."
                />
                <ServiceCard
                    name="Steam Cleaning"
                    price="$125"
                    duration="2 hrs"
                    description="Deep interior vacuuming and advanced sanitization using steam."
                />
                <ServiceCard
                    name="Interior Detail"
                    price="$150"
                    duration="2 hrs"
                    description="Thorough interior detail including AC vents and deep cleaning."
                />
                <ServiceCard
                    name="Full Exterior Detail"
                    price="Ask for quote"
                    duration="2+ hrs"
                    description="Complete exterior restoration for that fresh-off-the-lot shine."
                />
            </div>
        </section>
    )
}

export default Services