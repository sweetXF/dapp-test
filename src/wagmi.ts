import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {http} from 'wagmi';
import {mainnet,optimism,polygon, sepolia } from 'wagmi/chains';

console.log("WalletConnect Project ID:", process.env.NEXT_PUBLIC_WALLETCONNECT_ID);
// console.log("Infura Key:", process.env.NEXT_PUBLIC_INFURA_KEY);

// 配置所需的链并生成所需的连接器。
export const config=getDefaultConfig({
    appName:"My RainbowKit App",

    // 在https://dashboard.reown.com/中创建项目后获取项目id，通信协议，连接钱包的必备钥匙（连接钱包、展示地址、切换网络）。
    projectId:process.env.NEXT_PUBLIC_WALLETCONNECT_ID!,
    
    chains:[mainnet,optimism,polygon, sepolia],
    // 主网 / Polygon / Optimism / Sepolia 都有Wagmi内置的免费公共RPC节点
    transports:{
        [mainnet.id]:http(),
        [optimism.id]:http(),
        [polygon.id]:http(),
        // NEXT_PUBLIC_INFURA_KEY：从https://infura.io中获取稳定节点，链数据访问通道。
        // [sepolia.id]: http(`https://sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_KEY}`)
        [sepolia.id]:http()
    },
    // 服务器端渲染(SSR)
    ssr:true 
})
