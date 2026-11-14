@if ($action)
    <button data-name="ids" data-action="{{$action}}" class="bg-red-600 disabled:opacity-50 px-3 py-1 text-white js-delete-many" disabled>
        Delete <span>0</span>
    </button>
@endif