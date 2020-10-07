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
    {label: 'Preview', value: 'EzGitDoc'},
    {label: 'Result', value: 'Result'}
  ]}>
  <TabItem value="EzGitDoc">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e1.png')} alt="Example 01"/>
    </p>
  </blockquote>
  </TabItem>
  <TabItem value="Result">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e2.png')} alt="Example 02"/>
    </p>
  </blockquote>
  </TabItem>
</Tabs>

## 2. Header

<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'Preview', value: 'EzGitDoc'},
    {label: 'Result', value: 'Result'}
  ]}>
  <TabItem value="EzGitDoc">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e3.png')} alt="Example 01"/>
    </p>
  </blockquote>
  </TabItem>
  <TabItem value="Result">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e4.png')} alt="Example 02" height="120px"/>
    </p>
  </blockquote>
  </TabItem>
</Tabs>

:::note

<p align="justify">
EzGitDoc is using &lt;h&gt; tags to create headers. It's also possible to use hashtag markdown. HTML tags are 'slightly better' due to the fact that they can be used inside other HTML tags like paragraphs while hashtags not.
</p>

<img src={useBaseUrl('img/examples/e5.png')} alt="Example 05" height="150px"/>

:::

## 3. Image

<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'Preview', value: 'EzGitDoc'},
    {label: 'Result', value: 'Result'}
  ]}>
  <TabItem value="EzGitDoc">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e6.png')} alt="Example 06" height="200px"/>
    </p>
  </blockquote>
  </TabItem>
  <TabItem value="Result">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e7.png')} alt="Example 07" height="200px"/>
    </p>
  </blockquote>
  </TabItem>
</Tabs>

Source: <a href="https://cdn.pixabay.com/photo/2017/08/21/22/21/camel-2667153_1280.jpg">Pixabay</a>

:::note
If you didn't prepare images yet, use blank function and EzGitDoc will use placeholder images which can be overwritten when needed.
:::

## 4. Link

<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'Preview', value: 'EzGitDoc'},
    {label: 'Result', value: 'Result'}
  ]}>
  <TabItem value="EzGitDoc">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e8.png')} alt="Example 08"/>
    </p>
  </blockquote>
  </TabItem>
  <TabItem value="Result">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e9.png')} alt="Example 09" height="45px"/>
    </p>
  </blockquote>
  </TabItem>
</Tabs>

:::note
If you want that single link to be aligned, wrap it inside paragraph and use align attribute.
:::

## 5. List

### 5.1. Iconic

<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'Preview', value: 'EzGitDoc'},
    {label: 'Result', value: 'Result'},
    {label: 'Alt', value: 'Alt'}
  ]}>
  <TabItem value="EzGitDoc">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e10_0.png')} alt="Example 10.0"/>
    </p>
  </blockquote>
  </TabItem>
  <TabItem value="Result">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e10_1.png')} alt="Example 09"/>
    </p>
  </blockquote>
  </TabItem>
  <TabItem value="Alt">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e10_6.png')} alt="Example 09"/>
    </p>
  </blockquote>
  </TabItem>
</Tabs>

:::note
By adding extra linebreak, you can put description of each advantage below title and get output like shown in the 'Alt' tab. 
:::

### 5.2. Normal

<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'Preview', value: 'EzGitDoc'},
    {label: 'Result', value: 'Result'}
  ]}>
  <TabItem value="EzGitDoc">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e10_2.png')} alt="Example 10.0"/>
    </p>
  </blockquote>
  </TabItem>
  <TabItem value="Result">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e10_3.png')} alt="Example 09"/>
    </p>
  </blockquote>
  </TabItem>
</Tabs>

### 5.3. Link
<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'Preview', value: 'EzGitDoc'},
    {label: 'Result', value: 'Result'}
  ]}>
  <TabItem value="EzGitDoc">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e10_4.png')} alt="Example 10.0"/>
    </p>
  </blockquote>
  </TabItem>
  <TabItem value="Result">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e10_5.png')} alt="Example 09"/>
    </p>
  </blockquote>
  </TabItem>
</Tabs>


## 6. Table

### 6.1 Text

<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'Preview', value: 'EzGitDoc'},
    {label: 'Result', value: 'Result'}
  ]}>
  <TabItem value="EzGitDoc">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e11_0.png')} alt="Example 10.0"/>
    </p>
  </blockquote>
  </TabItem>
  <TabItem value="Result">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e11_1.png')} alt="Example 09"/>
    </p>
  </blockquote>
  </TabItem>
</Tabs>

### 6.2 Image

<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'Preview', value: 'EzGitDoc'},
    {label: 'Result', value: 'Result'}
  ]}>
  <TabItem value="EzGitDoc">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e11_2.png')} alt="Example 10.0"/>
    </p>
  </blockquote>
  </TabItem>
  <TabItem value="Result">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e11_3.png')} alt="Example 09"/>
    </p>
  </blockquote>
  </TabItem>
</Tabs>

### 6.3 Kbd / Linked Kbd

<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'Preview', value: 'EzGitDoc'},
    {label: 'Result', value: 'Result'}
  ]}>
  <TabItem value="EzGitDoc">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e11_4.png')} alt="Example 10.0"/>
    </p>
  </blockquote>
  </TabItem>
  <TabItem value="Result">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e11_5.png')} alt="Example 09"/>
    </p>
  </blockquote>
  </TabItem>
</Tabs>

##### Kbd single element

```html
<kbd><img src="https://place-hold.it/100x100" alt="alt text" width="100" height="100"/></kbd> 
```

##### Linked Kbd single element

```html
<a href="https://addurl/"><kbd><img src="https://place-hold.it/100x100" alt="alt text" width="100" height="100"/></kbd></a> 
```

<p align="justify">
Use kbd table to display images and when someone click's them they will appear in fullscreen. Linked kbd can be useful if you want to redirect user to repository or different page. 
</p>

## 7. Text

<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'Preview', value: 'EzGitDoc'},
    {label: 'Result', value: 'Result'}
  ]}>
  <TabItem value="EzGitDoc">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e16.png')} alt="Example 10.0"/>
    </p>
  </blockquote>
  </TabItem>
  <TabItem value="Result">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e16_1.png')} alt="Example 09"/>
    </p>
  </blockquote>
  </TabItem>
</Tabs>

:::note
In the text element you can use HTML tags to extend it like anchor(a), header(h), emphasis(em).
:::

## 8. Badge

<Tabs
  defaultValue="EzGitDoc"
  values={[
    {label: 'Preview', value: 'EzGitDoc'},
    {label: 'Result', value: 'Result'},
    {label: 'Alt', value: 'Alt'}
  ]}>
  <TabItem value="EzGitDoc">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e17_0.png')} alt="Example 10.0"/>
    </p>
  </blockquote>
  </TabItem>
  <TabItem value="Result">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e17_1.png')} alt="Example 09"/>
    </p>
  </blockquote>
  </TabItem>
  <TabItem value="Alt">
  <blockquote>
    <p>
        <img src={useBaseUrl('img/examples/e17_2.png')} alt="Example 09" height="30px"/>
    </p>
  </blockquote>
  </TabItem>
</Tabs>

<p align="justify">
Labels are great to give short information. EzGitDoc allows to make static badges but you can make dynamic ones by yourself or use predefined. Visit <a href="https://shields.io/">Shields.io</a> to learn more. If you want labels to stay in one line like in Alt tab demonstration, simply leave just one whitespace between them. 
</p>