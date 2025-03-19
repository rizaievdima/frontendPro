const pythagorTable = document.getElementById("pythagor-table");

function createTable() {
    const table = document.createElement("table");
    for (let i = 0; i <= 10; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j <= 10; j++) {
            const cell = document.createElement("td");
            if (i === 0) {
                if (i === 0 && j === 0) {
                    cell.textContent = "*";
                    cell.classList.add("first-row-cell");
                } else {
                    row.classList.add("first-row");
                    cell.textContent = j;
                }
            } else if (j === 0) {
                cell.classList.add("first-cell");
                cell.textContent = i;
            } else {
                if (j === i) {
                    cell.classList.add("equal-cell");
                } else if (j < i) {
                    cell.classList.add("light-cell");
                } else {
                    cell.classList.add("dark-cell");
                }
                cell.textContent = i * j;
            }

            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    pythagorTable.appendChild(table);
}

createTable();
