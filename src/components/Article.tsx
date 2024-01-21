'use client';

import Bold from '@tiptap/extension-bold';
import Document from '@tiptap/extension-document';
import Heading from '@tiptap/extension-heading';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { generateHTML } from '@tiptap/html';
import { useMemo } from 'react';

export default function Article({
  content
}: {
  content?: any
}) {

  const output = useMemo(() => {
    if (!content) return null;
    return generateHTML(content, [
      Document,
      Heading,
      Paragraph,
      Text,
      Bold
    ])
  }, [content])

  return <div>
    {output && <div dangerouslySetInnerHTML={{ __html: output }} />}
  </div>
}