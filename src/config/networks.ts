import { networksConfig } from '../widgets/WalletModal'
import { NetworksConfig } from '../widgets/WalletModal/types'

export enum networksName {
  HUOBI = 'huobi',
  BINANCE = 'binance',
  POLYGON = 'polygon',
  ETHEREUM = 'ethereum'
}


export const NetworksConfigObject = {
  networksConfig: [networksName.BINANCE, networksName.POLYGON] as string[],

  // eslint-disable-next-line
  // @ts-ignore
  get networks(): NetworksConfig[] {
    const newNetworks = Object.fromEntries(Object.entries(networksConfig).filter(network => this.networksConfig.includes(network[0])))

    // eslint-disable-next-line
    // @ts-ignore
    const result = []

    this.networksConfig.forEach((network)=>{
      if(Object.entries(newNetworks).find(n=>n[0] === network)) {
        result.push(Object.entries(newNetworks).find(n=>n[0] === network))
      }
    })

    // eslint-disable-next-line
    // @ts-ignore
    const sortedNetworks = Object.fromEntries(result)

    return Object.keys(sortedNetworks).map(
      (networkKey) => newNetworks[networkKey as keyof typeof newNetworks]
    );
  },

  set networks(networks: networksName[]) {
    this.networksConfig = networks;
  }
}
