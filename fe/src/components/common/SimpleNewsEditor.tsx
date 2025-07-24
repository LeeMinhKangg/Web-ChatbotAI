import React, { useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface SimpleNewsEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  height?: number;
  className?: string;
}

const SimpleNewsEditor: React.FC<SimpleNewsEditorProps> = ({
  value = '',
  onChange,
  placeholder = 'Nhập nội dung...',
  height = 300,
  className = '',
}) => {
  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }],
        ['link', 'image'],
        ['clean'],
      ],
      clipboard: {
        matchVisual: false,
      },
    }),
    []
  );

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  const handleChange = (content: string) => {
    // Clean up any potential encoding issues
    const cleanedContent = content
      .replace(/&amp;lt;/g, '<')
      .replace(/&amp;gt;/g, '>')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
    
    onChange?.(cleanedContent);
  };

  return (
    <div className={`simple-news-editor ${className}`}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        modules={modules}
        formats={formats}
        style={{
          height: `${height}px`,
          marginBottom: '42px', // Space for toolbar
        }}
      />
      
      <style jsx>{`
        .simple-news-editor .ql-editor {
          min-height: ${height - 42}px;
          font-family: inherit;
          font-size: 14px;
          line-height: 1.6;
        }
        
        .simple-news-editor .ql-toolbar {
          border-top: 1px solid #ccc;
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;
          border-bottom: none;
        }
        
        .simple-news-editor .ql-container {
          border-bottom: 1px solid #ccc;
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;
          border-top: none;
        }
        
        .simple-news-editor .ql-editor.ql-blank::before {
          font-style: italic;
          color: #999;
        }
      `}</style>
    </div>
  );
};

export default SimpleNewsEditor;