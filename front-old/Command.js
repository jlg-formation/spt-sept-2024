import { $ } from "./misc/element.js";
import { sleep } from "./misc/sleep.js";

export class Command {
  config = { samples: 0, multiplicationFactor: 0 };
  isPlaying = false;

  /** @type {(config: { samples: number, multiplicationFactor: number }) => void} */
  callback;

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

    this.setPlayAction();
    this.setRandomAction();
  }

  setRandomAction() {
    $("div.command div.buttons button.random").addEventListener(
      "click",
      async () => {
        const response = await fetch("/api/random-config");
        const config = await response.json();
        console.log("config: ", config);
        this.setConfig(config);
        this.callback(this.config);
      }
    );
  }

  setPlayAction() {
    $("div.command div.buttons button.play").addEventListener("click", () => {
      this.isPlaying = !this.isPlaying;
      this.render();
      if (this.isPlaying) {
        this.startPlaying();
      }
    });
  }

  async startPlaying() {
    while (this.isPlaying) {
      await sleep(16);
      this.config.multiplicationFactor += 0.01;
      this.config.multiplicationFactor %= 100;
      this.config.multiplicationFactor =
        +this.config.multiplicationFactor.toFixed(2);
      this.render();
      this.callback(this.config);
    }
  }

  render() {
    for (const key of Object.keys(this.config)) {
      $(`div.command label.${key} span.value`).innerHTML =
        this.config[key] + "";

      $(`div.command label.${key} input`, HTMLInputElement).value =
        this.config[key] + "";

      $("div.command div.buttons button.play").innerHTML = this.isPlaying
        ? "⏸Pause"
        : "⏵Lecture";
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
