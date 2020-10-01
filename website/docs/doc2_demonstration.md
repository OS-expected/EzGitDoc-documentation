---
id: doc2
title: Demonstration
---

<p align="justify">
With EzGitDoc it's really simple and quick to create document for repository. Below you will find single example on how that process can look like. Used elements: image, badge(<a href="https://shields.io/">Shields.io</a>), text, list, code, table with images.
</p>

### 1. Design prototype

![Demonstration(image 1)](../static/img/demonstration/d01.PNG)

### 2. Get code

````git
<p align="left"><img src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_1280.jpg" height="100" alt="Banner image"/></p>

<img src="https://img.shields.io/badge/Subject-Computer%20Programming-red?color=2B9EE2&style=for-the-badge" alt="to do: add alt text"/>

<p align="justify">From <a href="https://en.wikipedia.org/wiki/Computer_programming" draggable="false">Wikipedia:</a> Computer programming is the process of designing and building an executable computer program to accomplish a specific computing result or to perform a specific task. Tasks accompanying and related to programming include: </p>

- testing, 
- debugging,
- source code maintenance,
- build systems implementation,
- derived artifacts management.

```java
private Integer AddTwoIntegers(Integer a, Integer b) {
   return a + b;
}
```

| | | |
| :---: | :---: | :---: |
| <img src="https://place-hold.it/350x140" alt="#toadd" width="350" height="140"/> | <img src="https://place-hold.it/350x140" alt="#toadd" width="350" height="140"/> | <img src="https://place-hold.it/350x140" alt="#toadd" width="350" height="140"/> |
<!-- For image table, it's highly recommended to have the same resolution images. 
 To find best results(no stretches, equal cells), both axis should be adjusted manually. -->

Template generated using <a href="https://github.com/trolit/EzGitDoc">EzGitDoc</a>

````

### 3. Preview outcome

<code>
<p align="left"><img src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_1280.jpg" height="100" alt="Banner image"/></p>

<img src="https://img.shields.io/badge/Subject-Computer%20Programming-red?color=2B9EE2&style=for-the-badge" alt="to do: add alt text"/>

<p align="justify">From <a href="https://en.wikipedia.org/wiki/Computer_programming" draggable="false">Wikipedia:</a> Computer programming is the process of designing and building an executable computer program to accomplish a specific computing result or to perform a specific task. Tasks accompanying and related to programming include: </p>

- testing, 
- debugging,
- source code maintenance,
- build systems implementation,
- derived artifacts management.

```java
private Integer AddTwoIntegers(Integer a, Integer b) {
   return a + b;
}
```

| | | |
| :---: | :---: | :---: |
| <img src="https://place-hold.it/350x140" alt="#toadd" width="350" height="140"/> | <img src="https://place-hold.it/350x140" alt="#toadd" width="350" height="140"/> | <img src="https://place-hold.it/350x140" alt="#toadd" width="350" height="140"/> |
<!-- For image table, it's highly recommended to have the same resolution images. 
 To find best results(no stretches, equal cells), both axis should be adjusted manually. -->

Template generated using <a href="https://github.com/trolit/EzGitDoc">EzGitDoc</a>
</code>

### 4. Adjust outcome & commit :)

```
Changes:
- increased banner image size 
- removed subject part from label
- fixed function name
- filled in images in table (didn't have to change default 340x140 scaling as they fit)
```

<code>
<p align="left"><img src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_1280.jpg" height="170" alt="Banner image"/></p>

<img src="https://img.shields.io/badge/-Computer%20Programming-red?color=2B9EE2&style=for-the-badge" alt="to do: add alt text"/>

<p align="justify">From <a href="https://en.wikipedia.org/wiki/Computer_programming" draggable="false">Wikipedia:</a> Computer programming is the process of designing and building an executable computer program to accomplish a specific computing result or to perform a specific task. Tasks accompanying and related to programming include: </p>

- testing, 
- debugging,
- source code maintenance,
- build systems implementation,
- derived artifacts management.

```java
private Integer addTwoIntegers(Integer a, Integer b) {
   return a + b;
}
```

| | | |
| :---: | :---: | :---: |
| <img src="https://cdn.pixabay.com/photo/2019/06/17/19/48/source-4280758_1280.jpg" alt="Code demo (1)" width="350" height="140"/> | <img src="https://cdn.pixabay.com/photo/2015/09/17/17/25/code-944499_1280.jpg" alt="Code demo (2)" width="350" height="140"/> | <img src="https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png" alt="Code demo (3)" width="350" height="140"/> |
<!-- For image table, it's highly recommended to have the same resolution images. 
 To find best results(no stretches, equal cells), both axis should be adjusted manually. -->

Template generated using <a href="https://github.com/trolit/EzGitDoc">EzGitDoc</a>
</code>