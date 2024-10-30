import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    siteKey: String
  }

  connect() {
    var buttonColor = this.button.style.backgroundColor
    this.button.disabled = true
    this.button.style.backgroundColor = "gray";
    this.id = turnstile.render(this.element, {
      sitekey: this.siteKeyValue,
      callback: () => { this.button.disabled = false; this.button.style.backgroundColor = buttonColor }
    })
  }

  disconnect() {
    turnstile.remove(this.id)
  }

  get button() {
    return document.querySelector("button[type=submit]")
  }
}