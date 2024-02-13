import { newSpecPage } from '@stencil/core/testing'
import { XskribaAmbulanceWlList } from '../xskriba-ambulance-wl-list'

describe('xskriba-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XskribaAmbulanceWlList],
      html: `<xskriba-ambulance-wl-list></xskriba-ambulance-wl-list>`
    })

    const wlList = page.rootInstance as XskribaAmbulanceWlList
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll('md-list-item')
    expect(items.length).toEqual(expectedPatients)
  })
})
