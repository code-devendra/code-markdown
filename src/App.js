import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Navbar from "./components/Navbar";
function App() {
  const [markdown, setMarkdown] = useState(`# My Markdown Demo

  ## Table Example
  
  | Name         | Age | Occupation      |
  | ------------ | --- | --------------- |
  | John Doe     | 30  | Software Eng.   |
  | Jane Smith   | 25  | Data Analyst    |
  | Bob Johnson  | 35  | Project Manager |
  
  ## Code Blocks
  
  \`\`\`javascript
  function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("Alice");
  \`\`\`
  
  \`\`\`python
  def factorial(n):
      if n == 0:
          return 1
      else:
          return n * factorial(n-1)
      
  print(factorial(5))
  \`\`\`
  
  ## Blockquote Example
  
  > The only way to do great work is to love what you do. - Steve Jobs
  
  
  ## My GitHub Repository
  
  You can check out my GitHub repository [here](https://github.com/code-devendra/code-markdown).
  
  `);
  const handleChange = (value) => {
    setMarkdown(value);
  };
  return (
    <div>
      <Navbar />
      <div id="markdown-container">
        <Editor
          markdown={markdown}
          changeMarkdown={(value) => handleChange(value)}
        />
        <div id="container-divider"></div>
        <Preview markdown={markdown} />
      </div>
    </div>
  );
}

export default App;
