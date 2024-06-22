import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import SubHeading from 'components/SubHeading';
import Button from 'components/Button';

import styles from './styles.module.scss';
const data =[ {
  title: 'Item1',
  price: 100,
  picture:"/land.avif",
  slug:"Item1"
},
{
  title: 'Item1',
  price: 100,
  picture:"/land.avif",
  slug:"Item1"
},
{
  title: 'Item1',
  price: 100,
  picture:"/land.avif",
  slug:"Item1"
},

]


const Gallery = ({info}) => {
  const scrollRef = useRef( null );
  
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className={cn(styles.gallery_container, 'flex_center')} id='gallery'>
      <div className={styles.gallery_content}>
        <SubHeading title="Menu Gallery" />
        <h1 className='headtext_cormorant'>Chose Your Favorite Dish</h1>
        <p className={cn(styles.gallery_content_intro, 'opensans')}></p>
        <Button name='View More' path='#menu' />
      </div>
      <div className={styles.gallery_images}>
        <div className={styles.gallery_images_container} ref={scrollRef}>
          {data.map(({title, slug, price, picture}, index ) => (
            <Link key={index} href={info ? `/menu/${slug}?#menu-intro` : '/#gallery'} passHref>
              <a>
                <div className={cn(styles.gallery_images_card, 'flex_center' )} key={index}>
                  <Image src={picture} layout='fill' objectFit='cover' alt='gallery_image' />
                  <div className={styles.gallery_image_icon}>
                    <BsInstagram />
                    <h3>{title}</h3>
                    <h4>{price}</h4>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <div className={styles.gallery_images_arrows}>
          <BsArrowLeftShort className={styles.gallery_arrow_icon} onClick={() => scroll('left')} />
          <BsArrowRightShort className={styles.gallery_arrow_icon} onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;