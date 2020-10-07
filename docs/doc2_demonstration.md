---
id: doc2
title: Demonstration
slug: /demonstration
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p align="justify">
With EzGitDoc it's really simple and quick to create document for repository. Below you will find single example on how that process can look like. Used elements: image, badge(<a href="https://shields.io/">Shields.io</a>), text, list, code, table with images.
</p>

### 1. Design prototype

<p align="center">
<img src={useBaseUrl('img/demonstration/d01.PNG')} alt="EzGitDoc Demonstration - 1" height="450px"/>
</p>

### 2. Get code

````git
<p align="left"><img src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_1280.jpg" alt="programming - banner" width="200"/></p>

<img src="https://img.shields.io/badge/Subject-Computer%20Programming-red?color=2B95E2&style=flat-square" alt="to do: add alt text"/>

<p align="justify">Computer programming is the process of designing and building an executable computer program to accomplish a specific computing result or to perform a specific task. Source: <a href="https://en.wikipedia.org/wiki/Computer_programming" draggable="false">Wikipedia</a></p>

- <a href="https://en.wikipedia.org/wiki/Software_testing">testing</a>
- <a href="https://en.wikipedia.org/wiki/Debugging">debugging</a>

```java
private Integer addTwoIntegers(Integer a, Integer b) {
   return a + b;
}
```

<p align="center">
<img src="https://place-hold.it/250x140" alt="alt text" width="250" height="140"/> 
<img src="https://place-hold.it/250x140" alt="alt text" width="250" height="140"/> 
<br/> 
<img src="https://place-hold.it/250x140" alt="alt text" width="250" height="140"/> 
<img src="https://place-hold.it/250x140" alt="alt text" width="250" height="140"/> 
</p>

Template created on 7/10/2020 <br/> in <a href="https://github.com/trolit/EzGitDoc">EzGitDoc</a>
````

### 3. Preview outcome

<p align="center">
<img src={useBaseUrl('img/demonstration/d02.PNG')} alt="EzGitDoc Demonstration - 2" height="450px"/>
</p>

### 4. Adjust & commit :)

```
Changes:
- increased banner image size 
- removed subject part from badge
- filled in images in table and reduced their width
```

<p align="center">
<img src={useBaseUrl('img/demonstration/d03.PNG')} alt="EzGitDoc Demonstration - 3" height="450px"/>
</p>