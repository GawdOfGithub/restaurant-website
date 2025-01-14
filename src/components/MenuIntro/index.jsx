import Image from 'next/image';
import cn from 'classnames';
import SubHeading from 'components/SubHeading';

import images from 'constants/images';
import chooseByType from 'utils/chooseValueByType';

import styles from './styles.module.scss';

const MenuIntro = ({ info, slug }) => {
  const chooseMenuItem = chooseByType(info[0]?.metadata?.menu,`${slug}` ) || chooseByType(info[1]?.metadata?.menu,`${slug}` );

  return (
    <div className={cn(styles.intro_container, 'app_bg', 'section_padding')} id='menu-intro'>
      <div className={cn('app_container', 'app_wrapper')}>
        <div className={cn('app_wrapper_img','app_wrapper_img_reverse')}>
          <div className={cn(styles.wrapper_img, 'img_padding')} >
            <Image
             src="/lemon.avif"
              alt='intro_image'
              objectFit='cover'
              width={450}
              height={500}
              />
          </div>
        </div>
        <div className={cn(styles.wrapper_content,'app_wrapper_info')}>
          <SubHeading title='Try it!' />
          <h1 className='headtext_cormorant'>Insert some data1</h1>
          <div className={styles.intro_content}>
            <div>
              <p className={styles.intro_tag}>Insert some data here</p>
              <p className='opensans'>data3</p>
            </div>
            <div className={styles.intro_content_quote}>
              <p className='opensans'>data4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuIntro;