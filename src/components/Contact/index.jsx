import Image from 'next/image';
import cn from 'classnames';

import SubHeading from 'components/SubHeading';
import SocialMedia from 'components/Contact/SocialMedia';

import styles from './styles.module.scss';

const Contacts = ({ info }) => (
  <div className={cn('app_bg', 'app_wrapper', 'section_padding')} id='contact'>
    <div className={cn('app_container', 'app_wrapper')}>
      <div className={cn(styles.contact_info, 'app_wrapper_info')}>
        <SubHeading title="Contact Us" />
        <h1 className='headtext_cormorant'>{info?.metadata?.title}</h1>
        <div className="Address">
          <p className='opensans'>{info?.metadata?.intro}</p>
          <div className='app_wrapper_content'>
            <p className='opensans'>"Address"</p>
          </div>
          <p className={cn(styles.contact_hours,'cormorant')}>"Address"</p>
          <p className={cn(styles.contact_title,'opensans')}>"Address"</p>
        </div>
        <h1 className={cn(styles.follow_title,'headtext_cormorant' )}>"Address"</h1>
        <div className={styles.contact_social}>
          <SocialMedia />
        </div>
      </div>
      <div className='app_wrapper_img'>
        <div className={cn(styles.wrapper_img, 'img_padding')} >
          <Image
          src="/land.avif"
            alt='find_us_img'
            objectFit='contain'
            width={500}
            height={550} />
        </div>
      </div>
    </div>
  </div>
);

export default Contacts;