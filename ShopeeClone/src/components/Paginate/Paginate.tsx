import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  pageSize: number
}

const range = 2

export default function Paginate({ page, setPage, pageSize }: Props) {
  const renderPagination = () => {
    let dotAfter = false
    let dotBefore = false
    const renderdotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true
        return (
          <button className='mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm' key={index}>
            ...
          </button>
        )
      }
      return null
    }
    const renderdotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true
        return (
          <button className='mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm' key={index}>
            ...
          </button>
        )
      }
      return null
    }
    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1
        if (page <= range * 2 + 1 && pageNumber > page + range && pageNumber < pageSize - range + 1) {
          return renderdotAfter(index)
        } else if (page > range * 2 + 1 && page < pageSize - range * 2) {
          if (pageNumber < page - range && pageNumber > range) {
            return renderdotBefore(index)
          } else if (pageNumber > page + range && pageNumber < pageSize - range + 1) {
            return renderdotAfter(index)
          }
        } else if (page >= pageSize - range * 2 && pageNumber > range && pageNumber < page - range) {
          return renderdotBefore(index)
        }
        return (
          <button
            className={classNames('mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm', {
              'border-cyan-500': pageNumber === page,
              'border-transparent': pageNumber !== page
            })}
            onClick={() => setPage(pageNumber)}
            key={index}
          >
            {pageNumber}
          </button>
        )
      })
  }
  return (
    <div className='mt-6 flex flex-wrap justify-center'>
      {/* <Link></Link> */}
      <button className='mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm'>Previous</button>
      {renderPagination()}
      <button className='mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm'>Next</button>
    </div>
  )
}
