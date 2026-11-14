@if ($paginator->hasPages())
    <nav role="navigation" aria-label="{{ __('Pagination Navigation') }}">

        <div class="sm:hidden flex justify-between items-center gap-2">

            @if ($paginator->onFirstPage())
                <span class="inline-flex items-center bg-white px-4 py-2 border border-gray-300 rounded-md font-medium text-gray-600 text-sm leading-5 cursor-not-allowed">
                    {!! __('pagination.previous') !!}
                </span>
            @else
                <a href="{{ $paginator->previousPageUrl() }}" rel="prev" class="inline-flex items-center bg-white hover:bg-gray-100 active:bg-gray-100 px-4 py-2 border border-gray-300 focus:border-blue-300 rounded-md focus:outline-none focus:ring ring-gray-300 font-medium text-gray-800 hover:text-gray-700 active:text-gray-800 text-sm leading-5 transition duration-150 ease-in-out">
                    {!! __('pagination.previous') !!}
                </a>
            @endif

            @if ($paginator->hasMorePages())
                <a href="{{ $paginator->nextPageUrl() }}" rel="next" class="inline-flex items-center bg-white hover:bg-gray-100 active:bg-gray-100 px-4 py-2 border border-gray-300 focus:border-blue-300 rounded-md focus:outline-none focus:ring ring-gray-300 font-medium text-gray-800 hover:text-gray-700 active:text-gray-800 text-sm leading-5 transition duration-150 ease-in-out">
                    {!! __('pagination.next') !!}
                </a>
            @else
                <span class="inline-flex items-center bg-white px-4 py-2 border border-gray-300 rounded-md font-medium text-gray-600 text-sm leading-5 cursor-not-allowed">
                    {!! __('pagination.next') !!}
                </span>
            @endif

        </div>

        <div class="hidden sm:flex sm:flex-1 sm:justify-between sm:items-center sm:gap-2">

            <div>
                <p class="text-gray-700 text-sm leading-5">
                    {!! __('Showing') !!}
                    @if ($paginator->firstItem())
                        <span class="font-medium">{{ $paginator->firstItem() }}</span>
                        {!! __('to') !!}
                        <span class="font-medium">{{ $paginator->lastItem() }}</span>
                    @else
                        {{ $paginator->count() }}
                    @endif
                    {!! __('of') !!}
                    <span class="font-medium">{{ $paginator->total() }}</span>
                    {!! __('results') !!}
                </p>
            </div>

            <div>
                <span class="inline-flex rtl:flex-row-reverse shadow-sm rounded-md">

                    {{-- Previous Page Link --}}
                    @if ($paginator->onFirstPage())
                        <span aria-disabled="true" aria-label="{{ __('pagination.previous') }}">
                            <span class="inline-flex items-center bg-white px-2 py-2 border border-gray-300 rounded-l-md font-medium text-gray-500 text-sm leading-5 cursor-not-allowed" aria-hidden="true">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </span>
                    @else
                        <a href="{{ $paginator->previousPageUrl() }}" rel="prev" class="inline-flex items-center bg-white active:bg-gray-100 px-2 py-2 border border-gray-300 focus:border-blue-300 rounded-l-md focus:outline-none focus:ring ring-gray-300 font-medium text-gray-500 hover:text-gray-400 active:text-gray-500 text-sm leading-5 transition duration-150 ease-in-out" aria-label="{{ __('pagination.previous') }}">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    @endif

                    {{-- Pagination Elements --}}
                    @foreach ($elements as $element)
                        {{-- "Three Dots" Separator --}}
                        @if (is_string($element))
                            <span aria-disabled="true">
                                <span class="inline-flex items-center bg-white -ml-px px-4 py-2 border border-gray-300 font-medium text-gray-700 text-sm leading-5 cursor-default">{{ $element }}</span>
                            </span>
                        @endif

                        {{-- Array Of Links --}}
                        @if (is_array($element))
                            @foreach ($element as $page => $url)
                                @if ($page == $paginator->currentPage())
                                    <span aria-current="page">
                                        <span class="inline-flex items-center bg-gray-200 -ml-px px-4 py-2 border border-gray-300 font-medium text-gray-700 text-sm leading-5 cursor-default">{{ $page }}</span>
                                    </span>
                                @else
                                    <a href="{{ $url }}" class="inline-flex items-center bg-white hover:bg-gray-100 active:bg-gray-100 -ml-px px-4 py-2 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring ring-gray-300 font-medium text-gray-700 hover:text-gray-700 active:text-gray-700 text-sm leading-5 transition duration-150 ease-in-out" aria-label="{{ __('Go to page :page', ['page' => $page]) }}">
                                        {{ $page }}
                                    </a>
                                @endif
                            @endforeach
                        @endif
                    @endforeach

                    {{-- Next Page Link --}}
                    @if ($paginator->hasMorePages())
                        <a href="{{ $paginator->nextPageUrl() }}" rel="next" class="inline-flex items-center bg-white active:bg-gray-100 -ml-px px-2 py-2 border border-gray-300 focus:border-blue-300 rounded-r-md focus:outline-none focus:ring ring-gray-300 font-medium text-gray-500 hover:text-gray-400 active:text-gray-500 text-sm leading-5 transition duration-150 ease-in-out" aria-label="{{ __('pagination.next') }}">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    @else
                        <span aria-disabled="true" aria-label="{{ __('pagination.next') }}">
                            <span class="inline-flex items-center bg-white -ml-px px-2 py-2 border border-gray-300 rounded-r-md font-medium text-gray-500 text-sm leading-5 cursor-not-allowed" aria-hidden="true">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </span>
                    @endif
                </span>
            </div>
        </div>
    </nav>
@endif
