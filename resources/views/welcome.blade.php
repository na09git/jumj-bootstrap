<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="/dist/output.css" rel="stylesheet">

</head>


<body class="antialiased">

    <script src="http://localhost:8080/webpack-dev-server.js"></script>

    <link rel="stylesheet" href="{{asset('/css/app.css')}}?_={{rand(1000,2000)}}">


    <h1 class='text-primary'>Bootstrap</h1>
    <h1 class="text-3xl font-bold underline">
        Tailwind Hello World </h1>


    <script type="text/javascript" src="{{'asset(/js/app.js')}}?_={{rand(1000,2000)}}"></script>

</body>

</html>