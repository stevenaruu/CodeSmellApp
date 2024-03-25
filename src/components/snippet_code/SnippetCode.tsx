import React from 'react'
import { ISnippetCode } from './SnippetCode.interfaces'
import { CopyBlock, dracula } from 'react-code-blocks'

const SnippetCode = (props: ISnippetCode) => {
  const { text, codes } = props
  return (
    <div className='mb-10'>
      <p className="text-4xl font-bold text-sky-500">{text}</p>
      {codes?.map((code) => (
        <div key={code.id} className='mt-5'>
          <p className='bg-gray-200 w-fit px-2 py-1 mb-2 font-bold text-lg rounded-sm'>{code.class}.java</p>
          <CopyBlock
            language="java"
            text={code.code}
            showLineNumbers
            theme={dracula}
            wrapLongLines={true}
          />
        </div>
      ))}
    </div>
  )
}

export default SnippetCode