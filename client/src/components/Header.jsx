import ChatGenie from '../assets';
import { navbarContent } from '../constants';
import { useLocation } from 'react-router-dom'
import Button from './Button';

const Header = () => {

    const pathName = useLocation();

  return (
    <>
    <div className='fixed top-0 left-0 w-full z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm'>
        <div className='flex items-center px-5 lg:px-7.5 xl:px-10 mx-lg:py-4'>
            <a className='block w-[12rem] xl:mr-8' href='#hero'>
                <img src={ChatGenie} alt='ChatGenie' width={190} height={40}/>
            </a>

            <nav className='hidden fixed top-[5rem] bottom-0 left-0 right-0 bg-n-8 lg:static lg:flex lg:mx-auto bg-transparent'>
                <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                    {navbarContent.map((item) => (
                    <a key={item}
                    href={item.url}
                    className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 
                    ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold
                    ${item.url === pathName.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"}`}
                    >
                        {item.title}
                    </a>
                ))}
                </div>
            </nav>

            <a href="#signUp"
            className='button hidden mr-8 text-n-1/50 transition-colors hover:text-color-1 lg:block'
            >
            New account
            </a>

            <Button className='hidden lg:flex' href="#login">
                Sign in
            </Button>
        </div>
    </div>
    </>
  )
}

export default Header;