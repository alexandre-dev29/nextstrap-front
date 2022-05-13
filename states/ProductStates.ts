import create from "zustand";
import { persist, devtools } from "zustand/middleware";
import { toast } from "react-hot-toast";
import { StateProduct } from "../UiTypes/StateProduct";

interface IProductState {
  cardItems: StateProduct[];
  totalPrice: number;
  totalQuantities: number;
  showCart: boolean;
  qty: number;
  onAdd: (product: StateProduct, quantity: number) => any;
  onRemove: (product: StateProduct) => any;
  setShowCart: (showCard: boolean) => any;
  setCartItems: (cardItems: StateProduct[]) => any;
  setTotalPrice: (totalPrice: number) => any;
  setTotalQuantities: (totalQuantity: number) => any;
  incQty: () => any;
  decQty: () => any;
  toggleCartItemQuantity: (idProduct: string, value: string) => any;
}

export const useECommerceStore = create<IProductState, any>(
  devtools(
    persist(
      (set, get) => ({
        qty: 1,
        cardItems: [],
        totalPrice: 0,
        totalQuantities: 0,
        showCart: false,
        onAdd: (product: StateProduct, quantity: number) => {
          const checkProductInCart = get().cardItems.find(
            (cartProduct) => cartProduct.productId === product.productId
          );
          if (checkProductInCart) {
            set((state) => ({
              totalPrice:
                product.productPrice &&
                state.totalPrice + product.productPrice * quantity,
              totalQuantities: state.totalQuantities + quantity,
            }));

            const updatedCartItems = get().cardItems.map((cartProduct) => {
              if (cartProduct.productId === product.productId) {
                return {
                  ...cartProduct,
                  quantity: cartProduct.quantity + quantity,
                };
              }
              return cartProduct;
            });
            set(() => ({
              cardItems: updatedCartItems,
            }));
            toast.success(`${quantity} ${product.productName} added`);
          } else {
            set((state) => ({
              totalPrice:
                product.productPrice &&
                state.totalPrice + product.productPrice * quantity,
              totalQuantities: state.totalQuantities + quantity,
            }));

            product.quantity = quantity;
            set((state) => ({
              cardItems: [...state.cardItems, { ...product }],
            }));
            toast.success(`${quantity} ${product.productName} added`);
          }
        },
        onRemove: (product: StateProduct) => {
          let findProduct =
            get().cardItems.find(
              (item) => item.productId === product.productId
            ) ?? ({} as any);
          const tempCart = get().cardItems.filter(
            (item) => item.productId !== product.productId
          );

          if (findProduct !== undefined) {
            set((state) => ({
              totalPrice:
                state.totalPrice -
                findProduct.productPrice * findProduct.productPrice,
              totalQuantities: state.totalQuantities - findProduct.quantity,
              cardItems: tempCart,
            }));
          }
        },
        setShowCart: (showCard: boolean) => {
          set(() => ({
            showCart: showCard,
          }));
        },
        setCartItems: (cardItems: StateProduct[]) => {
          set(() => ({
            cardItems: cardItems,
          }));
        },
        setTotalPrice: (totalPrice: number) => {
          set(() => ({
            totalPrice: totalPrice,
          }));
        },
        setTotalQuantities: (totalQuantity: number) => {
          set(() => ({
            totalQuantities: totalQuantity,
          }));
        },
        incQty: () => {
          set((state) => ({
            qty: state.qty + 1,
          }));
        },
        decQty: () => {
          let tempQty = get().qty - 1;
          if (tempQty < 1) {
            tempQty = 1;
          }
          set(() => ({
            qty: tempQty,
          }));
        },
        toggleCartItemQuantity: (idProduct: string, value: string) => {
          const searchedProduct = get().cardItems.find(
            (item: StateProduct) => item.productId === idProduct
          );
          let index = get().cardItems.findIndex(
            (product) => product.productId === idProduct
          );

          if (searchedProduct !== undefined) {
            if (value === "inc") {
              searchedProduct.quantity += 1;
              let itemsAdded = get().cardItems;
              itemsAdded[index] = searchedProduct;

              set((state) => ({
                cardItems: itemsAdded,
                totalPrice: state.totalPrice + searchedProduct.productPrice,
                totalQuantities: state.totalQuantities + 1,
              }));
            }

            if (value === "dec") {
              if (searchedProduct.quantity > 1) {
                searchedProduct.quantity -= 1;
                let itemsAdded = get().cardItems;
                itemsAdded[index] = searchedProduct;
                set((state) => ({
                  cardItems: itemsAdded,
                  totalPrice: state.totalPrice - searchedProduct.productPrice,
                  totalQuantities: state.totalQuantities - 1,
                }));
              }
            }
          }
        },
      }),
      { name: "NextStrap-Commerce" }
    )
  )
);
