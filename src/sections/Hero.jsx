import { wordss } from '../constants';
import Button from '../components/Button';

const Hero = () => {
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className='hero-layout'>
                {/*:LEFT: hero-layout */}

                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                    <div className='flex flex-col gap-7'>
                        <div className='hero-text'>
                            <h1>
                                Shaping
                                <span className="slide ">
                                    <span className="wrapper">
                                        {wordss.map((word) => (
                                            <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                                />
                                                <span>
                                                    {word.text}
                                                </span>
                                            </span>

                                        ))}
                                    </span>
                                </span>
                            </h1>

                            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                                Hi, I’m Chetan Biranje, a Cybersecurity Researcher and Application Security Engineer specializing in offensive
                                security, vulnerability assessment, and DevSecOps. I focus on identifying real-world vulnerabilities across
                                web, API, and cloud environments, including issues like IDOR, SSRF, authentication flaws, and business logic
                                vulnerabilities.

                                I actively participate in bug bounty programs on platforms like HackerOne, Bugcrowd, and Intigriti, and I
                                build secure systems using modern DevSecOps practices such as CI/CD security pipelines, SAST, DAST, and
                                infrastructure hardening. My goal is to break systems to understand them better — and then help secure
                                them effectively.
                            </p>
                            <Button
                                className="md:w-80 md:h-16 w-60 h-12"
                                id="button"
                                text="See my Work"
                            />
                        </div>

                    </div>

                </header>

                {/*:RIGHT: 3D MODEL */}
            </div>
        </section>
    )
}

export default Hero