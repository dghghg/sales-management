// Utility functions for the sales management system

// Format currency
function formatCurrency(value) {
    return new Intl.NumberFormat('ar-SA', {
        style: 'currency',
        currency: 'SAR'
    }).format(value);
}

// Calculate subtotal with discount
function calculateSubtotal(quantity, price, discount = 0) {
    const subtotal = quantity * price;
    const discountAmount = subtotal * (discount / 100);
    return subtotal - discountAmount;
}

// Add new invoice item row
function addInvoiceItemRow(invoiceItemsContainer) {
    const rowCount = document.querySelectorAll('.invoice-item-row').length;
    const newRow = document.createElement('tr');
    newRow.className = 'invoice-item-row';
    newRow.innerHTML = `
        <td>
            <select class="form-select form-select-sm product-select" name="products[]" required>
                <option value="">اختر صنف</option>
            </select>
        </td>
        <td>
            <input type="number" class="form-control form-control-sm quantity-input" name="quantities[]" min="1" value="1" required>
        </td>
        <td>
            <input type="number" class="form-control form-control-sm price-input" name="prices[]" min="0" step="0.01" required>
        </td>
        <td>
            <input type="number" class="form-control form-control-sm discount-input" name="discounts[]" min="0" max="100" step="0.01" value="0">
        </td>
        <td>
            <span class="subtotal-amount">0.00</span>
        </td>
        <td>
            <button type="button" class="btn btn-danger btn-sm remove-row">
                <i class="bi bi-trash"></i>
            </button>
        </td>
    `;
    invoiceItemsContainer.appendChild(newRow);
    
    // Add event listeners
    setupInvoiceItemEvents(newRow);
}

// Setup invoice item row events
function setupInvoiceItemEvents(row) {
    const quantityInput = row.querySelector('.quantity-input');
    const priceInput = row.querySelector('.price-input');
    const discountInput = row.querySelector('.discount-input');
    const removeBtn = row.querySelector('.remove-row');
    
    const updateSubtotal = () => {
        const quantity = parseFloat(quantityInput.value) || 0;
        const price = parseFloat(priceInput.value) || 0;
        const discount = parseFloat(discountInput.value) || 0;
        
        const subtotal = calculateSubtotal(quantity, price, discount);
        row.querySelector('.subtotal-amount').textContent = subtotal.toFixed(2);
        
        // Update total
        updateInvoiceTotal();
    };
    
    quantityInput.addEventListener('input', updateSubtotal);
    priceInput.addEventListener('input', updateSubtotal);
    discountInput.addEventListener('input', updateSubtotal);
    
    removeBtn.addEventListener('click', () => {
        row.remove();
        updateInvoiceTotal();
    });
}

// Update invoice total
function updateInvoiceTotal() {
    const subtotals = document.querySelectorAll('.subtotal-amount');
    let total = 0;
    
    subtotals.forEach(elem => {
        total += parseFloat(elem.textContent) || 0;
    });
    
    const totalElement = document.querySelector('[data-invoice-total]');
    if (totalElement) {
        totalElement.textContent = total.toFixed(2);
    }
}

// Export table to Excel
function exportTableToExcel(tableSelector, filename) {
    const table = document.querySelector(tableSelector);
    if (!table) return;
    
    const csv = [];
    const rows = table.querySelectorAll('tr');
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td, th');
        const rowData = Array.from(cells).map(cell => {
            let text = cell.textContent.trim();
            // Escape quotes
            text = text.replace(/"/g, '""');
            return `"${text}"`;
        });
        csv.push(rowData.join(','));
    });
    
    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + csv.join('\n');
    const link = document.createElement('a');
    link.setAttribute('href', encodeURI(csvContent));
    link.setAttribute('download', filename + '.csv');
    link.click();
}

// Print invoice
function printInvoice(invoiceId) {
    const printWindow = window.open(`invoices/print.php?id=${invoiceId}`, 'print', 'height=600,width=800');
    printWindow.print();
}

// Confirm action
function confirmAction(message) {
    return confirm(message || 'هل أنت متأكد من هذا الإجراء؟');
}

// Initialize tooltips
document.addEventListener('DOMContentLoaded', function() {
    // Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});