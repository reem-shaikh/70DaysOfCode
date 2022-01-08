### CSS Tags 
<li> tag defines a list item 

- ordered list
```bash
<ol type="✅">
    <li> </li>
    <li> </li>
</ol>

✅ol properties:
1. <ol type="A">
2. <ol type="i">
3. <ol start="10">
4. <ol start="10" reversed>

```
- unordered list
```bash
<ul>
    <li> </li>
    <li> </li>
</ul>
```

2. audio tag 
```bash
- mp3 (supported by all search engines )
{IE, chrome, firefox, safari, opera}

- wavv
{doesnt support on IE}

- ogg 
{doesnt support IE / safari}
```

### Attributes for audio tag
- controls (controls shows the audio player on the web page)
```bash 
    <audio controls>
      <source src="mp.mp3" type="audio/mp3" />
    </audio>
```
- autoplay
```bash 
    <audio controls autoplay>
      <source src="mp.mp3" type="audio/mp3" />
    </audio>
```

- loop (audio played in loop)
```bash 
    <audio controls loop>
      <source src="mp.mp3" type="audio/mp3" />
    </audio>
```
- muted (audio played in mute)
```bash 
    <audio controls muted>
      <source src="mp.mp3" type="audio/mp3" />
    </audio>
```

- preload
```bash 
    <audio controls preload="✅" > 
      <source src="mp.mp3" type="audio/mp3" />
    </audio>

✅Preload properties:
1. auto (automatically loads the audio file with extra controls)
2. none (loads the audio file with extra contents only when clicked on play)
2. metadata (browser imports data of the audio file, before importing the audio file )
```
2. Height VS Line-height 
> In line height, the text is alligned in the center and their is equal spaces  
from both bottom and top 

> In case of height, the text remains on top 
