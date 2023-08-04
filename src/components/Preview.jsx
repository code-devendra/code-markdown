import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../markdown.preview.css";

const Preview = ({ markdown }) => {
  return (
    <div id="markdown-preview-box">
      <h4 id="markdown-preview-title">Preview mark.md</h4>
      <ReactMarkdown
        className="markdown-preview"
        children={markdown}
        remarkPlugins={[remarkGfm]}
      />
    </div>
  );
};

export default Preview;
