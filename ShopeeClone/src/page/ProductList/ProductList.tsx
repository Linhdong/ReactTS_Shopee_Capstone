import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import productApi from 'src/apis/product.api'
import Paginate from 'src/components/Paginate'
import useQueryParams from 'src/hooks/useQueryParams'
import { ProductListConfig } from 'src/types/product.type'
import AsileFilter from './component/AsideFilter'
import Product from './component/Product/Product'
import SortProductList from './component/SortProductList'
import { omitBy, isUndefined } from 'lodash'
import categoryApi from 'src/apis/category.api'
import useQueryConfig, { QueryConfig } from 'src/hooks/QueryConfig'

export default function ProductList() {
  const [page, setPage] = useState(1)
  const queryParams: QueryConfig = useQueryParams()

  const queryConfig = useQueryConfig()

  const { data: productData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productApi.getProducts(queryConfig as ProductListConfig)
    },
    keepPreviousData: true
  })

  const { data: categoriesData } = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return categoryApi.getCategoies()
    }
  })

  return (
    <div className='bg-gray-200 py-6'>
      <div className='container'>
        {productData && (
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-3'>
              <AsileFilter categories={categoriesData?.data.data || []} queryConfig={queryConfig} />
            </div>
            <div className='col-span-9'>
              <SortProductList queryConfig={queryConfig} pageSize={productData.data.data.pagination.page_size} />
              <div className='mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {productData &&
                  productData.data.data.products.map((product, _) => (
                    <div className='col-span-1' key={product._id}>
                      <Product product={product} />
                    </div>
                  ))}
              </div>
              <Paginate queryConfig={queryConfig} pageSize={productData.data.data.pagination.page_size} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
