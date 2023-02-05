export interface FinancialInterface {
    route: {
      params: {
          asset: {
            image: string
            photos: Array<string>
            name: string
            current_price: string
            quantity: number
            description: string
          }
          count: number
        }
      }
  }