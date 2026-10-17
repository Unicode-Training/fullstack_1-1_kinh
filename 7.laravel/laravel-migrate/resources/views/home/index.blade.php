@extends('layouts.main')
@section('content')
    <h2>Home</h2>
    <div class="time"></div>
@endsection
@section('js')
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const timeEl = document.querySelector('.time');
        timeEl.innerText = window.getCurrentTime();
    })
</script>
@endsection