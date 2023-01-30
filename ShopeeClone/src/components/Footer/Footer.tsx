import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-neutral-100 py-16'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
          <div className='lg-col-span-1'>
            <div>@ 2022 Shopee. Tất cả các quyền được bảo lưu</div>
          </div>
          <div className='lg-col-span-2'>
            <div>
              Quốc gia & khu vực: Singapore Indonesia Đài Loan Thái Lan Malaysia Việt Nam Philippines Brazil Mexico
              Colombia Balan
            </div>
          </div>
        </div>
        <div className='mt-10 text-center text-sm'>
          <div>Công ty TNHH Shopee</div>
          <div className='mt-2'> Địa chỉ: 180/5b đường Bùi Văn Ba, phường Tân Thuận Đông, quận 7, TP. Hồ Chí Minh</div>
          <div className='mt-2'>Chịu trách nhiệm Quản Lý Nội Dung: Nguyễn Quốc Trí - Điện thoại liên hệ 0914111474</div>
          <div className='mt-2'>
            Mã số doanh nghiệp 230912381238 do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015
          </div>
          <div className='mt-2'>@2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
        </div>
      </div>
    </footer>
  )
}
