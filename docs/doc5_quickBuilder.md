---
id: doc5
title: Quickbuilder
---

import useBaseUrl from '@docusaurus/useBaseUrl';

### Definition 

<p align="justify">
Quickbuilder is small, handy tool that comes with EzGitDoc. It allows to create prototypes much quicker at cost of no preview available on EzGitDoc page and less options at it's current state(v1.0). To access it, scroll down sidebar section until seeing Quickbuilder reference. 
</p>

<p align="center">
<img src={useBaseUrl('img/quickBuilder/1.png')} alt="Quickbuilder - 01" height="120px"/>
</p>

### Presentation

<p align="center">
<img src={useBaseUrl('img/quickBuilder/2.png')} alt="Quickbuilder - 02" width="550px"/>
</p>

### Usage 

<p align="justify">
You can either write commands by yourself or use buttons placed in the right bottom corner. For code
</p>

```
header{H3} image{200} list{iconic-3} table{text-3|4} text
```

<p align="justify">
Generated code looks like this
</p>

```git
<h3> Heading </h3>

<img src="https://placehold.it/200"/>

:grey_question: <strong>bold text:</strong> description <br/>
:grey_question: <strong>bold text:</strong> description <br/>
:grey_question: <strong>bold text:</strong> description <br/>

|  header | header | header | header |
|  :---: | :---: | :---: | :---: |
|  text | text | text | text |
|  text | text | text | text |

<p align="center|left|right">text</p>

Template generated using <a href="https://github.com/trolit/EzGitDoc">EzGitDoc</a> Quick Builder tool.
```

<p align="justify">
Which in practise looks like this
</p>

<code>
<h3> Heading </h3>

<img src="https://placehold.it/200"/>

:grey_question: <strong>bold text:</strong> description <br/>
:grey_question: <strong>bold text:</strong> description <br/>
:grey_question: <strong>bold text:</strong> description <br/>

|  header | header | header | header |
|  :---: | :---: | :---: | :---: |
|  text | text | text | text |
|  text | text | text | text |

<p align="center|left|right">text</p>

Template generated using <a href="https://github.com/trolit/EzGitDoc">EzGitDoc</a> Quick Builder tool.
</code>

### Summary

<p align="justify">
Generated code needs some polishes like choosing text alignment and filling in data manually but it's an alternative to what EzGitDoc offers, allowing to quickly create document structure from most crucial elements.
</p>