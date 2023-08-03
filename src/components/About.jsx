import '../style/componentStyles/about.scss'


import AboutMeImg from '../images/about-me-image.jpg'


const About = () => {

    return (
        <>
            <section id="about" className='about'>
                <div className="container">
                    <div className="about-content">
                        <div className="about-image">
                            <div className="about-me-img-wrapper">
                                <img src={AboutMeImg} alt="laptop stock" />
                            </div>
                        </div>
                        <div className="about-text">
                            <h2>ABOUT ME</h2>
                            <h1>A Passionate Web and Desktop Developer based in Piestany, Slovakia.📍</h1>
                            <p>Hello! 👋 I'm Rene Krizak, a versatile developer with a passion for both Web and Desktop applications.
                                 My expertise lies in web development using C#, React, Next.js, and SCSS, where I create visually appealing and user-friendly experiences.
                                 Whether it's crafting a sleek single-page web application or building a powerful desktop app with C# and WPF, I'm dedicated to delivering high-quality solutions.
                                 Let's collaborate and bring your projects to life!
                                 Feel free to reach out, and let's make something amazing.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;

