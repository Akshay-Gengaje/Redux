import React, { useEffect, useState } from "react";
import { db, doc, getDoc } from "../../firebase/config";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { $getRoot, $setSelection, $insertNodes } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

const editorConfig = {
  namespace: "Reader",
  theme: {}, // Customize if needed
  onError(error) {
    console.error("Lexical error:", error);
  },
};

const LexicalEditor = ({ content }) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (content) {
      editor.update(() => {
        const root = $getRoot();
        root.clear();
        $insertNodes(JSON.parse(content).children);
        $setSelection(null);
      });
    }
  }, [editor, content]);

  return (
    <div className="border p-2 rounded bg-white dark:bg-gray-900 text-black">
      <RichTextPlugin contentEditable={<ContentEditable className="p-2 outline-none" />} />
      <HistoryPlugin />
    </div>
  );
};

const DocPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const blogDoc = await getDoc(doc(db, "blogs", id));
      if (blogDoc.exists()) {
        setBlog(blogDoc.data());
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>{blog.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <LexicalComposer initialConfig={editorConfig}>
            <LexicalEditor content={blog.content} />
          </LexicalComposer>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocPage;
