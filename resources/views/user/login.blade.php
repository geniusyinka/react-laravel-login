@section('title')
	Login
@endsection

@section('styles')

@endsection

@extends('layout.master')

@section('container')
	<div id="app"></div>
@endsection

@section('scripts')
{{-- <script>
    var authUser = @json(Auth::user());
</script> --}}
<script src="{{ asset('js/views/Login.js') }}"></script>
@endsection