import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import parserTypeScript from "prettier/plugins/typescript";
import { useEffect, useRef, useState } from "react";
import parserHtml from "prettier/plugins/html";
import { editor } from "monaco-editor";
import { LanguageType } from "@/interface/component.interface";
import parserEstree from "prettier/plugins/estree";
import { Monaco } from "@monaco-editor/react";

interface ParserConfig {
  parser: string;
  plugins: (typeof parserEstree)[];
}

export function useEditor(code: string, type: LanguageType) {
  const [formattedCode, setFormattedCode] = useState(code);
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  const getParserConfig = (type: LanguageType) => {
    const parserConfig: Record<LanguageType, ParserConfig> = {
      TYPESCRIPT: {
        parser: "typescript",
        plugins: [parserTypeScript, parserEstree],
      },
      CSHARP: {
        parser: "babel",
        plugins: [parserBabel],
      },
      HTML: {
        parser: "html",
        plugins: [parserHtml],
      },
      JAVA: {
        parser: "babel",
        plugins: [parserBabel],
      },
      PYTHON: {
        parser: "babel",
        plugins: [parserBabel],
      },
      REACT: {
        parser: "babel",
        plugins: [parserBabel],
      },
      SQL: {
        parser: "babel",
        plugins: [parserBabel],
      },
    };

    return parserConfig[type];
  };

  const formatCode = async (code: string) => {
    try {
      const config = getParserConfig(type);
      const formatted = await prettier.format(code, {
        ...config,
        semi: false,
        singleQuote: true,
      });

      return formatted;
    } catch (error) {
      console.error("Error al formatear:", error);
      return code;
    }
  };

  useEffect(() => {
    formatCode(code).then((formatted) => {
      setFormattedCode(formatted);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, type]);

  const handleEditorDidMount = (
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco,
  ) => {
    editorRef.current = editor;

    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.React, // Habilita JSX
      jsxFactory: "React.createElement",
      reactNamespace: "React",
      allowNonTsExtensions: true,
      allowJs: true,
      target: monaco.languages.typescript.ScriptTarget.Latest,
      noSemanticValidation: true,
      noSyntaxValidation: true,
    });

    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.React,
      jsxFactory: "React.createElement",
      reactNamespace: "React",
      allowNonTsExtensions: true,
      target: monaco.languages.typescript.ScriptTarget.Latest,
      noSemanticValidation: true,
      noSyntaxValidation: true,
    });

    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: false,
      schemas: [],
    });

    monaco.languages.css.cssDefaults.setDiagnosticsOptions({
      validate: false,
    });

    monaco.languages.css.lessDefaults.setDiagnosticsOptions({
      validate: false,
    });

    monaco.languages.css.scssDefaults.setDiagnosticsOptions({
      validate: false,
    });

    monaco.languages.html.htmlDefaults.setOptions({
      validate: false,
    });

    editor.addAction({
      id: "prettier-format",
      label: "Format with Prettier",
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS],
      run: async (ed) => {
        const currentCode = ed.getValue();
        const formatted = await formatCode(currentCode);
        ed.setValue(formatted);
      },
    });
  };

  return { formattedCode, handleEditorDidMount };
}
