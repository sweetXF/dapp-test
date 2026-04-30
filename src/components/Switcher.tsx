import { useAccount, useChains, useSwitchChain } from "wagmi";
import styles from '../styles/Home.module.css'

const NetworkSwitcher=()=>{
    //获取当前钱包账户信息。chain钱包地址,chainId当前钱包所在链ID，isConnected是否已连接
    const {chain,chainId,isConnected}=useAccount();
    // 切换钱包网络（链），让钱包切换到指定链（如从 ETH主网 切到 Sepolia测试网）。
    const {switchChain}=useSwitchChain();
    // 获取当前配置的所有链列表（如 ETH、Sepolia、Polygon 等）。
    const chains=useChains();
    console.log({chain,chains},'chain')
    return (
        <div>
        <div>Current ChainId:{chainId}</div>
        <div>Current Chain Name:{chain?.name}</div>
        {
            isConnected && <div className={styles.options}>
                {
                    chains.filter(v=>v.id!==chainId).map(v=>
                    <button onClick={()=>switchChain({chainId:v.id})}
                    key={v.id}> switch to {v.name}</button>)
                }
            </div>
        }
        </div>

        
    )
}

export default NetworkSwitcher;