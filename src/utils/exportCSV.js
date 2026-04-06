export const exportToCSV = (data) => {
  const headers = ["Date", "Category", "Amount", "Type"];

  const rows = data.map((t) => [
    t.date,
    t.category,
    t.amount,
    t.type,
  ]);

  let csvContent =
    "data:text/csv;charset=utf-8," +
    [headers, ...rows]
      .map((e) => e.join(","))
      .join("\n");

  const link = document.createElement("a");
  link.setAttribute("href", csvContent);
  link.setAttribute("download", "transactions.csv");
  link.click();
};