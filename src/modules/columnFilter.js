// src/modules/columnFilter.js

export function enhanceHeaders(instance) {
  const headerRow = instance.table.querySelector('thead tr');
  const headers = headerRow.querySelectorAll('th');

  if (!instance.table.querySelector('#filterRow')) {
    const filterRow = document.createElement('tr');
    filterRow.id = 'filterRow';
    headers.forEach((th) => {
      const td = document.createElement('td');
      if (th.classList.contains('filterable')) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = th.textContent.trim();
        td.appendChild(input);
      }
      filterRow.appendChild(td);
    });
    headerRow.parentNode.appendChild(filterRow);
  }
}

export function initFilterEvents(instance) {
  const filterRow = instance.table.querySelector('#filterRow');
  if (!filterRow) return;

  const rows = Array.from(instance.table.querySelectorAll('tbody tr'));
  const inputs = Array.from(filterRow.querySelectorAll('input'));

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      const filters = inputs.map(inp => inp.value.toLowerCase());

      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        let show = true;

        filters.forEach((val, i) => {
          if (val && cells[i] && !cells[i].textContent.toLowerCase().includes(val)) {
            show = false;
          }
        });

        row.style.display = show ? '' : 'none';
      });
    });
  });
}
