import styled from '@emotion/styled';

const MarkdownWrapper = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #fff;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin: 1.5rem 0 1rem;
    color: #fff;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1.2rem 0 0.8rem;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1rem 0 0.6rem;
  }

  ul {
    list-style-type: disc;  // ● 형태
    margin-left: 1.5rem;
    padding-left: 1rem;
  }

  ol {
    list-style-type: decimal; // 1. 2. 3.
    margin-left: 1.5rem;
    padding-left: 1rem;
  }

  li {
    margin-bottom: 0.4rem;
  }

  blockquote {
    border-left: 4px solid #ccc;
    padding-left: 1rem;
    color: #999;
    margin: 1rem 0;
  }

  code {
    background: #f5f5f5;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: monospace;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin: 1rem 0;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 0.5rem;
    text-align: left;
  }

  th {
    background: #f3f3f3;
  }
`;

export default MarkdownWrapper;
