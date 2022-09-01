function gen_tableAll() {
    fetch('../Table.json')
        .then(response => response.json())
        .then(data => {
            const tblBody = document.querySelector('.tbodyAll');
            
            for (let i = 0; i < data.length; i++) {
                const row = document.createElement('tr');

                var cell = document.createElement('td');
                cell.classList.add('tdName')
                var a = document.createElement('a')
                var cellText = document.createTextNode(data[i].name);
                a.href = "../pages/tag.html"
                a.appendChild(cellText)
                cell.appendChild(a);
                row.appendChild(cell);
                cell = document.createElement('td')
                cell.classList.add('tdDescription')
                cellText = document.createTextNode(data[i].description);
                cell.appendChild(cellText);
                row.appendChild(cell);

                tblBody.appendChild(row);
            }
        })
}