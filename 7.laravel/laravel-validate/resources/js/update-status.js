import { toastify } from "./toastify";

const statusCheckboxList = document.querySelectorAll('.js-status');
if (statusCheckboxList.length) {
    statusCheckboxList.forEach((checkbox) => {
        checkbox.addEventListener('change', async () => {
            const id = checkbox.dataset.id;
            const status = checkbox.checked ? 'PUBLISH' : 'DRAFT';
            const response = await fetch(`/products/${id}/status`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ status })
            });
            if (response.ok) {
                toastify(`${status === 'PUBLISH' ? 'Publish' : 'Draft'} status success`);
            } else {
                toastify("Update status error", 'error');
            }
        })
    })
}
