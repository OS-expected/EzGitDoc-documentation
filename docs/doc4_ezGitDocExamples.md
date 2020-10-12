---
id: doc4
title: Examples
slug: /examples
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p align="justify">
Here you will find some examples on how each element is being displayed on EzGitDoc page and how generated code looks in *.md file. Most of them are generated in HTML tags but not all like text list, table. Currently there are no plans on separating those approaches as with raw markdown you cannot for example set image width/height or align it. 
</p>

## 1. Code

<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'EzGitDoc', value: 'EzGitDoc'},
    {label: 'Preview', value: 'Result'}
  ]}>
  <TabItem value="EzGitDoc">

    ```javascript
      var parts = document.getElementsByClassName('myPart');
      var firstPart = parts.item(0);
      var firstPartTagName = firstPart.tagName;
    ```
    
  </TabItem>
  <TabItem value="Result">

  ```js
    // note that highlighting themes can differ
    var parts = document.getElementsByClassName('myPart');
    var firstPart = parts.item(0);
    var firstPartTagName = firstPart.tagName;
  ```
    
  </TabItem>
</Tabs>

## 2. Header

:::note

<p align="justify">
EzGitDoc is using &lt;h&gt; tags to create headers. It's also possible to use hashtag markdown. HTML tags are 'slightly better' due to the fact that they can be used inside other HTML tags like paragraphs while hashtags not.
</p>

<img src={useBaseUrl('img/examples/e5.png')} alt="Example 05"/>

:::

<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'EzGitDoc', value: 'EzGitDoc'},
    {label: 'Preview', value: 'Result'}
  ]}>
  <TabItem value="EzGitDoc">

```html
<h2>Hey there 2</h2>

<h3>Hey there 3</h3>

<h4>Hey there 4</h4>
```

  </TabItem>
  <TabItem value="Result">

  <code>
    <h2>Hey there 2</h2>
    <h3>Hey there 3</h3>
    <h4>Hey there 4</h4>
  </code>
    
  </TabItem>
</Tabs>

## 3. Image

:::note
If you didn't prepare images yet, leave word blank in URL field and EzGitDoc will use placeholder images which can be overwritten when needed.
:::

<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'EzGitDoc', value: 'EzGitDoc'},
    {label: 'Preview', value: 'Result'}
  ]}>
  <TabItem value="EzGitDoc">

```html
<p align="left"><img src="https://cdn.pixabay.com/photo/2018/03/11/08/47/dog-3216207_1280.png" alt="Image 1" width="150"/></p>

<p align="center"><img src="https://cdn.pixabay.com/photo/2018/03/11/08/47/dog-3216207_1280.png" alt="Image 2" width="150"/></p>

<p align="right"><img src="https://cdn.pixabay.com/photo/2018/03/11/08/47/dog-3216207_1280.png" alt="Image 3" width="150"/></p>
```

  </TabItem>
  <TabItem value="Result">

  <code>
    <p align="left"><img src="https://cdn.pixabay.com/photo/2018/03/11/08/47/dog-3216207_1280.png" alt="Image 1" width="150"/></p>
    <p align="center"><img src="https://cdn.pixabay.com/photo/2018/03/11/08/47/dog-3216207_1280.png" alt="Image 2" width="150"/></p>
    <p align="right"><img src="https://cdn.pixabay.com/photo/2018/03/11/08/47/dog-3216207_1280.png" alt="Image 3" width="150"/></p>
  </code>
    
  </TabItem>
</Tabs>

Example image from: <a href="https://pixabay.com/pl/vectors/pies-komiczny-portret-zwierz%C4%85t-3216207/" target="_blank">pixabay.com</a>

## 4. Link

:::note
If you want to align single link(center/right), wrap it inside paragraph and use align attribute.
:::

<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'EzGitDoc', value: 'EzGitDoc'},
    {label: 'Preview', value: 'Result'}
  ]}>
  <TabItem value="EzGitDoc">

```html
<a href="https://trolit.github.io/EzGitDoc">Link to EzGitDoc</a>
```

  </TabItem>
  <TabItem value="Result">

  <code>
    <a href="https://trolit.github.io/EzGitDoc">Link to EzGitDoc</a>  
  </code>
    
  </TabItem>
</Tabs>

## 5. List

### 5.1. Iconic

:::note
By adding extra linebreak before description, you can put it's text below title. 
:::

<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'EzGitDoc', value: 'EzGitDoc'},
    {label: 'Preview', value: 'Result'}
  ]}>
  <TabItem value="EzGitDoc">

```html
:smiley: <strong>Note 1</strong>: Blabla 1<br/><br/>
:smiley: <strong>Note 2</strong>: Blabla 2<br/><br/>
:smiley: <strong>Note 3</strong>: Blabla 3<br/><br/>
:smiley: <strong>Note 4</strong>: Blabla 4<br/><br/>
:smiley: <strong>Note 5</strong>: Blabla 5
```

  </TabItem>
  <TabItem value="Result">

  <code>
    😃 <strong>Note 1</strong>: Blabla 1<br/><br/>
    😃 <strong>Note 2</strong>: Blabla 2<br/><br/>
    😃 <strong>Note 3</strong>: Blabla 3<br/><br/>
    😃 <strong>Note 4</strong>: Blabla 4<br/><br/>
    😃 <strong>Note 5</strong>: Blabla 5
  </code>
    
  </TabItem>
</Tabs>

### 5.2. Normal

<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'EzGitDoc', value: 'EzGitDoc'},
    {label: 'Preview', value: 'Result'}
  ]}>
  <TabItem value="EzGitDoc">

```md
- List item 1
- List item 2
- List item 3
- List item 4
- List item 5
```

  </TabItem>
  <TabItem value="Result">

  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
    <li>List item 4</li>
    <li>List item 5</li>
  </ul>

  </TabItem>
</Tabs>

### 5.3. Link
<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'EzGitDoc', value: 'EzGitDoc'},
    {label: 'Preview', value: 'Result'}
  ]}>
  <TabItem value="EzGitDoc">

```html
- <a href="https://#to_do:add_href">Link 1</a>
- <a href="https://#to_do:add_href">Link 2</a>
- <a href="https://#to_do:add_href">Link 3</a>
- <a href="https://#to_do:add_href">Link 4</a>
- <a href="https://#to_do:add_href">Link 5</a>
```

  </TabItem>
  <TabItem value="Result">

  <ul>
    <li><a href="https://#to_do:add_href">Link 1</a></li>
    <li><a href="https://#to_do:add_href">Link 2</a></li>
    <li><a href="https://#to_do:add_href">Link 3</a></li>
    <li><a href="https://#to_do:add_href">Link 4</a></li>
    <li><a href="https://#to_do:add_href">Link 5</a></li>
  </ul>

  </TabItem>
</Tabs>


## 6. Table

### 6.1 Text

<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'EzGitDoc', value: 'EzGitDoc'},
    {label: 'Preview', value: 'Result'}
  ]}>
  <TabItem value="EzGitDoc">

```md
| Name | Age | Country |
| :---: | :---: | :---: |
| Adam | 23 | Poland |
| Adrian | 23 | Poland |
```

  </TabItem>
  <TabItem value="Result">

| Name | Age | Country |
| :---: | :---: | :---: |
| Adam | 23 | Poland |
| Adrian | 23 | Poland |

  </TabItem>
</Tabs>

### 6.2 Image

<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'EzGitDoc', value: 'EzGitDoc'},
    {label: 'Preview', value: 'Result'}
  ]}>
  <TabItem value="EzGitDoc">

```html
| | |
| :---: | :---: |
| <img src="https://place-hold.it/150x100" alt="#toadd" width="150" height="100"/> | <img src="https://place-hold.it/150x100" alt="#toadd" width="150" height="100"/> |
| <img src="https://place-hold.it/150x100" alt="#toadd" width="150" height="100"/> | <img src="https://place-hold.it/150x100" alt="#toadd" width="150" height="100"/> |
```

  </TabItem>
  <TabItem value="Result">

| | |
| :---: | :---: |
| <img src="https://place-hold.it/150x100" alt="#toadd" width="150" height="100"/> | <img src="https://place-hold.it/150x100" alt="#toadd" width="150" height="100"/> |
| <img src="https://place-hold.it/150x100" alt="#toadd" width="150" height="100"/> | <img src="https://place-hold.it/150x100" alt="#toadd" width="150" height="100"/> |

  </TabItem>
</Tabs>

### 6.3 Kbd / Linked Kbd

:::note

Use kbd table to display images and when someone click's them they will appear in fullscreen. Linked kbd can be useful if you want to redirect user to repository or different page. 

:::

<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'EzGitDoc', value: 'EzGitDoc'},
    {label: 'Preview', value: 'Result'}
  ]}>
  <TabItem value="EzGitDoc">

```html
<p align="center">
<kbd><img src="https://place-hold.it/150x130" alt="alt text" width="150" height="130"/></kbd> 
<kbd><img src="https://place-hold.it/150x130" alt="alt text" width="150" height="130"/></kbd> 
<br/> 
<kbd><img src="https://place-hold.it/150x130" alt="alt text" width="150" height="130"/></kbd> 
<kbd><img src="https://place-hold.it/150x130" alt="alt text" width="150" height="130"/></kbd> 
</p>
```

  </TabItem>
  <TabItem value="Result">

  <p align="center">
  Result may differ on different sites<br/><br/>
  <kbd><img src="https://place-hold.it/150x130" alt="alt text" width="150" height="130"/></kbd> 
  <kbd><img src="https://place-hold.it/150x130" alt="alt text" width="150" height="130"/></kbd> 
  <br/> 
  <kbd><img src="https://place-hold.it/150x130" alt="alt text" width="150" height="130"/></kbd> 
  <kbd><img src="https://place-hold.it/150x130" alt="alt text" width="150" height="130"/></kbd> 
  </p>

  </TabItem>
</Tabs>

#### Difference between kbd and linked kbd

##### kbd single element

```html
<kbd><img src="https://place-hold.it/100x100" alt="alt text" width="100" height="100"/></kbd> 
```

##### linked kbd single element

```html
<a href="https://addurl/"><kbd><img src="https://place-hold.it/100x100" alt="alt text" width="100" height="100"/></kbd></a> 
```

## 7. Text

:::note

In the text element you can use HTML tags to extend it like anchor(a), header(h), emphasis(em) etc.

:::

<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'EzGitDoc', value: 'EzGitDoc'},
    {label: 'Preview', value: 'Result'}
  ]}>
  <TabItem value="EzGitDoc">

```html
<p>Here it comes! Lorem ipsum!</p>

<p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do
lor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exc
epteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit a
nim id est laborum.</p>
```

  </TabItem>
  <TabItem value="Result">

<p>Here it comes! Lorem ipsum!</p>

<p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do
lor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exc
epteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit a
nim id est laborum.</p>

  </TabItem>
</Tabs>

## 8. Badge

:::note

<p align="justify">
Labels are great to give short information. EzGitDoc allows to make static badges but you can make dynamic ones by yourself or use predefined. Visit <a href="https://shields.io/">Shields.io</a> to learn more.
</p>

:::

:::note

<p align="justify">
To give between badges some space you can use for e.g. HTML character code<code>&amp;nbsp;</code>(result shown in fixed preview tab) or linebreaks(br).
</p>

:::

<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'EzGitDoc', value: 'EzGitDoc'},
    {label: 'Preview', value: 'Result'},
    {label: 'Fixed Preview', value: 'Fixed'},
  ]}>
  <TabItem value="EzGitDoc">

```html
<img src="https://img.shields.io/badge/Badge-N1-red?color=9B2BE2" alt="to do: add alt text"/>

<img src="https://img.shields.io/badge/Badge-N2-red?color=2B95E2&style=plastic" alt="to do: add alt text"/>

<img src="https://img.shields.io/badge/Badge-N3-red?color=2BE29B&style=flat-square" alt="to do: add alt text"/>

<img src="https://img.shields.io/badge/Badge-N4-red?color=A7E22B&style=for-the-badge" alt="to do: add alt text"/>

<img src="https://img.shields.io/badge/Badge-N5-red?color=E2A32B&style=social" alt="to do: add alt text"/>
```

  </TabItem>
  <TabItem value="Result">

<img src="https://img.shields.io/badge/Badge-N1-red?color=9B2BE2" alt="to do: add alt text"/>

<img src="https://img.shields.io/badge/Badge-N2-red?color=2B95E2&style=plastic" alt="to do: add alt text"/>

<img src="https://img.shields.io/badge/Badge-N3-red?color=2BE29B&style=flat-square" alt="to do: add alt text"/>

<img src="https://img.shields.io/badge/Badge-N4-red?color=A7E22B&style=for-the-badge" alt="to do: add alt text"/>

<img src="https://img.shields.io/badge/Badge-N5-red?color=E2A32B&style=social" alt="to do: add alt text"/>

  </TabItem>
  <TabItem value="Fixed">

<img src="https://img.shields.io/badge/Badge-N1-red?color=9B2BE2" alt="to do: add alt text"/> &nbsp;

<img src="https://img.shields.io/badge/Badge-N2-red?color=2B95E2&style=plastic" alt="to do: add alt text"/> &nbsp;

<img src="https://img.shields.io/badge/Badge-N3-red?color=2BE29B&style=flat-square" alt="to do: add alt text"/> &nbsp;

<img src="https://img.shields.io/badge/Badge-N4-red?color=A7E22B&style=for-the-badge" alt="to do: add alt text"/> &nbsp;

<img src="https://img.shields.io/badge/Badge-N5-red?color=E2A32B&style=social" alt="to do: add alt text"/>

  </TabItem>
</Tabs>

## 9. Details

:::note

<p align="justify">
<code>Details-summary</code> is handy element to make documentation more compact by hiding specific problems or explanations under title which then can be expanded by user to see details.
</p>

:::

<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'EzGitDoc', value: 'EzGitDoc'},
    {label: 'Preview', value: 'Result'}
  ]}>
  <TabItem value="EzGitDoc">

```html
<details>
<summary>This is my summary</summary>
First thing:<br/>
<a href="https://trolit.github.io/EzGitDoc">EzGitDoc</a><br/>
Second thing:<br/>
<a href="https://trolit.github.io/EzGitDoc-documentation/">Documentation</a>
</details>
```

  </TabItem>
  <TabItem value="Result">

<details>
<summary>This is my summary</summary>
First thing:<br/>
<a href="https://trolit.github.io/EzGitDoc">EzGitDoc</a><br/>
Second thing:<br/>
<a href="https://trolit.github.io/EzGitDoc-documentation/">Documentation</a>
</details>

  </TabItem>
</Tabs>