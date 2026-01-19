"use client";
import { LanguageType } from "@/interface/component.interface";
import MonacoEditor from "@monaco-editor/react";
import { useEditor } from "./useEditor";

interface EditorProps {
  code: string;
  type: LanguageType;
}

export default function Editor({ code, type }: EditorProps) {
  const { formattedCode, handleEditorDidMount } = useEditor(code, type);

  return (
    <MonacoEditor
      width={"100%"}
      height={800}
      className="min-h-60 w-full"
      language={type.toLowerCase()}
      value={formattedCode}
      options={{
        minimap: {
          enabled: false,
        },
        formatOnPaste: true,
        formatOnType: false,
        fontSize: 18,
        readOnly: true,
        quickSuggestions: false,
        links: false,
        folding: false,
        contextmenu: false,
      }}
      onMount={handleEditorDidMount}
      theme="vs-dark"
    />
  );
}
