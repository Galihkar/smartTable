export function bindSortEvents(instance) {
  const headers = instance.table.querySelectorAll('thead th');
  headers.forEach((th, index) => {
    if (th.classList.contains('sortable')) {
      th.addEventListener('click', () => {
        const currentSort = instance.sortState[index] === 'asc' ? 'desc' : 'asc';
        sortColumn(instance.table, index, currentSort);
        updateSortIcons(instance.table, index, currentSort);
        instance.sortState = {};
        instance.sortState[index] = currentSort;
      });
    }
  });
}

function sortColumn(table, index, direction) {
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.rows);

  rows.sort((a, b) => {
    const valA = a.cells[index].textContent.trim();
    const valB = b.cells[index].textContent.trim();
    const numA = parseFloat(valA), numB = parseFloat(valB);
    const isNumeric = !isNaN(numA) && !isNaN(numB);
    return isNumeric
      ? (direction === 'asc' ? numA - numB : numB - numA)
      : (direction === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA));
  });

  rows.forEach(row => tbody.appendChild(row));
}

function updateSortIcons(table, activeIndex, direction) {
  const headers = table.querySelectorAll('thead th');
  headers.forEach((th, i) => {
    const icon = th.querySelector('.sort-icon');
    if (icon) {
      icon.className = 'sort-icon fas';
      if (i === activeIndex) {
        icon.classList.add(direction === 'asc' ? 'fa-sort-up' : 'fa-sort-down');
      }
    }
  });
}
