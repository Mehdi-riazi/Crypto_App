
const BASE_URL = "https://api.coingecko.com/api/v3"
const API_KEY = "CG-g3XukGGTP84DHQtBgmqdBCRg"

const getCoinList = () => {
    return `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&x_cg_demo_api_key=${API_KEY}`;
}
export {getCoinList}