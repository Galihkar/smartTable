// src/modules/exportExcel.js

export function setupExportExcel(instance) {
  instance.exportBtn.addEventListener("click", () => {
    if (typeof XLSX === "undefined") {
      alert("Export gagal: library XLSX belum dimuat.");
      return;
    }

    const headers = Array.from(instance.table.querySelectorAll("thead th"));
    const visibleIndexes = headers
      .map((th, i) => (th.offsetParent !== null ? i : -1))
      .filter(i => i !== -1);

    const headerRow = visibleIndexes.map(i => headers[i].textContent.trim());
    const dataRows = Array.from(instance.table.querySelectorAll("tbody tr")).map(row =>
      visibleIndexes.map(i => row.cells[i]?.textContent.trim())
    );

    const worksheetData = [headerRow, ...dataRows];
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, "Data_Tabel.xlsx");
  });
}
