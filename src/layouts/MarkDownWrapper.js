import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownWrapper = styled.div`
  font-size: 1rem;
  line-height: 1.75;
  color: #d5d9df;
  max-width: 72ch;

  h1,
  h2,
  h3 {
    color: #fff;
    letter-spacing: -0.01em;
    line-height: 1.3;
  }
  h1 {
    font-size: 1.9rem;
    font-weight: 600;
    margin: 2.2rem 0 1rem;
  }
  h2 {
    font-size: 1.45rem;
    font-weight: 600;
    margin: 2.4rem 0 0.9rem;
  }
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 1.6rem 0 0.5rem;
  }
  > :first-child {
    margin-top: 0;
  }
  p {
    margin: 0.8rem 0;
  }
  strong {
    color: #fff;
  }
  ul,
  ol {
    margin: 0.6rem 0 0.6rem 1.25rem;
    padding-left: 0.5rem;
  }
  ul {
    list-style-type: disc;
  }
  ol {
    list-style-type: decimal;
  }
  li {
    margin-bottom: 0.35rem;
  }
  li::marker {
    color: #8a919c;
  }
  hr {
    border: 0;
    border-top: 1px solid #2c3036;
    margin: 2.2rem 0;
  }
  blockquote {
    border-left: 3px solid #f5a524;
    background: #17191c;
    padding: 0.8rem 1rem;
    color: #aeb4bd;
    margin: 1.5rem 0;
  }
  code {
    background: #1e2125;
    padding: 0.15rem 0.4rem;
    border-radius: 4px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.88em;
  }
  .table-scroll {
    overflow-x: auto;
    margin: 1rem 0;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    font-size: 0.92rem;
  }
  th,
  td {
    border: 1px solid #2c3036;
    padding: 0.55rem 0.75rem;
    text-align: left;
  }
  th {
    background: #1e2125;
    color: #fff;
    font-weight: 600;
  }
  img {
    max-width: 100%;
    border-radius: 6px;
  }
`;

/** Strip the common leading indentation of a template literal so markdown parses correctly. */
const dedent = (text) => {
  const lines = text.replace(/^\n/, '').split('\n');
  const indents = lines.filter((l) => l.trim()).map((l) => l.match(/^ */)[0].length);
  const min = indents.length ? Math.min(...indents) : 0;
  return lines.map((l) => l.slice(min)).join('\n');
};

export function Markdown({ children }) {
  return (
    <MarkdownWrapper>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // eslint-disable-next-line no-unused-vars, react/prop-types
          table: ({ node, ...props }) => (
            <div className="table-scroll">
              <table {...props} />
            </div>
          ),
        }}
      >
        {dedent(children)}
      </ReactMarkdown>
    </MarkdownWrapper>
  );
}

Markdown.propTypes = { children: PropTypes.string.isRequired };

export default MarkdownWrapper;
