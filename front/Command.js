import { $ } from "./misc/element.js";

export class Command {
  config = { samples: 0, multiplicationFactor: 0 };
  constructor() {
    this.render();
    this.setActions();
  }
  setActions() {
    for (const key of Object.keys(this.config)) {
      const elt = $(`div.command label.${key} input`, HTMLInputElement);
      elt.addEventListener("input", () => {
        this.config[key] = +elt.value;
        this.render();
        this.callback(this.config);
      });
    }
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
