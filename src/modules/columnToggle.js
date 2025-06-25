// src/modules/columnToggle.js

export function generateCheckboxes(instance) {
  const panel = instance.columnPanel;
  panel.innerHTML = '';
  const headers = Array.from(instance.table.querySelectorAll('thead th'));

  headers.forEach((th, index) => {
    const labelText = th.textContent.trim() || `Kolom ${index + 1}`;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = th.style.display !== 'none';
    checkbox.dataset.col = index;

    checkbox.addEventListener('change', () => {
      const colIndex = parseInt(checkbox.dataset.col);
      const isChecked = checkbox.checked;
      for (const row of instance.table.rows) {
        const cell = row.cells[colIndex];
        if (cell) cell.style.display = isChecked ? '' : 'none';
      }
      generateCheckboxes(instance);
    });

    const label = document.createElement('label');
    label.style.marginRight = '10px';
    label.appendChild(checkbox);
    label.append(` ${labelText}`);
    panel.appendChild(label);
  });
}

export function bindToggleEvents(instance) {
  instance.columnBtn.addEventListener('click', () => {
    if (!instance.columnPanel.hasChildNodes()) {
      generateCheckboxes(instance);
    }
    instance.columnPanel.style.display =
      instance.columnPanel.style.display === 'none' ? 'block' : 'none';
  });

  document.addEventListener('click', (e) => {
    if (!instance.columnBtn.contains(e.target) && !instance.columnPanel.contains(e.target)) {
      instance.columnPanel.style.display = 'none';
    }
  });

  const filterRow = instance.table.querySelector('#filterRow');
    if (!filterRow) {
      enhanceHeaders(instance);
      initFilterEvents(instance);
    }
    const isHidden = getComputedStyle(filterRow).display === 'none';
    filterRow.style.display = isHidden ? 'table-row' : 'none';

  instance.resizeBtn.addEventListener('click', () => {
    enableAutoFitWidth(instance);
  });
}