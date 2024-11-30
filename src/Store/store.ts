import { makeAutoObservable } from "mobx";

class GlobalStore {
  data = {};
  isMobile = false;

  constructor() {
    makeAutoObservable(this);
  }

  setData = (value = {}) => {
    this.data = value;
  };

  setIsMobile = (value = false) => {
    this.isMobile = value;
  }
}

export default new GlobalStore();