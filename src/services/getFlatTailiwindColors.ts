import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";

export function getFlatTailwindColors(output: vscode.OutputChannel): Record<string, string> {
  const folders = vscode.workspace.workspaceFolders;

  if (!folders) {
    return {};
  }

  const rootPath = folders[0].uri.fsPath;
  const configPath = path.join(rootPath, "tailwind.config.js");
  if (!fs.existsSync(configPath)) {
    return {};
  }

  try {
    const config = require(configPath);
    const colors = config?.theme?.extend?.colors || config?.theme?.colors || {};
    const result = flattenColors(colors);
    return result;
  } catch (e: any) {
    return {};
  }
}

function flattenColors(obj: any, prefix = ""): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    const name = prefix ? `${prefix}-${key}` : key;

    if (typeof value === "string" && value.startsWith("#")) {
      result[value.toLowerCase()] = name;
    } else if (typeof value === "object" && value !== null) {
      Object.assign(result, flattenColors(value, name));
    }
  }
  return result;
}