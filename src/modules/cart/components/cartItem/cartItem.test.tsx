import { SelectedProductsContext } from "@contexts/selectedProductsContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockProduct } from "@utils/tests/mockProduct";
import CartItem from ".";
import { CartItemProps } from "./types";

const mockSetSelectedProducts = jest.fn((callback) => {
  callback([{ ...mockProduct, id: "123" }]);
});

const Component = ({ product }: { product: CartItemProps }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <SelectedProductsContext.Provider
        value={{
          selectedProducts: [product],
          setSelectedProducts: mockSetSelectedProducts,
        }}
      >
        <CartItem {...product} />
      </SelectedProductsContext.Provider>
    </QueryClientProvider>
  );
};

describe("CartView - CartItem", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("CartItem: render default", () => {
    render(<Component product={mockProduct} />);
    expect(screen.getByTestId("cart-item")).toBeInTheDocument();
    expect(
      screen.getByText(mockProduct.name.toUpperCase())
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `${mockProduct.storage.capacity} | ${mockProduct.color.name.toUpperCase()}`
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${mockProduct.storage.price} EUR`)
    ).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });
  it("should delete product when 'Delete' button is clicked", () => {
    render(<Component product={{ ...mockProduct, id: "123" }} />);
    expect(
      screen.getByText(mockProduct.name.toUpperCase())
    ).toBeInTheDocument();
    const button = screen.getByText("Delete");
    userEvent.click(button);
    expect(mockSetSelectedProducts).toHaveBeenCalledTimes(1);
    expect(mockSetSelectedProducts).toHaveBeenCalledWith(expect.any(Function));
  });
});
