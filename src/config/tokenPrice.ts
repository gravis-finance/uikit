export const TokenConfig = {
  tokenPriceInfo: null as string | null,
  showTokenInfo: false,
  tokenLinkInfo: '',

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
  },

  get tokenLink(): string {
    return this.tokenLink;
  },

  set tokenLink(link: string) {
    this.tokenLink = link;
  }

}
