import React from 'react'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'

export default function Product() {
  return (
    <Link to={path.home}>
      <div className='hover:shaddow-md rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.0625rem]'>
        <div className='relative w-full pt-[100%]'>
          <img
            alt='Khuyên Tai Thép Không Gỉ Không Bấm Lỗ Cho Nam Khuyên Tai Nam Không Cần Bấm Lỗ'
            className='absolute top-0 left-0 h-full w-full bg-white object-cover'
            src='https://cf.shopee.vn/file/sg-11134201-22120-sg9ilxi1mzkv9d_tn'
          />
        </div>
        <div className='overfollow-hiden p-2'>
          <div className='min-h-[1.75rem] text-xs line-clamp-2'>
            Khuyên Tai Thép Không Gỉ Không Bấm Lỗ Cho Nam Khuyên Tai Nam Không Cần Bấm Lỗ
          </div>
          <div className='mt-3 flex items-center'>
            <div className='max-w-[50%] truncate text-gray-500 line-through'>
              <span className='text-xs'>đ</span>
              <span>5.000</span>
            </div>
            <div className='ml-1 truncate text-orange'>
              <span className='text-xs'>đ</span>
              <span>2.000</span>
            </div>
          </div>
          <div className='mt-3 flex items-center justify-end'>
            <div className='flex items-center'>
              <div className='relative'>
                <div className='absolute top-0 left-0 h-full overflow-hidden' style={{ width: '50%' }}>
                  <svg
                    enableBackground='new 0 0 15 15'
                    viewBox='0 0 15 15'
                    x={0}
                    y={0}
                    className='h-3 w-3 fill-yellow-300 text-yellow-300'
                  >
                    <polygon
                      points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeMiterlimit={10}
                    />
                  </svg>
                </div>
                <svg
                  enableBackground='new 0 0 15 15'
                  viewBox='0 0 15 15'
                  x={0}
                  y={0}
                  className='h-3 w-3 fill-current text-gray-300 '
                >
                  <polygon
                    points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeMiterlimit={10}
                  />
                </svg>
              </div>
            </div>
            <div className='ml-2 text-sm'>
              <span>5.66k</span>
              <span className='ml-1'>Đã bán</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
