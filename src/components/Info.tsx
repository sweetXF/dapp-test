import { formatUnits } from "viem";
import { useAccount, useBalance } from "wagmi"

const Info=()=>{
    const {address}=useAccount();
    const {data,error}=useBalance({address});
    console.log('error',error);
    return (
        <div>
            <div>
                <span className="text-red-700">Address：</span> 
                {address}
            </div>
            {
                data && <div>ETH Balance:formatted-{data?.formatted},value formatUnits-{formatUnits(data?.value,18)}</div>
            }

        </div>
    )
}
export default Info