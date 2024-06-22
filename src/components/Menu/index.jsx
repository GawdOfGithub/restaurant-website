import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import SubHeading from 'components/SubHeading';
import MenuItem from 'components/Menu/Menuitem';
import Button from 'components/Button';

import chooseByType from 'utils/chooseValueByType';

import styles from './styles.module.scss';

const SpacialMenu = ({ info }) => {
  const menu =[
    {
      title:"Item1",
      price: 100,
      tags: ['veg', 'non-veg'],
      slug:"Item1"
    },
    {
      title:"Item2",
      price: 200,
      tags: ['desert'],
      slug:"Item2"
    },
  ]

  return (
    <div className={cn(styles.special, 'flex_center', 'section_padding')} id='menu'>
      <div className={styles.special_title}>
        <SubHeading title="Menu that fits your pallette "/>
        <h1 className='headtext_cormorant'>Today's Special</h1>
      </div>
      <div className={styles.special_menu}>
      <div className={cn(styles.special_menu_wine,  'flex_center')}>
          <p className={styles.special_menu_heading}>Some heading</p>
          <div className={styles.special_menu_items}>
          {menu?.map(({title,slug, price, tags}) => (
            <div className={styles.menu_item_wrapper} key={slug}>
              <Link href={info ? `/menu/${slug}?#menu-intro` : '/#menu'} passHref>
                <a>
                  <MenuItem title={title} price={price} tags={tags} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.special_menu_img}>
        <Image src="/lemon.avif" objectFit='contain' layout='fill' alt='menu_img' />
      </div>
       <div className={cn(styles.special_menu_cocktails,  'flex_center')}>
        <p className={styles.special_menu_heading}>This is our beloved menu</p>
        <div className={styles.special_menu_items}>
          {menu?.map(({title, price, tags}) => (
            <div key={menu.title}>
             
                <a>
                  <MenuItem title={title} price={price} tags={tags} />
                </a>

            </div>
          ))}
        </div>
      </div>
    </div>
    <Button name='View More' path='#gallery' />
  </div>
  )
}

export default SpacialMenu;