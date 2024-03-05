import { newSpecPage } from '@stencil/core/testing'
import { XskribaAmbulanceWlApp } from '../xskriba-ambulance-wl-app'

describe('xskriba-ambulance-wl-app', () => {
  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [XskribaAmbulanceWlApp],
      html: `<xskriba-ambulance-wl-app base-path="/"></xskriba-ambulance-wl-app>`
    })
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild
    expect(child.tagName.toLocaleLowerCase()).toEqual('xskriba-ambulance-wl-editor')
  })

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [XskribaAmbulanceWlApp],
      html: `<xskriba-ambulance-wl-app base-path="/ambulance-wl/"></xskriba-ambulance-wl-app>`
    })
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild
    expect(child.tagName.toLocaleLowerCase()).toEqual('xskriba-ambulance-wl-list')
  })
})
