export const TokenConfig = {
  tokenPriceInfo: null as string | null,
  showTokenInfo: true,

  get showToken(): boolean {
    return this.showTokenInfo
  },

  set showToken(value: boolean) {
    this.showTokenInfo = value;
  },

  get tokenPrice(): string | null {
    return this.tokenPriceInfo
  },

  set tokenPrice(price: string | null) {
    this.tokenPriceInfo = price;
  }
}
