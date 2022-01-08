### JS Window Location object 
window.Location.Href property returns the URL of the current page 

```bash 
    <script>
        document.write(window.location.href)
    </script>

console:
http://127.0.0.1:5500/main/2-01/assignments/windowloc.html
```
window.location.reload() reloads the current page with POST data, while window.location.href does not include the POST data.

#### window.location.reload(true); 
reloads the page from the server instead of from the cache

#### window.location.reload(false); 
reloads the page from the cache instead from loading the page 


