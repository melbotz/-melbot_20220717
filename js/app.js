
// IMPORTS
import { render, html } from '../js/preacthtm.js'
import '../js/dior.js'
import '../js/nostrefresh.js'

// COMPONENTS
import Navbar from '../components/Navbar.js'
import Bookmarks from '../components/Bookmarks.js'

// INIT
var doc = di.data
var bookmarks = doc.bookmark

// RENDER
render(
  html`
          <${Navbar} title="${di.data.gitmark['nick']}" />


          <div style="font-family: monospace" class="row">
          <div class="card 1 col">
          <div class="tc">
          <strong>${doc.gitmark['nick']}</strong> <br/>
          <img
            src="https://robohash.org/gitmark:6e8f742a437eff5944d0e761d55a76d7383b9e7728df41e1d7b6e39c2a03ced4:0"
          />
          </div>
          </div>
          <div class="card 11 col">
          

              <p>
              Energy: ${doc.energy} Marks <br/>
              Birth: ${doc.birth} <br/>
      Address: <a style="color: blue" href="https://chainz.cryptoid.info/marks/address.dws?${di
      .data.address}.htm" target="_blank">${doc.address}</a> <br/>
        Nostr: <a  style="color: blue" href="http://bitbots.org:2617/?pubkey=${doc.nostrkey}" target="_blank">${doc.nostrkey}</a>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div style="margin-top: auto">
        <button class="btn b-gray large"><a style="color: blue" href="${doc.previous}">⏪</a></button>
        
        <button class="btn b-gray large"><a style="color: blue" href="${doc.next}">⏩</a></button>
        </div>
        
              </p>
            </div>

          </div>

          <h4 class="tc">Bookmarks</h4>

          <div class="row">
          <div class="card col tc">

          <${Bookmarks} bookmarks="${bookmarks}" />
          </div>
          </div>


          <h4>Activity</h4>
          <pre>
      <a style="color: blue"
                  href="https://gitmark.info/${doc.gitmark['@id'].split(
        ':'
      )[1]}"
                  target="_blank"
                  >Genesis</a
                >
                  </pre>

          <footer>
            |
            <a
              style="color: blue"
              href="https://gitmark.info/${doc.gitmark['@id'].split(
        ':'
      )[1]}"
              target="_blank"
              >${doc.gitmark['@id']}</a
            >
            |
          </footer>
        `,
  document.body
)

console.log(doc)
