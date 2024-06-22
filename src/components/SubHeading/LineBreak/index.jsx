import Image from 'next/image';

import images from 'constants/images';

const LineBreak = () => {
  return (
    <div className='spoon_img'>
      <Image src="/" alt="spoon_image" layout='fill' />
    </div>
  )
}

export default LineBreak;