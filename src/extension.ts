import * as vscode from "vscode";
import { getFlatTailwindColors } from "./services/getFlatTailiwindColors";

export function activate(context: vscode.ExtensionContext) {
  const output = vscode.window.createOutputChannel("Tailwind Colors");
  const colorMap = getFlatTailwindColors(output);

  for (const [hex, alias] of Object.entries(colorMap)) {
    output.appendLine(`  ${hex} → ${alias}`);
  }

  const supportedLanguages = [
    "javascript",
    "typescript",
    "html",
    "javascriptreact",
    "typescriptreact",
  ];

  const hexTriggerChars = [
    "#",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  const provider = vscode.languages.registerCompletionItemProvider(
    supportedLanguages,
    {
      provideCompletionItems(document, position) {
        const line = document.lineAt(position).text;
        const cursorIndex = position.character;
        const beforeCursor = line.slice(0, cursorIndex);
        const hexMatch = beforeCursor.match(/#[0-9a-fA-F]{1,6}$/);


        if (!hexMatch) {
          output.appendLine("No hex pattern found");
          return [];
        }

        const typedHex = hexMatch[0].toLowerCase();
        const suggestions: vscode.CompletionItem[] = [];

        for (const [hex, alias] of Object.entries(colorMap)) {
          if (hex.startsWith(typedHex)) {
            const startIdx = beforeCursor.lastIndexOf(typedHex);
            const start = new vscode.Position(position.line, startIdx);
            const end = position;
            const range = new vscode.Range(start, end);

            const item = new vscode.CompletionItem(
              `Tailwind: ${alias} (${hex})`,
              vscode.CompletionItemKind.Color
            );
            item.detail = `Tailwind alias: ${alias}`;
            item.documentation = `Replace ${typedHex} with Tailwind alias`;
            item.insertText = alias;
            item.range = range;
            suggestions.push(item);
          }
        }
        return suggestions;
      },
    },
    ...hexTriggerChars
  );

  context.subscriptions.push(provider);
}
