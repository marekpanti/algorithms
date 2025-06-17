<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Bubbling Example</title>
    <style>
        #grandparent {
            background-color: lightcoral;
            padding: 20px;
        }
        #parent {
            background-color: lightblue;
            padding: 20px;
        }
        #child {
            background-color: lightgreen;
            padding: 20px;
        }
    </style>
</head>
<body>

<div id="grandparent">
    Grandparent
    <div id="parent">
        Parent
        <div id="child">
            Child
        </div>
    </div>
</div>

<script>
    document.getElementById('grandparent').addEventListener('click', function(event) {
        alert('Grandparent clicked!');
    });

    document.getElementById('parent').addEventListener('click', function(event) {
        alert('Parent clicked!');
        // Uncomment the next line to stop the event from bubbling up
        // event.stopPropagation();
    });

    document.getElementById('child').addEventListener('click', function(event) {
        alert('Child clicked!');
        // Uncomment the next line to stop the event from bubbling up
        // event.stopPropagation();
    });
</script>

</body>
</html>