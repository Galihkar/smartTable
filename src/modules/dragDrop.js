
export function initDraggableHeaders(instance) {
  const headers = instance.table.querySelectorAll('thead th');

  headers.forEach((th) => {
    th.setAttribute('draggable', true);
    th.removeEventListener('dragstart', onDragStart);
    th.removeEventListener('dragover', onDragOver);
    th.removeEventListener('drop', onDrop);
    th.removeEventListener('dragend', onDragEnd);

    th.addEventListener('dragstart', onDragStart);
    th.addEventListener('dragover', onDragOver);
    th.addEventListener('drop', onDrop);
    th.addEventListener('dragend', onDragEnd);
  });

  function onDragStart(e) {
    const headers = Array.from(e.target.parentNode.children);
    instance.startIndex = headers.indexOf(e.target);
    e.target.classList.add('dragging');
  }

  function onDragOver(e) {
    e.preventDefault();
  }

  function onDrop(e) {
    const headers = Array.from(e.target.parentNode.children);
    const endIndex = headers.indexOf(e.target);
    if (instance.startIndex !== endIndex) {
      moveColumn(instance.table, instance.startIndex, endIndex);
      instance.sortState = {};
      initDraggableHeaders(instance);
    }
  }

  function onDragEnd(e) {
    e.target.classList.remove('dragging');
  }

  function moveColumn(table, fromIndex, toIndex) {
    for (const row of table.rows) {
      const cells = row.cells;
      const fromCell = cells[fromIndex];
      const toCell = cells[toIndex];
      if (fromIndex < toIndex) {
        row.insertBefore(fromCell, toCell.nextSibling);
      } else {
        row.insertBefore(fromCell, toCell);
      }
    }
  }
}
