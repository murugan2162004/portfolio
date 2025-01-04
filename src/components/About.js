import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'Hi, My name is MURUGAN. I am a python Full stack developer. I built beautiful Websites with React.js , Tailwind CSS + Bootstrap',
        line2: 'Python developer skilled in Core Python, SQL, and web development with expertise in HTML, CSS, JavaScript, and Bootstrap. Experienced in building dynamic and responsive web applications.',
        line3: ' Completed projects include an portfolio website, e-commerce website, and password generator. Eager to contribute to innovative full-stack development projects.',

    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}