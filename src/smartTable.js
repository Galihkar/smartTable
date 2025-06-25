// src/smartTable.js
import { SmartTable } from './core.js';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('table.smart-table').forEach(table => new SmartTable(table));
});
