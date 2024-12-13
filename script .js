document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#rabbitTable tbody');
    const addRowButton = document.getElementById('addRow');

    // Fonction pour ajouter une ligne vide
    function addRow() {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td contenteditable="true">Auto</td>
            <td contenteditable="true">Nom</td>
            <td contenteditable="true">JJ/MM/AAAA</td>
            <td contenteditable="true">M/F</td>
            <td contenteditable="true">Race</td>
            <td contenteditable="true">0.0</td>
            <td contenteditable="true">Bonne/Malade</td>
            <td contenteditable="true">Remarques</td>
            <td>
                <button class="action-btn edit-btn">Modifier</button>
                <button class="action-btn delete-btn">Supprimer</button>
            </td>
        `;
        tableBody.appendChild(newRow);

        // Ajouter des événements aux nouveaux boutons
        const deleteButton = newRow.querySelector('.delete-btn');
        deleteButton.addEventListener('click', () => deleteRow(newRow));
    }

    // Fonction pour supprimer une ligne
    function deleteRow(row) {
        tableBody.removeChild(row);
    }

    // Événement pour le bouton "Ajouter un Lapin"
    addRowButton.addEventListener('click', addRow);
});