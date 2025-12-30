---
title: Blog Formatting Examples
date: 2025-12-28
author: No One
tags: [example, formatting, guide]
---

# Blog Formatting Examples

This document showcases common formatting patterns for blog posts. Use these as a reference when writing your own posts.

---

## Text Formatting

**Bold text** is written with `**double asterisks**`.

_Italic text_ is written with `*single asterisks*`.

**_Bold and italic_** uses `***triple asterisks***`.

~~Strikethrough~~ uses `~~double tildes~~`.

You can also use HTML: <mark>highlighted text</mark> with `<mark>`.

<div class="text-center">
This paragraph is centered using the <code>text-center</code> class.
</div>

<div class="text-right">
This paragraph is right-aligned using the <code>text-right</code> class.
</div>

---

## Headings

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

<h2 class="text-center">Centered Heading</h2>

---

## Images

### Basic Image

![Blozzatron](https://media.discordapp.net/attachments/1400980165751734357/1454446205571694718/image.png?ex=6951c6d5&is=69507555&hm=86aed605f6720313a1240637ed4ee262904573d08448431ca67e4e9082e0683e&=&format=webp&quality=lossless)

### Centered Image

<div class="img-center">
  <img src="https://media.discordapp.net/attachments/1400980165751734357/1454446205571694718/image.png?ex=6951c6d5&is=69507555&hm=86aed605f6720313a1240637ed4ee262904573d08448431ca67e4e9082e0683e&=&format=webp&quality=lossless" alt="Centered Logo" />
</div>

### Image with Caption

<figure class="img-center">
  <img src="https://calamitymod.com/img/logo.svg" alt="Calamity Mod Logo" />
  <figcaption>it's a calamity.</figcaption>
</figure>

### Small Image (Constrained Width)

<figure class="img-center img-small">
  <img src="https://calamitymod.com/img/logo.svg" alt="Small Logo" />
  <figcaption>A smaller version of the logo using the <code>img-small</code> class.</figcaption>
</figure>

### Medium Image

<figure class="img-center img-medium">
  <img src="https://calamitymod.com/img/logo.svg" alt="Medium Logo" />
  <figcaption>Medium-sized image using the <code>img-medium</code> class.</figcaption>
</figure>

---

## Image Grids

### Two Column Grid

<div class="img-grid img-grid-2">
  <figure>
    <img src="https://media.discordapp.net/attachments/1400980165751734357/1454446205571694718/image.png?ex=6951c6d5&is=69507555&hm=86aed605f6720313a1240637ed4ee262904573d08448431ca67e4e9082e0683e&=&format=webp&quality=lossless" alt="Image 1" />
    <figcaption>First image caption</figcaption>
  </figure>
  <figure>
    <img src="https://media.discordapp.net/attachments/1400980165751734357/1454446205571694718/image.png?ex=6951c6d5&is=69507555&hm=86aed605f6720313a1240637ed4ee262904573d08448431ca67e4e9082e0683e&=&format=webp&quality=lossless" alt="Image 2" />
    <figcaption>Second image caption</figcaption>
  </figure>
</div>

### Three Column Grid

<div class="img-grid img-grid-3">
  <figure>
    <img src="https://media.discordapp.net/attachments/1400980165751734357/1454446205571694718/image.png?ex=6951c6d5&is=69507555&hm=86aed605f6720313a1240637ed4ee262904573d08448431ca67e4e9082e0683e&=&format=webp&quality=lossless" alt="Image 1" />
    <figcaption>Caption 1</figcaption>
  </figure>
  <figure>
    <img src="https://media.discordapp.net/attachments/1400980165751734357/1454446205571694718/image.png?ex=6951c6d5&is=69507555&hm=86aed605f6720313a1240637ed4ee262904573d08448431ca67e4e9082e0683e&=&format=webp&quality=lossless" alt="Image 2" />
    <figcaption>Caption 2</figcaption>
  </figure>
  <figure>
    <img src="https://media.discordapp.net/attachments/1400980165751734357/1454446205571694718/image.png?ex=6951c6d5&is=69507555&hm=86aed605f6720313a1240637ed4ee262904573d08448431ca67e4e9082e0683e&=&format=webp&quality=lossless" alt="Image 3" />
    <figcaption>Caption 3</figcaption>
  </figure>
</div>

### Four Column Grid

<div class="img-grid img-grid-4">
  <img src="https://media.discordapp.net/attachments/1400980165751734357/1454446205571694718/image.png?ex=6951c6d5&is=69507555&hm=86aed605f6720313a1240637ed4ee262904573d08448431ca67e4e9082e0683e&=&format=webp&quality=lossless" alt="Image 1" />
  <img src="https://media.discordapp.net/attachments/1400980165751734357/1454446205571694718/image.png?ex=6951c6d5&is=69507555&hm=86aed605f6720313a1240637ed4ee262904573d08448431ca67e4e9082e0683e&=&format=webp&quality=lossless" alt="Image 2" />
  <img src="https://media.discordapp.net/attachments/1400980165751734357/1454446205571694718/image.png?ex=6951c6d5&is=69507555&hm=86aed605f6720313a1240637ed4ee262904573d08448431ca67e4e9082e0683e&=&format=webp&quality=lossless" alt="Image 3" />
  <img src="https://media.discordapp.net/attachments/1400980165751734357/1454446205571694718/image.png?ex=6951c6d5&is=69507555&hm=86aed605f6720313a1240637ed4ee262904573d08448431ca67e4e9082e0683e&=&format=webp&quality=lossless" alt="Image 4" />
</div>

### Mixed Grid (Uneven)

<div class="img-grid img-grid-3">
  <figure class="grid-span-2">
    <img src="https://media.discordapp.net/attachments/1400980165751734357/1454446205571694718/image.png?ex=6951c6d5&is=69507555&hm=86aed605f6720313a1240637ed4ee262904573d08448431ca67e4e9082e0683e&=&format=webp&quality=lossless" alt="Wide Image" />
    <figcaption>This image spans two columns using <code>grid-span-2</code></figcaption>
  </figure>
  <figure>
    <img src="https://media.discordapp.net/attachments/1400980165751734357/1454446205571694718/image.png?ex=6951c6d5&is=69507555&hm=86aed605f6720313a1240637ed4ee262904573d08448431ca67e4e9082e0683e&=&format=webp&quality=lossless" alt="Square Image" />
    <figcaption>Regular image</figcaption>
  </figure>
</div>

---

## Blockquotes

> This is a standard blockquote.

> **Note:** You can include formatting inside blockquotes, including **bold**, _italic_, and `code`.

<blockquote class="quote-center">
  "This is a centered quote. I did not say this."
  <cite>- Albert Einstein</cite>
</blockquote>

---

## Lists

### Unordered List

- First item
- Second item
- Third item with a longer description that wraps to multiple lines to show how the styling handles longer content fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck
- Fourth item

### Ordered List

1. First step
2. Second step
3. Thirteenth step
4. Fourth step

### Nested Lists

- Parent item
  - Child item 1
  - Child item 2
    - Grandchild item
  - Child item 3
- Another parent item

---

## Code Blocks

### Inline Code

Here is a monospaced `inline code` example.

### Code Block

```
#region Store The Stupid Fucking Private Wind Map In Public Property
[/*TotallyNot*/Obsolete("This function serves no purpose and is included in the Calamity source code for historic value.", error: true)]
private static void StoreWindGrid(On_TileDrawing.orig_Update orig, TileDrawing self)
{
orig(self);
// FUCK YOU FUCK YOU FUCK YOU FUCK YOU FUCK YOU FUCK YOU FUCK YOU FUCK YOU FUCK YOU FUCK
if (Windgrid is null)
Windgrid = typeof(TileDrawing).GetField("_windGrid", BindingFlags.Instance | BindingFlags.NonPublic).GetValue(self) as WindGrid;
}
#endregion Store The Stupid Fucking Private Wind Map In Public Property
```

---

## Tables

| Boss           | Difficulty | Drops             |
| -------------- | ---------- | ----------------- |
| Desert Scourge | Easy       | Sand Bullshit     |
| Crabulon       | Easy       | Mushroom Bullshit |
| Hive Mind      | Medium     | Rotten Bullshit   |
| Perforators    | Medium     | Blood Bullshit    |

<div class="table-center">

| Stat    | Value   |
| ------- | ------- |
| Damage  | 100     |
| Defense | 50      |
| Health  | 250,000 |

</div>

---

## Callout Boxes

<div class="callout callout-info">
  <strong>Info:</strong> What kind of callout is this? This is an informational callout.
</div>

<div class="callout callout-warning">
  <strong>Warning:</strong> What kind of callout is this? This is a warning callout. It warns of something.
</div>

<div class="callout callout-danger">
  <strong>Danger:</strong> What kind of callout is this? This is a danger callout. Use it for critical warnings or breaking changes.
</div>

<div class="callout callout-success">
  <strong>Success:</strong> What kind of callout is this? This is a success callout. Use it to highlight completed features or fixes.
</div>

---

## Spoiler/Collapsible Content

<details>
  <summary>Click to reveal spoiler</summary>
  <p>You can't see me!</p>
</details>

<details class="spoiler-boss">
  <summary>Spoiler</summary>
  <div class="spoiler-content">
    <p>The new boss will feature:</p>
    <ul>
      <li>Something</li>
      <li>Nothing</li>
      <li>I unno. It was scrapped with SSO</li>
    </ul>
  </div>
</details>

---

## Media Embeds

### Video Embed

<div class="video-center">
  <video controls preload="none">
    <source src="https://cdn.discordapp.com/attachments/711551818194485259/1454723113014005993/2025-12-28_01-26-48_video-converter.com.mp4?ex=69521ff9&is=6950ce79&hm=aa3128854bd4f9465a80b98cbd3bdf8b1d3f6e8099e227c77c5a00c555e4b188&" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

### YouTube Embed

<div class="video-center">
  <div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/zUF0hfFWsYM" title="YouTube Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>

### Audio Player

<audio controls preload="none">
  <source src="https://example.com/audio.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>

<div class="audio-center">
  <audio controls preload="none">
    <source src="https://example.com/audio.mp3" type="audio/mpeg" />
  </audio>
  <p class="audio-caption">Track - Artist</p>
</div>

---

## Horizontal Rules / Dividers

use `---` or `***` for standard dividers:

---

styled divider:

<div class="divider"></div>

divider with text:

<div class="divider-text">
  <span>OH THE CALAMITY!</span>
</div>
oh the calamity, oh the calamity!

---

## Badges and Tags

<span class="badge">Boss</span> Did not create something.

<span class="badge badge-primary">Enemies</span> Created something.

<span class="badge badge-success">Balance</span> Broke something.

<span class="badge badge-warning">Experimental</span> Did not get tested.

<span class="badge badge-danger">Breaking</span> Fuck you!

---

## Buttons

<a href="#" class="btn">Go there!</a>
<a href="#" class="btn btn-primary">Go here!</a>
<a href="#" class="btn btn-outline">Go nowhere!</a>

<div class="text-center">
  <a href="#" class="btn btn-primary btn-large">Up to Twenty Two Developers</a>
</div>

---

## Columns Layout

<div class="columns columns-2">
  <div class="column">
    <h4>Left Column</h4>
    <p>Content for the left column goes here. Calamity mod is a mod that does... this.</p>
  </div>
  <div class="column">
    <h4>Right Column</h4>
    <p>Content for the right column goes here. Modify this file with a description of your mod.</p>
  </div>
</div>

<div class="columns columns-3">
  <div class="column">
    <h4>Column 1</h4>
    <p>First column content.</p>
  </div>
  <div class="column">
    <h4>Column 2</h4>
    <p>Second column content.</p>
  </div>
  <div class="column">
    <h4>Column 3</h4>
    <p>Third column content.</p>
  </div>
</div>

---

## Combining Elements

### Supreme Mog

<div class="columns columns-2">
  <div class="column">
    <figure class="img-center">
      <img src="https://i.redd.it/v0we53mxfntc1.png" alt="Feature Screenshot" />
      <figcaption>Stained, Brutal Mewing.</figcaption>
    </figure>
  </div>
  <div class="column">
    <h3>Mewing</h3>
    <p>Calamitas now proves she isn't a clone by mogging the non-Azafurans around her.</p>
    <ul>
      <li>Encourages a stronger jawline</li>
      <li>Will eventually surpass Yharim's aura</li>
      <li>Forbidden, dark Lizahrd technique</li>
    </ul>
    <a href="#" class="btn btn-outline">Youtube Mogging Tutorial</a>
  </div>
</div>
