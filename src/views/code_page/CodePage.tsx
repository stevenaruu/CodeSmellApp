import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { smellData } from "../../utils/smell";
import Header from '../../components/header/Header';
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
      <div className="container mx-auto mt-10 mb-10">
        <SnippetCode
          text='Code Before'
          codes={smell?.codeBefore}
        />
        <SnippetCode
          text='Code After'
          codes={smell?.codeAfter}
        />
        <div className='p-4 bg-gray-200 rounded-md text-justify'>
          <p className="text-4xl font-bold mb-4">Explanation</p>
          {smell?.explanation}
        </div>
      </div>
    </>
  )
}

export default CodePage