// src/modules/fitWidth.js

export function enableAutoFitWidth(instance) {
  const headers = instance.table.querySelectorAll('thead th');
  const rows = instance.table.querySelectorAll('tbody tr');

  headers.forEach(th => {
    th.style.minWidth = 'unset';
    th.style.width = 'auto';
    th.style.maxWidth = 'unset';
  });

  rows.forEach(row => {
    [...row.cells].forEach(td => {
      td.style.minWidth = 'unset';
      td.style.width = 'auto';
      td.style.maxWidth = 'unset';
    });
  });
}
