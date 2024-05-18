import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto py-8 overflow-scroll h-[70vh] w-full"  style={{backgroundImage:`url("https://img.freepik.com/premium-photo/business-meeting_53876-91042.jpg")`, backgroundRepeat:`no-repeat`,backgroundSize: `100% `}}>
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">Welcome to our Electronics Projects website, your one-stop destination for exploring,
            learning, and creating within the fascinating realm of electronics. Whether you're an enthusiastic hobbyist,
            a seasoned DIYer, or a curious beginner, our platform is designed to inspire, educate, and empower
            individuals at every skill level.</p>

        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
        <p className="text-lg mb-4">At Electronics Projects, our mission is to demystify the world of electronics and make
            it accessible to everyone. We believe that understanding electronics fosters creativity, problem-solving
            skills, and a deeper appreciation for the technology that shapes our world. Through our comprehensive
            resources, tutorials, and community engagement, we aim to ignite a passion for electronics and empower
            individuals to turn their ideas into reality.</p>

        <h2 className="text-2xl font-bold mb-2">What We Offer</h2>
        <ul className="list-disc pl-6 mb-4">
            <li>Inspiring Projects</li>
            <li>Educational Resources</li>
            <li>Community Engagement</li>
            <li>Expert Guidance</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">Why Choose Us</h2>
        <ul className="list-disc pl-6 mb-4">
            <li>Comprehensive Learning</li>
            <li>Quality Content</li>
            <li>Interactive Community</li>
            <li>Empowerment Through Technology</li>
        </ul>

        <p className="text-lg">Ready to embark on your electronics journey? Join us at Electronics Projects and start
            exploring the exciting world of electronics today. Whether you're interested in building robots, designing
            circuits, or experimenting with new technologies, we're here to help you turn your ideas into reality.
            Let's create, innovate, and inspire together!</p>
    </div>
  )
}

export default About
