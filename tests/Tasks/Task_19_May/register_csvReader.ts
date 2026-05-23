import * as fs from "fs";

export interface UserDataRow {
  [key: string]: string;
}

export function reg_readCSV(filePath: string): UserDataRow[] {
  let content = fs.readFileSync(filePath, "utf-8");
  let lines = content.trim().split("\n");

  // First Line is headers
  let headers = lines[0].split(",");

  // Remaining Lines are data
  let data: UserDataRow[] = [];
  for (let i = 1; i < lines.length; i++) {
    let values = lines[i].split(",");
    let row: UserDataRow = {};
    for (let j = 0; j < headers.length; j++) {
      row[headers[j].trim()] = values[j]?.trim() || "";
    }
    data.push(row);
  }
  return data;
}
