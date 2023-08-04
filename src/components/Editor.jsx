import React from "react";

const Editor = (props) => {
  const handleChange = (e) => {
    e.preventDefault();
    props.changeMarkdown(e.target.value);
  };
  return (
    <div id="markdown-editor">
      <h4 id="markdown-editor-title">mark.md</h4>
      <textarea
        name="markdown"
        id="markdown-textarea"
        value={props.markdown}
        onChange={(e) => handleChange(e)}
      ></textarea>
    </div>
  );
};

export default Editor;
