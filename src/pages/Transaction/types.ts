export interface TransactionInterface {
    route: {
      params: {
        data: {
          asset: {
            current_date: string
            name: string
            bvmf: string
            current_price: string
            quantity: number
          }
          count: number
        }
      }
    }
  }
  
  export type TransactionType = {
    asset: {
      id: string
      current_date: string
      name: string
      bvmf: string
      current_price: string
      quantity: number
    }
    count: number
  }
  