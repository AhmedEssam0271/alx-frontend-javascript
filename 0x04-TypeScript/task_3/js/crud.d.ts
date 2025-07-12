// filepath: d:\كورسات برمجة\frontend web\ALX\FE Pro Dev\FE PRO DEV-projects\alx-frontend-javascript\0x04-TypeScript\task_3\js\crud.d.ts

import { RowID, RowElement } from "./interface";

export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
