import { useState } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import { db, collection, addDoc } from "../../firebase/config";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import { Button } from "@/components/ui/button";
import exampleTheme from "./theme/ExampleTheme";
import "./styles/styles.css"
const Placeholder = () => (
  <div className="absolute top-4 left-4 text-gray-400 dark:text-gray-500 pointer-events-none">
    <p className="text-lg font-semibold">✍ Start writing your blog...</p>
    <ul className="list-disc ml-4 text-sm">
      <li className="italic">Format text using markdown shortcuts</li>
      <li className="text-blue-500">Insert links, images, and lists</li>
      <li className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">
        Add code blocks with syntax highlighting
      </li>
    </ul>
  </div>
);

const editorConfig = {
  // The editor theme
  theme: exampleTheme,
  onError(error) {
    console.error(error);
  },
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],
};

export default function DocWriter() {
  const [editorContent, setEditorContent] = useState("");

  const handleSave = async () => {
    if (editorContent.trim()) {
      await addDoc(collection(db, "blogs"), {
        content: editorContent,
        timestamp: Date.now(),
      });
      setEditorContent("");
    }
  };

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-xl">
        <ToolbarPlugin />
        <div className="relative min-h-[200px] border p-4 rounded dark:bg-gray-800 dark:text-gray-200">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </div>
        <Button onClick={handleSave} className="mt-4">
          Publish Blog
        </Button>
      </div>
    </LexicalComposer>
  );
}
