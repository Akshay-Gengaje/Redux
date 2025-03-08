import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
} from "lexical";
import { Button } from "@/components/ui/button";

const ToolbarPlugin = () => {
  const [editor] = useLexicalComposerContext();

  const applyFormat = (formatType) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, formatType);
      }
    });
  };

  return (
    <div className="flex space-x-2 border-b pb-2 mb-2 dark:border-gray-700">
      <Button onClick={() => applyFormat("bold")} className="font-bold">B</Button>
      <Button onClick={() => applyFormat("italic")} className="italic">I</Button>
      <Button onClick={() => applyFormat("underline")} className="underline">U</Button>
      <Button onClick={() => applyFormat("strikethrough")} className="line-through">S</Button>
      <Button onClick={() => applyFormat("h1")} className="text-lg">H1</Button>
      <Button onClick={() => applyFormat("h2")} className="text-md">H2</Button>
      <Button onClick={() => applyFormat("blockquote")}>“”</Button>
      <Button onClick={() => applyFormat("code")} className="font-mono">Code</Button>
    </div>
  );
};

export default ToolbarPlugin;
