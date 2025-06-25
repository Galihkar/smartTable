
import { initDraggableHeaders } from './modules/dragDrop.js';
import { generateCheckboxes, bindToggleEvents } from './modules/columnToggle.js';
import { enhanceHeaders, initFilterEvents } from './modules/columnFilter.js';
import { setupExportExcel } from './modules/exportExcel.js';
import { enableAutoFitWidth } from './modules/fitWidth.js';
import { bindSortEvents } from './modules/sort.js';

export class SmartTable {
  constructor(table) {
    this.table = table;
    this.sortState = {};
    this.init();
  }

  init() {
    this.wrapTable();
    this.injectToolbar();
    enhanceHeaders(this);
    generateCheckboxes(this);
    initFilterEvents(this);
    initDraggableHeaders(this);
    bindToggleEvents(this);
    setupExportExcel(this);
    bindSortEvents(this);
  }

  wrapTable() {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper-with-toolbar';

    const scrollable = document.createElement('div');
    scrollable.className = 'scrollable-table';

    this.table.parentNode.insertBefore(wrapper, this.table);
    this.table.parentNode.removeChild(this.table);
    scrollable.appendChild(this.table);
    wrapper.appendChild(scrollable);
  }

  injectToolbar() {
    const wrapper = this.table.closest('.table-wrapper-with-toolbar');
    this.toolbar = document.createElement('div');
    this.toolbar.className = 'table-toolbar';

    this.toolbar.innerHTML = `
      <div class="toolbar-section">
        <button class="dropdown-toggle column-toggle" title="Layout Setting">
          <i class="fa fa-table"></i>
        </button>
        <div class="dropdown-panel column-panel"></div>
      </div>
      <div class="toolbar-section">
        <button class="dropdown-toggle filter-toggle" title="Column Filter">
          <i class="fa fa-filter"></i>
        </button>
      </div>
      <div class="toolbar-section">
        <button class="dropdown-toggle export-toggle" title="Export to Excel">
          <i class="fas fa-file-excel"></i>
        </button>
      </div>
      <div class="toolbar-section">
        <button class="dropdown-toggle fit-toggle" title="Fit Column Width">
          <i class="fas fa-text-width"></i>
        </button>
      </div>`;

    const scrollable = wrapper.querySelector('.scrollable-table');
    wrapper.insertBefore(this.toolbar, scrollable);

    // Assign UI elements
    this.columnBtn = this.toolbar.querySelector('.column-toggle');
    this.columnPanel = this.toolbar.querySelector('.column-panel');
    this.filterBtn = this.toolbar.querySelector('.filter-toggle');
    this.exportBtn = this.toolbar.querySelector('.export-toggle');
    this.resizeBtn = this.toolbar.querySelector('.fit-toggle');
  }
}
