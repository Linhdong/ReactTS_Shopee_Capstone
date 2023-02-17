import React from 'react'
import { Link } from 'react-router-dom'
import ProductRating from 'src/components/ProductRating'
import path from 'src/constants/path'
import { Product as ProductType } from 'src/types/product.type'
import { formatCurrency, formatNUmberToSocialStyle } from 'src/utils/utils'

interface Props {
  product: ProductType
}

export default function Product({ product }: Props) {
  return (
    <Link to={path.home}>
      <div className='hover:shaddow-md rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.0625rem]'>
        <div className='relative w-full pt-[100%]'>
          <img
            alt={product.name}
            className='absolute top-0 left-0 h-full w-full bg-white object-cover'
            src={product.image}
          />
        </div>
        <div className='overfollow-hiden p-2'>
          <div className='min-h-[1.75rem] text-xs line-clamp-2'>{product.name}</div>
          <div className='mt-3 flex items-center'>
            <div className='max-w-[50%] truncate text-gray-500 line-through'>
              <span className='text-sm'>đ</span>
              <span className='text-sm'>{formatCurrency(product.price_before_discount)}</span>
            </div>
            <div className='ml-1 truncate text-orange'>
              <span className='text-xs'>đ</span>
              <span className='text-sm'>{formatCurrency(product.price)}</span>
            </div>
          </div>
          <div className='mt-3 flex items-center justify-end'>
            <ProductRating rating={product.rating} />
            <div className='ml-2 text-sm'>
              <span className='ml-1'>Đã bán </span>
              <span>{formatNUmberToSocialStyle(product.sold)}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
