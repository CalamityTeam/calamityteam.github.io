---
title: Brainstorm, Post-Mortem
date: 2026-02-06
author: CDMusic
tags: [announcement, news]
---

# Brainstorm, Post-Mortem

<cite>Written by CDMusic and LordMetarex, edited by Ozzatron + jasper</cite>

<h2 class="text-center">Update 2.1: Brainstorm has arrived!</h2>

Hiya folks!

Happy New Year, and Happy Brainstorm release day! We’re thrilled to finally bring this monumental update to you, and we hope you enjoy what we have to offer in this exciting new era of Calamity.

If you haven't already seen the trailer:
<div class="video-center">
  <div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/oQ74IZaj5Q8" title="YouTube Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>
<figcaption>The Calamity Team does not condone alcohol abuse. Please drink responsibly, both in-game and in real life.</figcaption>
<div class="divider"></div>
<blockquote class="quote-center">
Update 2.1: Brainstorm is our largest update to date, featuring close to 4,000 changes across the board. 
</blockquote>
  <div class="column">
    <h2>Here’s just a few things we’ve included:</h2>
    <ul>
      <li>Reworks to several dozen weapons and accessories.</li>
      <li>Several <strong>boss changes and reworks</strong> <i>(including The Devourer of Gods, The Brain of Cthulhu in Calamity difficulties, and Ravager)</i></li>
      <li><strong>Streamlining</strong> of Calamity's difficulty options and <strong>removal</strong> of Calamity's changes to vanilla bosses on vanilla difficulties</li>
      <li>Several reworked structures - now you can see the labs in a new light</li>
      <li>An uncountable number of bug fixes, performance improvements, and netcode (multiplayer) optimizations</li>
      <li>You know, everything else we've been doing for the past few years...</li>
    </ul>
  </div>
<div class="text-center">
  <p><a href="https://calamitymod.wiki.gg/wiki/2.1">This totals to around <strong>4,000</strong> assorted changes.</a></p>

  Attempting to include even 10% of Brainstorm’s changes would make this news post way too long. You can read the full changelog <a href="https://calamitymod.wiki.gg/wiki/2.1">here</a> which goes into more detail!
</div>

<div class="callout callout-danger text-center">
  <strong>We reiterate:</strong> While this update features some Sunken Sea tiles, this update will <strong>not</strong> include the Sunken Sea Overhaul, which will come later as part of a separate update.
</div>

If you do find any bugs, please join the <a href="https://discord.gg/calamity">Calamity Mod Discord server</a> and report them in the Bug Reports forum! Assistance in bug hunting is greatly appreciated, especially for the nefarious multiplayer bugs - we typically never find them all before release.

<div class="divider-text"><span>THE FUTURE OF CALAMITY...</span></div>

## So, where do we go from here?
With <b>Brainstorm</b> released, the team will be focused on releasing hotfixes over the coming weeks to address any critical issues that arise.

We cannot provide any guarantees or promises of any particular future content at this time. The team will continue to work on <b>Revengeance Mode vanilla boss reworks</b> in the future, although they are not a primary content goal and will usually not be the sole focus of upcoming dedicated updates.

On the topic of Revengeance Mode vanilla boss reworks, the mastermind behind the Brain of Cthulhu rework, Big E has been kind enough to give some insight into the method behind the madness that they have turned this fight into.

<blockquote>
<figure class="img-center img-clean img-medium">
  <img src="/posts/brainstormrelease_assets/BigE.gif" width="100" alt="Calamity Mod Logo" />
  <figcaption>An animated GIF of a dancing letter, which is an biographical portrait depicting Big E.</figcaption>
</figure>

<p class="text-center">Hi all! It's been quite the hectic last few weeks as we all worked to get this update ready for release, and I’m so excited that it's finally out and in your hands! It's my pleasure to share a bit of a peek behind the curtain on the development of one of this update’s major additions: the reworked Brain of Cthulhu fight for Revengeance+ difficulties. If you haven’t gotten the chance to fight it for yourself yet, this is your spoiler warning!
</p>

<p class="text-center">
This fight has been developed over the past eight months, and has come quite a long way. From testing out attack concepts and seeing what worked and what didn’t, to polishing the attack roster and visuals, and lastly getting the fight fully working in both single and multiplayer, a lot of work went into this rework!
</p>

<p class="text-center">
Going into this I had a couple main ideas on what I wanted to do for this rework, but the main one was having the Creepers play a far more important role in the fight. This can be seen all throughout Phase 1 of the fight, with the Creepers being the main threats that need to be evaded and slain. To increase the feel of their presence, I came up with the idea to have them physically connected to the Brain via the tendrils. These tendrils went through a lot of revisions to the look you all see in-game:
</p>
  <div class="img-grid img-grid-2">
  <figure>
    <img src="/posts/brainstormrelease_assets/tendril_before.png" alt="First Iteration Tendrils" />
  </figure>
    <figure>
    <img src="/posts/brainstormrelease_assets/bootiful.png" alt="Altered Positioning Tendril Concept Art" />
  </figure>
</div>
<div class="img-grid img-grid-2">
  <figure class="grid-span-2">
    <img src="/posts/brainstormrelease_assets/tendril_after.png" alt="Later Iteration Tendrils" />
    <figcaption>Originally, I imagined the ‘tendrils’ as more of a psychic connection from the Creepers to the Brain, however as I discussed the ideas for the fight with the rest of the team (<a href="/posts/brainstormrelease_assets/bootiful.png">along with a beautiful piece of concept art by Fryzahh</a>), changing them to actually be physical connections made the most sense.</figcaption>
  </figure>
</div>
    </figure>
<p class="text-center">
Due to shaking up how the fight plays, and having Brain of Cthulhu be damagable in Phase 1, I felt that it’d be more intuitive to give it a visual for when it's immune which became the Psychic Shield seen in the fight. As you can see by the video, it too came a long way.
</p>
    <figure class="img-center">
    <div class="video-center">
  <video controls preload="metadata">
    <source src="/posts/brainstormrelease_assets/ShieldShaderEvolutionDraft3.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <figcaption>The first proper iteration of the shield’s visuals made use of a general shader that you can see employed elsewhere, such as the newly revived Stratus Sphere, however, it became clear that to better get the idea behind the shield across, a unique shader was needed.</figcaption>
</div>
    </figure>

<p class="text-center">
The development process of this fight was very iterative. Many attacks changed radically from their initial conception to how they appear in-game now; with some attacks even ultimately being scrapped. This is pretty natural for developing a cohesive and engaging fight. Here’s a look at some attacks that ultimately didn’t make the cut:
</p>
</p>
    <figure class="img-center">
    <div class="video-center">
  <video controls preload="metadata">
    <source src="/posts/brainstormrelease_assets/globs.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <figcaption>This attack was one of the earlier concepts for Phase 2, and was one I really wanted to make work, but ultimately, it didn’t pan out; mainly due to the inconsistency of the Crimson Caves, and also not working nearly as well when fought on the surface.</figcaption>
</div>
    </figure>
</p>
    <figure class="img-center">
    <div class="video-center">
  <video controls preload="metadata">
    <source src="/posts/brainstormrelease_assets/scythe.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <figcaption>This attack made it a lot further into development, as I liked the idea of Brain of Cthulhu being able to ‘awaken’ the Crimson itself to aid it in the fight. Ultimately it was scrapped due to not really feeling as unique to evade compared to the rest of the roster and also not working as well when fought on the surface.</figcaption>
</div>
    </figure>
<p class="text-center">
I hope you enjoyed this look into how this boss was made! It’s still crazy to me how something I worked on went from a smaller side project to being one of the main additions for an update… I hope y’all can look forward to what else we have in store for the future, as well as more insights like this!
</p>
</blockquote>

<div class="divider-text"><span>VCMM NEWS</span></div>
<figure class="img-center img-pixel">
  <img src="/img/VCMMIcon.png" alt="VCMM Logo" />
</figure>
<h2 class="text-center glow-bars">Upcoming VCMM Update</h2>
<div class="text-center">
Vanilla Calamity Mod Music will be receiving an update in the near future with new music tracks. The update will feature a haunting rendition of the Pumpkin Moon theme created by <span class="musician-entry musician-entry-inline">
  <img
    src="/img/musicians/Evobyte.png"
    alt="Evobyte"
    class="musician-avatar"
  />
</span> <a href="https://www.youtube.com/@evobytemusic" class="musician-name">Evobyte</a>, a bone-chilling release of the Blizzard theme created by <span class="musician-entry musician-entry-inline">
  <img
    src="/img/musicians/TYESKI.png"
    alt="Tyeski"
    class="musician-avatar"
  />
</span> <a href="https://linktr.ee/tyeski" class="musician-name">TYESKI</a>, and a burning “Memory of a Cruel World” remake, created by <span class="musician-entry musician-entry-inline">
  <img
    src="/img/musicians/HPU.png"
    alt="Tyeski"
    class="musician-avatar"
  />
</span> <a href="https://youtube.com/@heartplusup" class="musician-name">Heart Plus Up!</a>.
</div >

<div class="divider-text"><span>Terraria 1.4.5</span></div>


<div class="text-center">
Many of you are likely thinking, “What about Bigger & Boulder? What about the port?”
<h3>To address the boulder in the room:</h3>
</div> 
<div class="text-center"></div>

It is far too early for us to even make guesses about porting Calamity to Terraria and tModLoader 1.4.5.

Calamity Mod __*will*__ be available as soon as possible for tModLoader for 1.4.5, but it is not definite when tModLoader itself will have a complete, viable port for Calamity Mod to port to.

As for the vanilla game, we would like to extend our congratulations to the team over at Re-Logic for reaching yet another huge milestone for their beloved indie title.

# Farewell!

That covers everything we have to discuss this time. We appreciate you taking your time to read through this newsletter, thank you! You can expect another newsletter in June, in which we will be celebrating the 10th anniversary of the Calamity Mod.

<div class="text-center">
We hope you enjoy the Brainstorm update, and we hope to see you again soon!
</div>

<div class="download-action ">
                <a
                  href="https://steamcommunity.com/sharedfiles/filedetails/?id=2824688072"
                  target="_blank"
                  class="steam-button"
                >
                <figure class="img-center img-clean img-medium">
                  <img src="img/steam-download.svg" alt="Download on Steam" />
                  </figure>
                </a>
                <p class="download-note">
                  Requires
                  <a
                    href="https://store.steampowered.com/app/1281930/tModLoader/"
                    target="_blank"
                    >tModLoader</a
                  >
                  on Steam
                </p>
              </div>

_- CDMusic, LordMetarex, Ozzatron and the Calamity Mod Team_
