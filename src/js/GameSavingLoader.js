import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return read().then((buffer) => json(buffer));
  }
}
