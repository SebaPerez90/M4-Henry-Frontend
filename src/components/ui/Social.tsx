import { GrFacebookOption } from 'react-icons/gr';
import { GrInstagram } from 'react-icons/gr';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

const SocialNetworks = () => {
  return (
    <ul className='relative flex gap-8 z-20 pr-10 '>
      <li>
        <Link
          aria-label='social-network'
          href=''
          className='relative text-xl duration-300 hover:text-slate-50 after:absolute after:left-[-0.55em] after:top-[-0.5em] after:p-[1em] after:w-[120%] after:h-[100%] after:bg-transparent after:rounded-[30px] after:duration-300 after:-z-10 hover:after:bg-[#3f7fffbf] hover:after:duration-300'
          target='_blank'>
          <GrFacebookOption />
        </Link>
      </li>
      <li>
        <Link
          aria-label='social-network'
          href=''
          className='text-xl relative duration-300 hover:text-slate-50 after:absolute after:left-[-0.55em] after:top-[-0.5em] after:p-[1em] after:w-[120%] after:h-[100%] after:bg-transparent after:rounded-[30px] after:duration-300 after:-z-10 hover:after:bg-[#db48ada9] hover:after:duration-300'
          target='_blank'>
          <GrInstagram />
        </Link>
      </li>
      <li>
        <Link
          aria-label='social-network'
          href=''
          className='relative text-xl duration-300 hover:text-slate-50 after:absolute after:left-[-0.55em] after:top-[-0.5em] after:p-[1em] after:w-[120%] after:h-[100%] after:bg-transparent after:rounded-[30px] after:duration-300 after:-z-10 hover:after:bg-[#f72626ae] hover:after:duration-300'
          target='_blank'>
          <MdOutlineEmail />
        </Link>
      </li>
      <li>
        <Link
          aria-label='social-network'
          href=''
          className='relative text-xl duration-300 hover:text-slate-50 after:absolute after:left-[-0.55em] after:top-[-0.5em] after:p-[1em] after:w-[120%] after:h-[100%] after:bg-transparent after:rounded-[30px] after:duration-300 after:-z-10 hover:after:bg-[#42aa43b7] hover:after:duration-300'
          target='_blank'>
          <BsWhatsapp />
        </Link>
      </li>
      <li>
        <Link
          aria-label='social-network'
          href=''
          className='relative text-xl duration-300 hover:text-slate-50 after:absolute after:left-[-0.55em] after:top-[-0.5em] after:p-[1em] after:w-[120%] after:h-[100%] after:bg-transparent after:rounded-[30px] after:duration-300 after:-z-10 hover:after:bg-[#000] hover:after:duration-300'
          target='_blank'>
          <FaXTwitter />
        </Link>
      </li>
    </ul>
  );
};

export default SocialNetworks;
