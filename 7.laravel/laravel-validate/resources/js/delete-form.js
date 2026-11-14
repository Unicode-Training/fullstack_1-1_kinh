import Swal from 'sweetalert2'
const deleteBtnList = document.querySelectorAll('.js-delete');
const deleteForm = document.querySelector('.delete-form');
if (deleteBtnList.length && deleteForm) {
    deleteBtnList.forEach((deleteBtn) => {
        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    const href = e.target.href;
                    deleteForm.action = href;
                    deleteForm.submit();
                }
            });

        });
    });
}