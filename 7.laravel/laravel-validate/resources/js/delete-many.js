import Swal from 'sweetalert2'
const deleteManyBtn = document.querySelector('.js-delete-many');
const deleteCheckAll = document.querySelector('.js-check-all');
const deleteCheckItems = document.querySelectorAll('.js-check-delete');

if (deleteManyBtn && deleteCheckAll && deleteCheckItems.length) {
    let count = 0;
    let values = [];
    const updateDeleteManyBtn = () => {
        const span = deleteManyBtn.querySelector('span');
        span.innerText = count;
        deleteManyBtn.disabled = count === 0
    }
    deleteCheckAll.addEventListener('change', () => {
        const status = deleteCheckAll.checked;
        deleteCheckItems.forEach((checkItem) => {
            checkItem.checked = status;
            if (status) {
                values.push(checkItem.value);
            } else {
                values = [];
            }

        });

        count = status ? deleteCheckItems.length : 0;

        updateDeleteManyBtn();
    });

    deleteCheckItems.forEach((checkItem) => {
        checkItem.addEventListener('change', () => {
            if (checkItem.checked) {
                count++;
            } else {
                count--
            }

            deleteCheckAll.checked = count === deleteCheckItems.length;

            values.push(checkItem.value);

            updateDeleteManyBtn();
        })
    });

    deleteManyBtn.addEventListener('click', () => {
        if (!count) {
            return;
        }
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            const action = deleteManyBtn.dataset.action;
            const fieldName = deleteManyBtn.dataset.name;
            const deleteForm = document.querySelector('.delete-form');
            const div = deleteForm.querySelector('div');
            div.innerText = '';
            [...new Set(values)].forEach((val) => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = `${fieldName}[]`;
                input.value = val;
                div.append(input);
            });

            deleteForm.action = action;

            deleteForm.submit();

        });
    });
}