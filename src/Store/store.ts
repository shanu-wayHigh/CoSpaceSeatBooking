import { makeAutoObservable } from "mobx";

export type PropsType = {
  name: string,
  address: string,
  images: string[],
  google_maps_url: string,
  day_pass_price: number
}

class GlobalStore {
  data: PropsType[] = [];
  isMobile: boolean = false;
  isLoading: boolean = true;
  showDivision: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setData = (value = []) => {
    this.data = value;
  };

  setIsMobile = (value = false) => {
    this.isMobile = value;
  }

  setIsLoading = (value = false) => {
    this.isLoading = value;
  }

  setShowDivision = (value = false) => {
    this.showDivision = value;
  }
}

const globalStore = new GlobalStore();
export default globalStore;