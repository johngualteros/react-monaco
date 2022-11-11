import Editor from '@monaco-editor/react';
import {useState, useRef} from 'react';

export default function App() {
  const [code, setCode] = useState('');
  const editorRef = useRef(null);

  const changeStateCode = (value) => {
    setCode(value);
    console.log(code);
  }

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  }

  const handleSave = () => {
    alert(editorRef.current.getValue());
  }
  return (
    <>
    <button onClick={handleSave}>Save</button>
    <Editor
      height="100vh"
      defaultLanguage="typescript"
      defaultValue="// some comment"
      theme='vs-dark'
      value={code}
      onChange={changeStateCode}
      onMount={handleEditorDidMount}
      />
    </>
  )
}
