# Smart Table

The ```.smart-table``` class is used to create a user-friendly and easy-to-use report table view. Just by adding ```class = "smart-table"``` to ```<table>``` , adding ```class="draggable sortable filterable"``` in ```<th>``` you can use it. Like dragging and dropping columns, showing or hiding columns, filtering data per column, exporting to excel, and we can customize the columns according to their contents.<br>Some buttons use icon buttons from [w3school](http://w3schools.com/icons/) and excel export CDN library from [jsDelivr](https://www.jsdelivr.com/). So make sure you add them in the meta header.<br>

# Testing
You can try it [here](https://galihkar.github.io/smartTable/)

--------------------------------------
# Script
```
<body>
  <table class="smart-table">
    <thead>
      <tr>
        <th class="draggable sortable filterable">..../th>
      </tr>
    </thead>
      <tbody>
        <tr>....</tr>
      </tbody>
  </table>
```
--------------------------------------
# Documentation
`index.html` index.html is used as an HTML display containing table data.<br>
Download `smart-table.css` and the `src` folder and link them to your HTML page, and call it with ```<link href="smart-table.css" rel="stylesheet">```<br>
`smart-table.css` contains the CSS for display settings.<br>
Call JS with ```<script type="module" src="src/smartTable.js"></script>```<br>
The `src` folder contains javascript separated according to its module, where there is content like this: <br>
src/<br>
├── smartTable.js ← Entry is connected to the js module<br>
├── core.js ← SmartTable main class<br>
├── modules/<br>
│ ├── dragDrop.js ← Functions: drag & drop<br>
│ ├── columnToggle.js← Toggle column<br>
│ ├── columnFilter.js← Filter column<br>
│ ├── exportExcel.js ← Export XLSX<br>
│ ├── fitWidth.js ← Auto fit column<br>
│ └── sort.js ← Sort column<br>

--------------------------------------
# Features
**Drag & Drop Columns**: Drag column headers to change column positions<br>
**Sorting**: Click column headers to sort data<br>
**Filtering**: Filter data per column<br>
**Layout Settings**: Show/hide columns as needed<br>
**Adjust Column Width**: Adjust column width to fit content<br>
**Export to Excel**: Export table data to Excel file<br>

--------------------------------------
# Browser Compatibility
Supported on modern Chrome, Firefox, Edge, and Safari.

--------------------------------------
# Requirements
Font Awesome (for toolbar icons)<br>
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
```
XLSX.js library from jsDelivr (for excel export)
```
<script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"></script>
```

--------------------------------------
# Version
This is the 2nd version of my project about smart table.
