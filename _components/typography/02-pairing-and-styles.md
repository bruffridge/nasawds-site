---
type: component
title: Pairings and styles
parent: typography
order: 02
---

<p>To support both more contemporary and more traditional web design aesthetics, this font system offers recommended font pairings. Each pairing includes web hierarchy guidance on font family, weight, size, and spacing which express either more modern or more classical type design.</p>
<p>Note: Some pairings require more font weights than others. While this allows more typographic expression, the use of more than four font weights will have a negative impact on page load performance. Find the balance that works for your product.</p>

<ul class="usa-accordion-bordered usa-typography-example">
  <li>
    <button class="usa-accordion-button"
        aria-controls="font-pairing1-docs"
        aria-expanded="false">
      <h5>Default: Helvetica headings, Merriweather body, Source Sans Pro everywhere else</h5>
    </button>
    <div id="font-pairing1-docs" class="usa-accordion-content">
      <div class="usa-grid-full">
        <div class="usa-width-two-thirds">
          <p>A simple serif and sans serif combination that uses multiple weights of Helvetica for clear headings combined with the formal feeling of Merriweather for body text. Source Sans Pro is used everywhere else such as navigation and UI elements due to it's ability to remain legible and take up less horizontal space than Helvetica. This combination communicates professionalism, with extra emphasis on sleek and legible headings and UI elements.</p>
          <p>Recommended applications: digital services that feature forms; basic and text heavy sites; marketing sites.</p>

          <p>Usage: Apply class <code>.usa-serif</code> to the section(s) containing your body text and Merriweather will be used on all paragraphs, links, list items and spans within the section(s).</p>
          <p>Font weights included in this package:</p>
          <ol>
            <li>Source Sans Pro, Light 300</li>
            <li>Source Sans Pro, Regular 400</li>
            <li>Source Sans Pro, Bold 700</li>
            <li>Merriweather, Regular 400</li>
            <li>Merriweather, Italic 400</li>
            <li>Merriweather, Bold 700</li>
          </ol>
        </div>
        <aside class="usa-width-one-third usa-end-row">
          <h6 class="usa-heading-alt">Page Performance</h6>
          <p><span class="usa-label-big">Fast</span></p>
          <p>Ideal number of fonts. Will allow for optimal page load performance.</p>
          <h6 class="usa-heading-alt">Example</h6>
          <p>
            <a href="https://www1.grc.nasa.gov">NASA Glenn website</a>
          </p>
        </aside>
      </div>
      <h6 class="usa-heading-alt">Web Hierarchy</h6>
      <div class="usa-grid usa-typography-example-font helvetica-style serif-body">
        <div class="usa-width-one-half">
          <h3 class="usa-display">Display 1</h3>
        </div>
        <div class="usa-width-one-half usa-end-row">
          <p class="usa-monospace">
            font-family: ‘Helvetica’<br>
            font-weight: 700<br>
            font-size: 59px<br>
            line-height: 1.2em/71px<br>
            letter-spacing: -.021em
          </p>
        </div>
        <div class="usa-width-one-half">
          <h3 class="usa-display usa-display-alt">Display 2</h3>
        </div>
        <div class="usa-width-one-half usa-end-row">
          <p class="usa-monospace">
            font-family: ‘Helvetica’<br>
            font-weight: 300<br>
            font-size: 44px<br>
            line-height: 1.2em/53px<br>
            letter-spacing: -.021em
          </p>
        </div>
        <div class="usa-width-one-half">
          <h1>Heading 1</h1>
        </div>
        <div class="usa-width-one-half usa-end-row">
          <p class="usa-monospace">
            font-family: ‘Helvetica’<br>
            font-weight: 700<br>
            font-size: 44px<br>
            line-height: 1.2em/53px<br>
            letter-spacing: -.021em
          </p>
        </div>
        <div class="usa-width-one-half">
          <h2>Heading 2</h2>
        </div>
        <div class="usa-width-one-half usa-end-row">
          <p class="usa-monospace">
            font-family: ‘Helvetica’<br>
            font-weight: 700<br>
            font-size: 34px<br>
            line-height: 1.2em/41px<br>
            letter-spacing: -.021em
          </p>
        </div>
        <div class="usa-width-one-half">
          <h3>Heading 3</h3>
        </div>
        <div class="usa-width-one-half usa-end-row">
          <p class="usa-monospace">
            font-family: ‘Helvetica’<br>
            font-weight: 700<br>
            font-size: 24px<br>
            line-height: 1.2em/29px<br>
            letter-spacing: -.021em
          </p>
        </div>
        <div class="usa-width-one-half">
          <h4>Heading 4</h4>
        </div>
        <div class="usa-width-one-half usa-end-row">
          <p class="usa-monospace">
            font-family: ‘Helvetica’<br>
            font-weight: 700<br>
            font-size: 19px<br>
            line-height: 1.2em/23px<br>
            letter-spacing: -.021em
          </p>
        </div>
        <div class="usa-width-one-half">
          <h5>Heading 5</h5>
        </div>
        <div class="usa-width-one-half usa-end-row">
          <p class="usa-monospace">
            font-family: ‘Helvetica’<br>
            font-weight: 700<br>
            font-size: 16px<br>
            line-height: 1.2em/19px<br>
            letter-spacing: -.021em
          </p>
        </div>
        <div class="usa-width-one-half">
          <h6>Heading 6</h6>
        </div>
        <div class="usa-width-one-half usa-end-row">
          <p class="usa-monospace">
            font-family: ‘Helvetica’<br>
            font-weight: 400<br>
            font-size: 13px<br>
            line-height: 1.5em/20px<br>
            text-transform: uppercase<br>
            letter-spacing: -.021em
          </p>
        </div>
        <div class="usa-font-example usa-width-one-half">
          <p class="usa-font-lead">Lead <br>paragraph</p>
        </div>
        <div class="usa-width-one-half usa-end-row">
          <p class="usa-monospace">
            font-family: ‘Source Sans Pro’<br>
            font-weight: 300<br>
            font-size: 22px<br>
            line-height: 1.5em/33px
          </p>
        </div>
        <div class="usa-font-example usa-width-one-half usa-serif">
          <p class="font-example-paragraph">Body copy. A series of sentences together which make a paragraph.</p>
        </div>
        <div class="usa-width-one-half usa-end-row">
          <p class="usa-monospace">
            font-family: ‘Merriweather’<br>
            font-weight: 400<br>
            font-size: 15px<br>
            line-height: 1.7em/26px
          </p>
        </div>
        <div class="usa-font-example usa-width-one-half usa-serif">
          <p class="font-example-paragraph"><em>Italic body copy. A series of sentences together which make a paragraph.</em></p>
        </div>
        <div class="usa-width-one-half usa-end-row">
          <p class="usa-monospace">
            font-family: ‘Merriweather’<br>
            font-style: Italic<br>
            font-weight: 400<br>
            font-size: 15px<br>
            line-height: 1.7em/26px
          </p>
        </div>
      </div>
    </div>
  </li>
</ul>

<ul class="usa-accordion-bordered usa-typography-example">
  <li>
    <button class="usa-accordion-button"
        aria-controls="font-pairing2-docs"
        aria-expanded="false">
      <h5>Helvetica headings, Source Sans Pro body</h5>
    </button>
    <div id="font-pairing2-docs" class="usa-accordion-content">
      <div class="usa-grid-full">
        <div class="usa-width-two-thirds">
          <p>Inspired by the growth of simple and welcoming type in modern web UI design, this suite uses Helvetica and Source Sans Pro exclusively. With a range of weights designed to fit into heading styles to clearly communicate hierarchy of information, this pairing can support both extremely simple designs and more polished, promotional sites.</p>
          <p>Recommended applications: digital services that feature forms; basic and text heavy sites; marketing sites.</p>
          <p>Font weights included in this package:</p>
          <ol>
            <li>Source Sans Pro, Light 300</li>
            <li>Source Sans Pro, Regular 400</li>
            <li>Source Sans Pro, Bold 700</li>
            <li>Source Sans Pro, Italic 400</li>
          </ol>
        </div>
        <aside class="usa-width-one-third usa-end-row">
          <h6 class="usa-heading-alt">Page Performance</h6>
          <p><span class="usa-label-big">Fast</span></p>
          <p>Ideal number of fonts. Will allow for optimal page load performance.</p>
        </aside>
      </div>
      <h6 class="usa-heading-alt">Web Hierarchy</h6>
      <div class="usa-grid usa-typography-example-font helvetica-style sans-body">
        <div class="usa-width-one-half">
          <h3 class="usa-display">Display 1</h3>
        </div>
        <div class="usa-width-one-half usa-end-row">
          <p class="usa-monospace">
            font-family: ‘Helvetica’<br>
            font-weight: 700<br>
            font-size: 59px<br>
            line-height: 1.2em/71px<br>
            letter-spacing: -.021em
          </p>
        </div>
        <div class="usa-width-one-half">
          <h3 class="usa-display usa-display-alt">Display 2</h3>
        </div>
        <div class="usa-width-one-half usa-end-row">
          <p class="usa-monospace">
            font-family: ‘Helvetica’<br>
            font-weight: 300<br>
            font-size: 44px<br>
            line-height: 1.2em/53px<br>
            letter-spacing: -.021em
          </p>
        </div>
        <div class="usa-width-one-half">
          <h1>Heading 1</h1>
        </div>
        <div class="usa-width-one-half usa-end-row">
          <p class="usa-monospace">
            font-family: ‘Helvetica’<br>
            font-weight: 700<br>
            font-size: 44px<br>
            line-height: 1.2em/53px<br>
            letter-spacing: -.021em
          </p>
        </div>
        <div class="usa-width-one-half">
          <h2>Heading 2</h2>
        </div>
        <div class="usa-width-one-half usa-end-row">
          <p class="usa-monospace">
            font-family: ‘Helvetica’<br>
            font-weight: 700<br>
            font-size: 34px<br>
            line-height: 1.2em/41px<br>
            letter-spacing: -.021em
          </p>
        </div>
        <div class="usa-width-one-half">
          <h3>Heading 3</h3>
        </div>
        <div class="usa-width-one-half usa-end-row">
          <p class="usa-monospace">
            font-family: ‘Helvetica’<br>
            font-weight: 700<br>
            font-size: 24px<br>
            line-height: 1.2em/29px<br>
            letter-spacing: -.021em
          </p>
        </div>
        <div class="usa-width-one-half">
          <h4>Heading 4</h4>
        </div>
        <div class="usa-width-one-half usa-end-row">
          <p class="usa-monospace">
            font-family: ‘Helvetica’<br>
            font-weight: 700<br>
            font-size: 19px<br>
            line-height: 1.2em/23px<br>
            letter-spacing: -.021em
          </p>
        </div>
        <div class="usa-width-one-half">
          <h5>Heading 5</h5>
        </div>
        <div class="usa-width-one-half usa-end-row">
          <p class="usa-monospace">
            font-family: ‘Helvetica’<br>
            font-weight: 700<br>
            font-size: 16px<br>
            line-height: 1.2em/19px<br>
            letter-spacing: -.021em
          </p>
        </div>
        <div class="usa-width-one-half">
          <h6>Heading 6</h6>
        </div>
        <div class="usa-width-one-half usa-end-row">
          <p class="usa-monospace">
            font-family: ‘Helvetica’<br>
            font-weight: 400<br>
            font-size: 13px<br>
            line-height: 1.5em/20px<br>
            text-transform: uppercase<br>
            letter-spacing: -.021em
          </p>
        </div>
        <div class="usa-font-example usa-width-one-half">
          <p class="usa-font-lead">Lead <br>paragraph</p>
        </div>
        <div class="usa-width-one-half usa-end-row">
          <p class="usa-monospace">
            font-family: ‘Source Sans Pro’<br>
            font-weight: 300<br>
            font-size: 22px<br>
            line-height: 1.5em/33px
          </p>
        </div>
        <div class="usa-font-example usa-width-one-half">
          <p class="font-example-paragraph">Body copy. A series of sentences together which make a paragraph.</p>
        </div>
        <div class="usa-width-one-half usa-end-row">
          <p class="usa-monospace">
            font-family: ‘Source Sans Pro’<br>
            font-weight: 400<br>
            font-size: 17px<br>
            line-height: 1.5em/26px
          </p>
        </div>
        <div class="usa-font-example usa-width-one-half">
          <p class="font-example-paragraph"><em>Italic body copy. A series of sentences together which make a paragraph.</em></p>
        </div>
        <div class="usa-width-one-half usa-end-row">
          <p class="usa-monospace">
            font-family: ‘Source Sans Pro’<br>
            font-style: Italic<br>
            font-weight: 400<br>
            font-size: 17px<br>
            line-height: 1.5em/26px
          </p>
        </div>
      </div>
    </div>
  </li>
</ul>
