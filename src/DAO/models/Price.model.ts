export default class PriceModel {
    static get model() {
        return 'prices'
    }

    static get schema() {
        return {
            price: Number
        }
    }
}