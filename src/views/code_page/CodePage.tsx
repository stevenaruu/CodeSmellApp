import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { smellData } from "../../utils/smell";
import Header from '../../components/header/Header';
import { CopyBlock, dracula } from 'react-code-blocks';
import SnippetCode from '../../components/snippet_code/SnippetCode';

const CodePage = () => {
  const navigate = useNavigate();
  const { type, name } = useParams();

  const smells = smellData.find(smell => smell.type === name);
  const smell = smells?.smell.find(smell => smell.type === type);

  useEffect(() => {
    if (type == null && name == null) navigate('/');
    window.scrollTo(0, 0);
    document.title = smell?.name || '';
  }, [])

  return (
    <>
      <Header
        name={smell?.name || ''}
        description={smell?.description || ''}
        wallpaper='bg-code'
        isNavbar={false}
      />
      <div className="container mx-auto mt-10">
        <SnippetCode
          text='Code Before'
          codes={smell?.codeBefore}
        />
        <SnippetCode
          text='Code After'
          codes={smell?.codeAfter}
        />
      </div>
    </>
  )
}

export default CodePage