import { NavLink, Outlet } from 'react-router-dom';
import relogo from '../../public/assets/react.svg';


function RootLayout() {
    return (
        <div className='root-layout'>
            <header className='resize'>
                <nav className='flex flex-row flex-col justify-center sm:flex-row text-red-800  sm:items-center '>
                    <span className='flex items-center justify-center gap-10 flex-col sm:flex-row p4'>
                        <img className='w-8 font-extrabold rounded-full animate-spin' src={relogo} alt='logo' />
                        <NavLink className='hover:text-green-600' to='/'>Home</NavLink>
                        <NavLink className='hover:text-green-600' to='Projects'>Projects</NavLink>
                        <NavLink className='hover:text-green-600' to='Skills'>Skills</NavLink>
                        <NavLink className='hover:text-green-600' to='Certificates'>Certificates</NavLink>
                        <img className='w-8 font-extrabold rounded-full animate-spin' src={relogo} alt='logo' />
                    </span>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout;
