import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            products: [
                {
                  id: 'p1',
                  image:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
                  title: 'Book Collection',
                  description:
                    'A collection of must-read books. All-time classics included!',
                  price: 99.99,
                },
                {
                  id: 'p2',
                  image:
                    'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg',
                  title: 'Mountain Tent',
                  description: 'A tent for the ambitious outdoor tourist.',
                  price: 129.99,
                },
                {
                  id: 'p3',
                  image:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
                  title: 'Food Box',
                  description:
                    'May be partially expired when it arrives but at least it is cheap!',
                  price: 6.99,
                },
              ],
              isLoggedIn: false,
              cart: { items: [], total: 0, qty: 0 },
        };
    },
    getters: {
        products(state){
            return state.products;
        },
        cart(state){
            return state.cart;
        },
        cartTotal(state){
            return state.cart.total.toFixed(2);
        },
        isLoggedIn(state){
          return state.isLoggedIn;
        }
    },
    mutations:{
        removeProductFromCart(state, payload) {
            const productInCartIndex = this.state.cart.items.findIndex(
              (cartItem) => cartItem.productId === payload.prodId
            );
            const prodData = this.state.cart.items[productInCartIndex];
            this.state.cart.items.splice(productInCartIndex, 1);
            this.state.cart.qty -= prodData.qty;
            this.state.cart.total -= prodData.price * prodData.qty;
          },
          addProductToCart(state, productData) {
            const productInCartIndex = this.state.cart.items.findIndex(
              (ci) => ci.productId === productData.id
            );
      
            if (productInCartIndex >= 0) {
              this.state.cart.items[productInCartIndex].qty++;
            } else {
              const newItem = {
                productId: productData.id,
                title: productData.title,
                image: productData.image,
                price: productData.price,
                qty: 1,
              };
              this.state.cart.items.push(newItem);
            }
            this.state.cart.qty++;
            this.state.cart.total += productData.price;
          },
          isAuth(state, payload) {
            this.state.isLoggedIn = payload.value;
          },
    },
    actions:{
        remove(context, payload){
            context.commit('removeProductFromCart', payload);
        },
        add(context, payload){
          context.commit('addProductToCart', payload);
        },
        login(context){
          context.commit('isAuth', {value: true});
        },
        logout(context){
          context.commit('isAuth', {value: false});
        }
    }
});

export default store;