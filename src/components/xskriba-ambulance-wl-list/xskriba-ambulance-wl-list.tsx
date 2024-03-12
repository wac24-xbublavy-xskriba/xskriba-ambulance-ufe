import { Component, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core'

import { AmbulanceWaitingListApiFactory, WaitingListEntry } from '../../api/ambulance-wl'

@Component({
  tag: 'xskriba-ambulance-wl-list',
  styleUrl: 'xskriba-ambulance-wl-list.css',
  shadow: true
})
export class XskribaAmbulanceWlList {
  @Event({ eventName: 'entry-clicked' }) entryClicked: EventEmitter<string>
  @Prop() apiBase: string
  @Prop() ambulanceId: string
  @State() errorMessage: string

  waitingPatients: WaitingListEntry[]

  private async getWaitingPatientsAsync(): Promise<WaitingListEntry[]> {
    try {
      const response = await AmbulanceWaitingListApiFactory(undefined, this.apiBase).getWaitingListEntries(this.ambulanceId)

      if (response.status < 299) return response.data

      this.errorMessage = `Cannot retrieve list of waiting patients: ${response.statusText}`
    } catch (err: any) {
      this.errorMessage = `Cannot retrieve list of waiting patients: ${err.message || 'unknown'}`
    }

    return []
  }

  async componentWillLoad() {
    this.waitingPatients = await this.getWaitingPatientsAsync()
  }

  render() {
    return (
      <Host>
        <md-list>
          {this.errorMessage ? (
            <div class="error">{this.errorMessage}</div>
          ) : (
            this.waitingPatients.map(patient => (
              <md-list-item onClick={() => this.entryClicked.emit(patient.id)}>
                <div slot="headline">{patient.name}</div>
                <div slot="supporting-text">{'Predpokladaný vstup: ' + this.isoDateToLocale(patient.estimatedStart)}</div>
                <md-icon slot="start">person</md-icon>
              </md-list-item>
            ))
          )}
        </md-list>

        <md-filled-icon-button class="add-button" onclick={() => this.entryClicked.emit('@new')}>
          <md-icon>add</md-icon>
        </md-filled-icon-button>
      </Host>
    )
  }

  private isoDateToLocale(iso: string) {
    if (!iso) return ''
    return new Date(Date.parse(iso)).toLocaleTimeString()
  }
}
