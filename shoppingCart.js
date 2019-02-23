function Product(code, name, quantity, unitUom, unitCbm, unitWeight, unitPrice){
    this.code = code
    this.name = name
    this.quantity = quantity
    this.unitUom = unitUom
    this.unitCbm = unitCbm
    this.unitWeight = unitWeight
    this.unitPrice = unitPrice
}
var product = new Product()

function ShoppingCart(){
    this.productList = []
    this.getItems = function(){

        console.log("--- PRODUCT LIST ----------------------------------------")
        for(var i=0; i < this.productList.length; i++) {
            var product = this.productList[i]
            console.log("--- CODE " + product.code + " ---------")
            console.log("Name: " + product.name)
            console.log("Quantity: " + product.quantity)
            console.log("Unit Price: " + product.unitPrice)
            console.log("Unit CBM: " + product.unitCbm)
            console.log("Unit Weight: " + product.unitWeight)
            console.log("Total CBM: " + product.unitCbm*product.quantity)
            console.log("Total Weight: " + product.unitWeight*product.quantity)
            console.log("Total Price: " + product.unitPrice*product.quantity)
            console.log("-----------------------------------------")
        }
        console.log("----------------------------------------------------------")
    }
    this.getTotalPrice = function(){
        //var result = []
        var totalPrice = 0;
        for(var i=0; i < this.productList.length; i++) {
            var product = this.productList[i]
            total = product.quantity * product.unitPrice
            totalPrice = totalPrice + total
        }
        console.log("Total Price is: "+ totalPrice)
    }
    this.getTotalWeight = function(){
        var totalWeight = 0;
        for(var i=0; i < this.productList.length; i++) {
            var product = this.productList[i]
            total = product.unitWeight * product.quantity
            totalWeight = totalWeight + total
        }
        console.log("Total Weight is: "+ totalWeight)
    }
    this.getTotalCbm = function(){
        var totalCbm = 0;
        for(var i=0; i < this.productList.length; i++) {
            var product = this.productList[i]
            total = product.unitCbm * product.quantity
            totalCbm = totalCbm + total
        }
        console.log("Total CBM is: "+ totalCbm)
    }
    this.removeProduct = function(code){
        for(var i=0; i < this.productList.length; i++) {
            var product = this.productList[i]
            if(product.code === code) {
                this.productList.splice(i, 1)
                console.log("Product code " + product.code + " was removed from the product list")
            }
        }
    }
}
var shoppingCart = new ShoppingCart()

var pancitCanton = new Product("SKU0001", "Pancit Canton", 15, "BOX", 3.4, 2, 3.00)
var yakiSoba = new Product("SKU0002", "Yaki Soba", 3000, "BOX", 6.4, 2, 3.00)
shoppingCart.productList.push(pancitCanton)
shoppingCart.productList.push(yakiSoba)

console.log("****** [START] GET ITEMS *********")
shoppingCart.getItems()
console.log("****** [END] GET ITEMS *********\n")
console.log("****** [START] GET TOTAL PRICE *********")
shoppingCart.getTotalPrice()
console.log("****** [END] GET TOTAL PRICE *********\n")
console.log("****** [START] GET TOTAL WEIGHT *********")
shoppingCart.getTotalWeight()
console.log("****** [END] GET TOTAL WEIGHT *********\n")
console.log("****** [START] GET TOTAL CBM *********")
shoppingCart.getTotalCbm()
console.log("****** [END] GET TOTAL CBM *********\n")
shoppingCart.removeProduct("SKU0002")
console.log("****** [START] GET ITEMS *********")
shoppingCart.getItems()
console.log("****** [END] GET ITEMS *********\n")
console.log("****** [START] GET TOTAL PRICE *********")
shoppingCart.getTotalPrice()
console.log("****** [END] GET TOTAL PRICE *********\n")
console.log("****** [START] GET TOTAL WEIGHT *********")
shoppingCart.getTotalWeight()
console.log("****** [END] GET TOTAL WEIGHT *********\n")
console.log("****** [START] GET TOTAL CBM *********")
shoppingCart.getTotalCbm()
console.log("****** [END] GET TOTAL CBM *********\n")