import { networksConfig } from '../widgets/WalletModal'
import { NetworksConfig } from '../widgets/WalletModal/types'

export enum networksName {
  HUOBI = 'huobi',
  BINANCE = 'binance',
  POLYGON = 'polygon',
  ETHEREUM = 'ethereum'
}


const NetworksConfigObject = {
  networksConfig: [networksName.BINANCE, networksName.POLYGON] as string[],

  // eslint-disable-next-line
  // @ts-ignore
  get networks(): NetworksConfig[] {
    const newNetworks = Object.fromEntries(Object.entries(networksConfig).filter(network => this.networksConfig.includes(network[0])))

    return Object.keys(newNetworks).map(
      (networkKey) => newNetworks[networkKey as keyof typeof newNetworks]
    );
  },

  set networks(networks: networksName[]) {
    this.networksConfig = networks;
  }
}

export default NetworksConfigObject
