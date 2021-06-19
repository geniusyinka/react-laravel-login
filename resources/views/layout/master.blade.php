<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta property="csrf-token" name="csrf-token" content="{{ csrf_token() }}"/>
    <title> @yield('title') </title>
    <!-- plugins:css -->
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <!-- End layout styles -->
    @yield('styles')
  </head>
  <body>
          <div>
            @yield('container')
          </div>
    @yield('scripts')
  </body>
</html>