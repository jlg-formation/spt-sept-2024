import { $ } from "./misc/element.js";

export class Command {
  config = { samples: 0, multiplicationFactor: 0 };
  constructor() {
    this.render();
  }

  render() {
    for (const key of Object.keys(this.config)) {
      $(`div.command label.${key} span.value`).innerHTML =
        this.config[key] + "";

      $(`div.command label.${key} input`, HTMLInputElement).value =
        this.config[key] + "";
    }
  }

  onUpdate(callback) {
    this.callback = callback;
  }

  setConfig(config) {
    this.config = config;
    this.render();
  }
}
